import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Apirouter from "../common/Apirouter";
import AxiosService from "../common/AxiosServices";
import toast from "react-hot-toast";

function ResetPassword() {
  const id = sessionStorage.getItem("id");
  const token = sessionStorage.getItem('token')
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const Navigate = useNavigate();

  const resetPassword = async () => {
    try {
      if (password === confirmPassword) {
        const res = await AxiosService.put(
          `${Apirouter.FORGET_PASSWORD.path}/${id}/${token}`,
          {
            password,
          }
        );
        toast.success(`Password Reset successful`);
        Navigate("/login");
      } else {
        toast.error("Password Missmatched");
      }
    } catch (error) {
      toast.error("Ender Password");
    }
  };
 
  return (
    <>
      <div className="flex border-2 border-black p-3 rounded my-20 mx-auto justify-start w-fit flex-col bg-slate-500 text-white">
        <h3 className="text-center">Verify Email</h3>
       
        <div className="">
          <input
            type="password"
            autoComplete=""
            className="p-2 my-3 rounded-md border-2 text-black w-72"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="">
          <input
            type="password"
            autoComplete=""
            className="p-2 my-3 rounded-md border-2 text-black w-72"
            placeholder="Enter Your ConfirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={resetPassword}
          className="bg-blue-400 w-fit p-2 rounded m-2"
        >
          Submit
        </button>
       
      </div>
    </>
  );
}

export default ResetPassword;
