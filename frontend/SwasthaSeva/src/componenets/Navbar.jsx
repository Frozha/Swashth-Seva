import React from 'react'

export default function NavBar({ openSignUp }) {
  
  return (
    <div className="flex w-screen h-[100px]  justify-between items-center bg-[#00a0a0]">
        <div className='flex  text-white text-[35px] font-black mx-auto'>SWASTHA &ensp;SEVA</div>
        <button className='flex box-border px-[10px] py-[6px] justify-center items-center bg-black text-white  rounded-md mr-[100px]' onClick={ openSignUp }>Log In</button>
    </div>
  )
}
