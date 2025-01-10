import { createContext,useContext,useState } from "react";

const ChatContext = createContext();


export const ChatProvider = ({children})=>{

     const [roomId,setRoomId] = useState("");
     const [currentUser,setCurrentUser] = useState("");
    return (
        <ChatContext.Provider value={{roomId,currentUser,setRoomId,setCurrentUser}}>
            {children}
        </ChatContext.Provider>
    );
};

const useChatContext = ()=> useContext(ChatContext);
export default useChatContext