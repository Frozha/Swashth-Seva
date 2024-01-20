import { useState } from "react";
import Hospital from "./hospital";
import Patient from "./Patient";

function Register() {
  const [ joinAs, setJoinAs ] = useState(true);
  
  function handlePatient() {
    setJoinAs(true);
  }

  function handleHospital() {
    setJoinAs(false);
  }

  const [ user, setUser ] = useState( null );

  const [ patient, setPatient ] = useState( {
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    password: ""
  } );
  const [ hospital, setHospital ] = useState( {
    name: "",
    company: "",
    city: "",
    email: "",
    phone: "",
    password: ""
  } );

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col items-center  p-[20px] bg-[#8cdcc8] text-[18px] h-[700px] w-[800px] rounded-md border-black border-2">
        <div className=" text-black font-bold text-[25px] flex ">
          Register As
        </div>
        <div className="flex flex-col items-center h-[650px] w-[700px] box-border border-white border-2 rounded-md">
          <div className="flex mt-[20px]">
            <button
              className={
                joinAs
                  ? "flex box-border justify-center items-center bg-black p-[10px] text-white text-[18px] rounded-md border-white border-2"
                  : "flex box-border justify-center items-center bg-[#8cdcc8] p-[10px] text-white text-[18px] rounded-md border-white border-2"
              }
              onClick={handlePatient}
            >
              Patient/Individual
            </button>
            <button
              className={
                !joinAs
                  ? "flex box-border justify-center items-center bg-black p-[10px] text-white text-[18px] rounded-md border-white border-2 ml-[30px]"
                  : "flex box-border justify-center items-center bg-[#8cdcc8] p-[10px] text-white text-[18px] rounded-md border-white border-2 ml-[30px]"
              }
              onClick={handleHospital}
            >
              Hospital/Radiologist
            </button>
          </div>
          <div>{joinAs ? <Patient user={user} setUser={setUser} patient={patient} setPatient={setPatient} hospital={hospital} setHospital={setHospital} /> : <Hospital user={user} setUser={setUser} patient={patient} setPatient={setPatient} hospital={hospital} setHospital={setHospital} />}</div>
        </div>
      </div>
    </div>
  );
}

export default Register;