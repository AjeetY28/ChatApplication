package com.substring.chat;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.substring.chat.entities.Room;

public interface RoomRepository extends MongoRepository<Room, String>{

    Room findByRoomId(String roomId);
} 
