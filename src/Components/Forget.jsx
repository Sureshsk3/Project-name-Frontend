import React, { useEffect, useState } from "react";
import Apirouter from "../common/Apirouter";
import toast from "react-hot-toast";
import AxiosService from "../common/AxiosServices";
import { useNavigate } from "react-router-dom";

function Forget() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");

  const verifyEmail = async () => {
    try {
      const res = await AxiosService.post(`${Apirouter.FORGET_PASSWORD.path}`, {
        email,
      });
      toast.success(`Forget link send to ${email}`);
      sessionStorage.setItem("id",res.id)
      Navigate("/otp")
    } catch (error) {
      toast.error("Pleace Ender Valied Email Id");
    }
  };
  return (
    <div className="flex border-2 border-black p-3 rounded my-20 mx-auto justify-start w-fit flex-col bg-slate-500 text-white">
      <h3 className="text-center">Verify Email</h3>
      <div className="">
        <input
          type="text"
          autoComplete="email"
          className="p-2 my-3 rounded-md border-2 text-black w-72"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      
      </div>
        <button
          type="submit"
          onClick={verifyEmail}
          className="bg-blue-400 w-fit p-2 rounded m-2"
        >
          Submit
        </button>
     
    </div>
  );
}

export default Forget;
