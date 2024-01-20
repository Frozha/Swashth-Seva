import React from 'react'

export default function NavBar({ openSignUp }) {
  
  return (
    <div className="flex w-screen h-[125px] justify-between items-center bg-[#00a0a0]">
        <div className='flex' style={{ height: '100px', width: '400px' }}>
        <img src="./src/images/LOGO.png"></img>
        </div>
        <button className='flex box-border px-[10px] py-[6px] justify-center items-center bg-black text-white rounded-md mr-[100px]' onClick={ openSignUp }>Log In</button>
    </div>
  )
}
