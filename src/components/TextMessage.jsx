import React, { useState } from 'react'
import sent from '../assets/send.svg'

function TextMessage() {
    const [text, setText] = useState("")
  return (
    <div className='px-4 py-4'>
      <div className='border border-gray-color w-full rounded-lg flex items-center pr-4'>
        <input value={text} name="text" onChange={(e)=> setText(e.target.value)} placeholder='Type your prompt here...' className='rounded-lg outline-none w-full py-3 px-4 placeholder:text-gray-color' type="text" />
        <span className='cursor-pointer'>
            <img src={sent} alt="sent" />
        </span>
      </div>
    </div>
  )
}

export default TextMessage
