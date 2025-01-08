import React from 'react'
import { MdAttachFile, MdSend } from "react-icons/md";

const ChatPage = () => {
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