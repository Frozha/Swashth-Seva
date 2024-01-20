import { useState } from "react";
import { Link } from "react-router-dom";
import UserLogin from "./PatientLogin";
import HospitalLogin from "./HospitalLogin";


function Login({ closeSignUp }) {
  const [user, setUser] = useState(true);
  function handlePatient() {
    setUser(true);
  }
  function handleHospital() {
    setUser(false);
  }

  return (
    <div className="flex bg-opacity-55  bg-slate-300  justify-center items-center  h-screen w-screen ">
      <div className="box-border bg-[#00a0a0] p-[16px] text-white text-[16px] h-[350px] w-[500px] rounded-md flex flex-col  items-center  shadow-2xl">
        <div className="flex justify-between w-[250px] ml-[200px]">
          <span className="flex text-white text-[20px] font-bold">Log In</span>{" "}
          <button className="" onClick={closeSignUp}>
            <img
              src="./src/images/cross.png"
              style={{ height: "30px", width: "30px" }}
            />
          </button>
        </div>
        <div className="flex text-white">
          New To Swatha Sewa?
          <span className="ml-3 flex text-black  cursor-pointer">
            <Link to="/register">Resgister</Link>
          </span>
        </div>
        <div className="flex w-[300px] justify-between mt-[20px]">
          <button
            className={
              user
                ? "flex justify-center items-center px-[10px] py-[5px] bg-black text-white rounded-sm h-[34px] w-[78px] border-white box-border border-2"
                : "flex justify-center items-center px-[10px] py-[5px] bg-[#00a0a0] text-white rounded-sm h-[34px] w-[78px] border-white box-border border-2"
            }
            onClick={handlePatient}
          >
            Patient
          </button>
          <button
            className={
              !user
                ? "flex justify-center items-center px-[10px] py-[5px] bg-black text-white rounded-sm h-[34px] w-[78px] border-white box-border border-2"
                : "flex justify-center items-center px-[10px] py-[5px] bg-[#00a0a0] text-white rounded-sm h-[34px] w-[78px] border-white box-border border-2"
            }
            onClick={handleHospital}
          >
            Hospital
          </button>
        </div>
        {user ? <UserLogin/> : <HospitalLogin/>}
      </div>
    </div>
  );
}

export default Login;
