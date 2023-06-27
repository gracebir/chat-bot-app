import React from 'react'
import Chat from './Chat'

function ChatArea() {
  return (
    <div className='flex flex-col w-full flex-1 gap-4 overflow-y-scroll scroll-hidden relative p-4'>
      <Chat text={"How are you?"} user={"GR"} isAi={false}/>
      <Chat text={"Are you a human?"} user={"GR"} isAi={false}/>
      <Chat text={"Nope I am not a human"} isAi={true}/>
    </div>
  )
}

export default ChatArea
