package com.substring.chat.controller;

import java.time.LocalDateTime;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

import com.substring.chat.RoomRepository;
import com.substring.chat.entities.Message;
import com.substring.chat.entities.Room;
import com.substring.chat.playload.MessageRequest;

@Controller
public class ChatController {



    private RoomRepository roomRepository;

    public ChatController(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    // for sending and receving messages
    @MessageMapping("/sendMessage/{roomId}")
    @SendTo("/topic/romm/{roomId}")
    public Message sendMessage(
        @DestinationVariable String roomId,
        @RequestBody MessageRequest request
    ){

       Room room = roomRepository.findByRoomId(request.getRoomId());

       Message message=new Message();
       message.setContent(request.getContent());
       message.setSender(request.getSender());
       message.setTimeStamp(LocalDateTime.now());

       if(room!=null)
       {
        room.getMessages().add(message);
        roomRepository.save(room);
       }else{

        throw new RuntimeException("Room not found");
       }


       return message;
    }
}
