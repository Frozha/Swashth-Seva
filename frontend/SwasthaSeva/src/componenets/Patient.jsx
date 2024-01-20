import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Patient( { user, setUser, patient, setPatient, hospital, setHospital } ) {

    const navigate = useNavigate();

    const handleFieldChange = ( event ) => {
        setPatient( ( prev ) => {
            return { ...prev, [ event.target.name ]: event.target.value }
        } )
    }

    const [ first, setFirst ] = useState( "" );
    const [ last, setLast ] = useState( "" );
    const [ cpass, setCPass ] = useState( "" )


    const handleChangeFirstName = (event) => {
        setFirst(event.target.value);
        setPatient((prev) => ({
            ...prev,
            ["name"]: event.target.value + " " + last,
        }));
        setUser((prev) => ({
            ...prev,
            ["name"]: event.target.value + " " + last,
        }));
    };
    
    const handleChangeLastName = (event) => {
        setLast(event.target.value);
        setPatient((prev) => ({
            ...prev,
            ["name"]: first + " " + event.target.value,
        }));
        setUser((prev) => ({
            ...prev,
            ["name"]: first + " " + event.target.value,
        }));
    };    

    const handleRegister = async () => {

        setFirst( "" );
        setLast( "" );
        setCPass( "" );

        setHospital({
            name: "",
            company: "",
            city: "",
            email: "",
            phone: "",
            password: ""
        });

        setUser( Object.assign( {}, patient ) );

        setPatient({
            name: "",
            age: "",
            gender: "",
            email: "",
            phone: "",
            password: ""
        });
        

        //console.log(import.meta.env.VITE_APP_REGISTER_USER_API_END_POINT);
        const res = await axios.post( import.meta.env.VITE_APP_REGISTER_USER_API_END_POINT, Object.assign( {}, patient) );

        if( !res ){
            console.log(`Couldnot register the user.`);
        } else{
            console.log( res );
        }
    }

  return (
    <div>
        <div className=" w-[650px] bg-[#00a0a0] mt-[20px] p-[20px]">
            <div className="flex w-[600px] justify-around">
                <span>
                    <div className="text-white">First Name</div>
                    <input 
                    className=" rounded-sm mt-[7px] pl-[5px] text-[14px] h-[30px] w-[200px]" value={ first }
                    onChange={ handleChangeFirstName }
                    />
                </span>
                <span>
                    <div className="text-white">Last Name</div>
                    <input 
                    className="rounded-sm mt-[7px] pl-[5px] text-[14px] h-[30px] w-[200px]" value={ last }
                    onChange={ handleChangeLastName }
                    />
                </span>
            </div>
            <div className="flex mt-[10px] ml-[35px] w-[400px] justify-around">
                <span>
                    <div className="text-white">Age</div>
                    <input 
                    className="rounded-sm mt-[7px] pl-[5px] text-[14px] " 
                    name={"age"}
                    value={ patient.age }
                    onChange={ handleFieldChange }
                    />
                </span>
                <span>
                    <div className="text-white">Gender</div>
                    <input 
                    className="rounded-sm mt-[7px] pl-[5px] text-[14px] " 
                    name={"gender"}
                    value={ patient.gender }
                    onChange={ handleFieldChange }
                    />
                </span>
            </div>
            <div className="mt-[10px] ml-[50px]">
                <span>
                    <div className="text-white">Email</div>
                    <input className="w-[500px] rounded-sm h-[30px] mt-[7px] pl-[10px]" 
                    name={"email"}
                    value={ patient.email }
                    onChange={ handleFieldChange }
                    />
                </span>
            </div>
            <div className="mt-[10px] ml-[50px]">
                <span>
                    <div className="text-white">Phone No.</div>
                    <input 
                    className="w-[500px] rounded-sm h-[30px] mt-[7px] pl-[10px]" 
                    name={"phone"}
                    value={ patient.phone }
                    onChange={ handleFieldChange }
                    />
                </span>
            </div>
            <div className="flex w-[600px] justify-around mt-[10px]">
                <span>
                    <div className="text-white">Password</div>
                    <input 
                    className="rounded-sm mt-[7px] pl-[5px] text-[14px] h-[30px] w-[200px]" 
                    name={"password"}
                    value={ patient.password }
                    onChange={ handleFieldChange }
                    />
                </span>
                <span>
                    <div className="text-white">Confirm Password</div>
                    <input 
                    className="rounded-sm mt-[7px] pl-[5px] text-[14px] h-[30px] w-[200px]" 
                    name={"cpass"}
                    value={ cpass }
                    onChange={ ( event ) => ( setCPass( event.target.value ) ) }
                    />
                </span>
            </div>
            <div className="flex flex-col justify-center mt-[10px]">
                <button 
                className="flex flex-row box-border justify-center items-center bg-[#00a0a0] p-[7px] text-black text-[18px] rounded-md border-white border-2 hover:bg-black hover:text-white"
                onClick={ handleRegister }
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