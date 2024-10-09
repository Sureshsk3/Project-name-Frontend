import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Apirouter from "../common/Apirouter";
import AxiosService from "../common/AxiosServices";
import toast from "react-hot-toast";
function OTP() {
  const id = sessionStorage.getItem("id");
  const [token,setToken] = useState("")
  
  const Navigate = useNavigate();
  const otpVerification = async () => {
    try {
      const res = await AxiosService.get(
        `${Apirouter.FORGET_PASSWORD.path}/${id}/${token}`,
        {
          token,
        }
      );
      toast.success(`Token Valied`);
      sessionStorage.setItem("token",res.token)
      Navigate("/resetPassword");
    } catch (error) {            
      toast.error(`Token Invalied`);
    }
  };
  return (
    <>
      <div className="flex border-2 border-black p-3 rounded my-20 mx-auto justify-start w-fit flex-col bg-slate-500 text-white ">
        <input
          type="text"
          autoComplete=""
          className="p-2 my-3 rounded-md border-2 text-black w-72"
          placeholder="Enter Your Token"
          onChange={(e) => setToken(e.target.value)}
        />
      <button
        type="submit"
        onClick={otpVerification}
        className="bg-blue-400 w-fit p-2 rounded m-2"
      >
        Submit
      </button>
      </div>
    </>
  );
}

export default OTP;
