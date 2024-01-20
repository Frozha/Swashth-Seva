import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function PatientLogin() {

  const navigate = useNavigate();

  const [ data, setData ] = useState({
    email: "",
    phone: "",
    password: ""
  });

  useEffect(() => {
    console.log(data);
  }, [data]);
  

    console.log( data );

    async function handleLogin(){
      const res = await axios.post( import.meta.env.VITE_APP_LOGIN_USER_API_END_POINT, data, { withCredentials: true } );

      if( res ){
        navigate('/browse')
      }
    }

    function handleChangeDetails(event) {
      const numericRegex = /^[0-9]+$/;
      const v = event.target.value;
    
      setData((prev) => ({
        ...prev,
        ...(numericRegex.test(v) ? { email: "", phone: v } : { email: v, phone: "" }),
      }));

    }
    
    const handlePassword = ( event ) => {
      setData( ( prev ) => (
        {
          ...prev,
          [ "password" ]: event.target.value
        }
      ) );
      
      console.log( data );
    }

  return (
    <div>
      <div className="ml-[25px]">
        <input
          type="text"
          className=" text-black h-[35px] w-[400px] rounded-sm mt-[20px] p-[7px]"
          placeholder="Phone/Email"
          onChange={handleChangeDetails}
        ></input>
      </div>
      <div className="ml-[25px]">
        <input
          type="text"
          className=" text-black h-[35px] w-[400px] rounded-sm mt-[20px] p-[7px]"
          placeholder="Password"
          name="password"
          value={ data.password }
          onChange={handlePassword}
        ></input>
      </div>
      <div>
        <button 
        className="flex box-border bg-black text-white h-[40px] w-[450px] mt-[40px] justify-center items-center  rounded-2xl text-[18px]"
        onClick={handleLogin}
        >
          Log In
        </button>
      </div>
    </div>
  );
}
