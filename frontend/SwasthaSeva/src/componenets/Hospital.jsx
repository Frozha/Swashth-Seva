import React from 'react';
import RegisterInput from './registerInput';
import { Link } from 'react-router-dom';

export default function Hospital() {
  return (
    <div>
        <div className=" w-[650px] bg-[#00a0a0] mt-[20px] p-[20px]">
            <div className="flex w-[600px] justify-around">
                <RegisterInput name={"Name"} className=" rounded-sm mt-[7px] pl-[5px] text-[14px] h-[30px] w-[200px]"></RegisterInput>
                <RegisterInput name={"Company"} className="rounded-sm mt-[7px] pl-[5px] text-[14px] h-[30px] w-[200px]"></RegisterInput>
            </div>
            <div className="flex mt-[10px] ml-[35px] w-[400px] justify-around">
                <RegisterInput name={"City"} className="rounded-sm mt-[7px] pl-[5px] text-[14px] "></RegisterInput>
                <RegisterInput name={"Adress"} className="rounded-sm mt-[7px] pl-[5px] text-[14px] "></RegisterInput>
            </div>
            <div className="mt-[10px] ml-[50px]">
                <RegisterInput name={"Your Email"} className="w-[500px] rounded-sm h-[30px] mt-[7px] pl-[10px]"></RegisterInput>
            </div>
            <div className="mt-[10px] ml-[50px]">
                <RegisterInput name={"Phone no"} className="w-[500px] rounded-sm h-[30px] mt-[7px] pl-[10px]"></RegisterInput>
            </div>
            <div className="flex w-[600px] justify-around mt-[10px]">
                <RegisterInput name={"Password"} className="rounded-sm mt-[7px] pl-[5px] text-[14px] h-[30px] w-[200px]"></RegisterInput>
                <RegisterInput name={"confirm PassWord"} className="rounded-sm mt-[7px] pl-[5px] text-[14px] h-[30px] w-[200px]"></RegisterInput>
            </div>
            <div className="flex flex-col justify-center mt-[10px]">
                <button 
                className="flex flex-row box-border justify-center items-center bg-[#00a0a0] p-[7px] text-black text-[18px] rounded-md border-white border-2 hover:bg-black hover:text-white"
                /*onClick={ handleRegister }*/
                >
                    Register
                </button>
                <div className='flex flex-row mx-auto mt-3'>
                    <h1>
                        Already a user?
                    </h1>
                    <h1 className='ml-2'>
                        <Link
                            to='/'
                        >
                            Login
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
};