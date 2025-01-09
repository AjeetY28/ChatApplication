import React, { useRef ,useState } from 'react'
import { MdAttachFile, MdSend } from "react-icons/md";




const ChatPage = () => {
    const[messages, setMessages] = useState([
        {
            content:"hello ?",
            sender:"Ajeet",
        },
        {
            content:"hello ?",
            sender:"Akash",
        },
        {
            content:"hello ?",
            sender:"Pratik",
        },
        
        {
            content:"hello ?",
            sender:"Pratik",
        },
        {
            content:"hello ?",
            sender:"Ajeet",
        },
    ]);
    const[input, setInput] = useState("");
    const inputRef=useRef(null);
    const chatBoxRef=useRef(null);
    const [stompClient, setStompClient] = useState(null);
    const [roomId, setRoomId] = useState(null);
    const [currentUser] = useState("Ajeet");
  return (
    <div className=''>

        {/* header container*/}
        <header className='dark:border-gray-700 fixed w-full shadow dark:bg-gray-900 py-5  flex justify-around items-center'>
            {/* room name container*/}
            <div className=''>
                <h1 className="text-xl font-semibold">
                 Room : <span>Family Room</span>
                </h1>
            </div>
            
            {/* user name container*/}
            <div>
                <h1 className="text-xl font-semibold">
                 User : <span>Ajeet Yadav</span>
                </h1>
            </div>
            {/* button leave room*/}
            <div>
                <button className="dark:bg-red-500 dark:hover:bg-red-700 px-3 py-2 rounded-full">
                    Leave Room
                </button>
            </div>
        </header>

        <main className='py-20  px-10 w-2/3 dark:bg-slate-600 mx-auto h-screen overflow-auto'>
            {
                messages.map((message,index) =>(
                   <div key={index} className={`flex ${message.sender==currentUser ? 'justify-end' : 'justify-start'}`}>
                     <div  
                     className={`my-2 
                        ${
                            message.sender===currentUser ? 'bg-green-800 ': 'bg-gray-800'} p-2 max-w-xs rounded`}>
                        
                        <div className='flex flex-row gap-2'>
                            <img className='h-10 w-10' 
                            src={'https://avatar.iran.liara.run/public'} 
                            alt="" />
                        <div className='flex flex-col gap-1'>
                           <p className='text-sm font-bold'>{message.sender}</p>
                           <p>{message.content}</p>

                        </div>
                        </div>

                    </div>
                   </div>
                ))
            }
        </main>



        {/* Input message container*/}
        <div className=' fixed bottom-4 w-full h-16'>
           <div className='h-full pr-10  gap-4  flex items-center justify-between rounded-full w-1/2 mx-auto  dark:bg-gray-900'>
                <input type="text" className='dark:border-gray-600 w-full  dark:bg-gray-800 w h-full rounded-full px-5 py-2 focus:outline-none' 
                placeholder='Enter your message here'/>
               
               <div className='flex gap-1'>
                    <button className='dark:bg-purple-600 px-3 py-2 h-10 w-10 flex justify-center items-center rounded-full'>
                    <MdAttachFile size={20} />
                    </button>

                    <button className='dark:bg-green-600 px-3 py-2 h-10 w-10 flex justify-center items-center rounded-full'>
                    <MdSend size={20} />
                    </button>
               </div>
           </div>
        </div>

    </div>
  )
};

export default ChatPage