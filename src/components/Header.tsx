import React from 'react'

function Header() {
  return (
    <header className='flex gap-4 items-center font-poppins py-4 px-4 bg-white border-b border-gray-color sticky right-0 w-full top-0 z-50'>
      <img src={"https://res.cloudinary.com/dnzidlufh/image/upload/v1687857333/Subtract_i6mhek.svg"} alt="logo" />
      <div>
        <h3 className='text-head-color font-semibold text-xl'>Elastic Team </h3>
        <span>Open AI - Text Generator</span>
      </div>
    </header>
  )
}

export default Header
