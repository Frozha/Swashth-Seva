import React from 'react'

export default function HospitalLogin() {
    function handleChange()
    {
        
    }
  return (
    <div>
      <div className='ml-[25px]'>
        <input
          type="text"
          className=" text-black h-[35px] w-[400px] rounded-sm mt-[20px] p-[7px]"
          placeholder="Phone/Email"
          onChange={handleChange}
        ></input>
      </div>
      <div className='ml-[25px]'>
        <input
          type="text"
          className=" text-black h-[35px] w-[400px] rounded-sm mt-[20px] p-[7px]"
          placeholder="PassWord"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <button className="flex box-border bg-black text-white h-[40px] w-[450px] mt-[40px] justify-center items-center  rounded-2xl text-[18px]">
          Log In
        </button>
      </div>
    </div>
  )
}
