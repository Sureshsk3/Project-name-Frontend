import React, { useEffect } from "react";
import { useState } from "react";
import UseLogout from "../utils/UseLogout";
import Apirouter from "../common/Apirouter";
import toast from "react-hot-toast";
import AxiosService from "../common/AxiosServices";
import { useNavigate } from "react-router-dom";
function Signin() {
  const Navigate = useNavigate()
  const logout = UseLogout();
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSignin = async () => {
    try {
      if (password === confirmPassword) {
        console.log("hello");
        
        const res = await AxiosService.post(`${Apirouter.CREATE_USER.path}`, {
          fullName,
          email,
          phone,
          password,
        });
        toast.success("User Created Successful");
        Navigate("/login");
      } else {
        toast.error("Password Missmatched");
      }
    } catch (error) {
      toast.error("Please fill all the Filelds");
    }
  };
  return (
    <div className="p-2 flex  mb-10 text-fuchsia-50 leading">
      <div className="bg-slate-500 m-auto mt-5 p-3 rounded-lg  ">
        <div>
          <img
            src="./logo.png"
            alt="logo"
            width={100}
            className="m-auto mt-2"
          />
          <h2 className="mt-3 ml-2 text-center">Create Account</h2>
        </div>
        <div>
          <input
            type="text"
            autoComplete="name"
            className="p-2 my-3 rounded-md text-black w-72"
            placeholder="Enter Your FullName"
            required
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            autoComplete="email"
            className="p-2 my-3 rounded-md text-black w-72"
            placeholder="Enter Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            className="p-2 my-3 rounded-md text-black w-72"
            placeholder="Enter Your Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            className="p-2 my-3 rounded-md text-black w-72"
            placeholder="Enter ConfirmPassword"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div>
          <input
            type="number"
            className="p-2 my-3 rounded-md text-black w-72"
            placeholder="Enter Your Phone"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <button
            type="submit"
            onClick={handleSignin}
            className="p-2.5 btn-red rounded w-20 mt-3 "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
