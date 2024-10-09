import React, { useEffect, useState } from "react";
import Apirouter from "../common/Apirouter";
import toast from "react-hot-toast";
import AxiosService from "../common/AxiosServices";
import { Link, useNavigate } from "react-router-dom";
import UseLogout from "../utils/UseLogout";
function Login() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  const logout = UseLogout()
  const handleLogin = async () => {
    try {
      const res = await AxiosService.post(
        `${Apirouter.LOGIN.path}`,
        {
          email,
          password,
        },
        { autheticate: Apirouter.LOGIN.auth }
      );
      sessionStorage.setItem("name", res.name);
      sessionStorage.setItem("token", res.token);
      sessionStorage.setItem("role", res.role);
      sessionStorage.setItem("id", res.id);
      toast.success(res.message);
      Navigate("/home");
    } catch (error) {
      toast.error("Email Or Password Incorrect");
    }
  };
useEffect(()=>{
  logout()
},[])
  return (
    <>
      <div className="flex mb-10 top-10 text-fuchsia-50 leading">
        {login ? (
          <div
            className="bg-slate-500 mt-5 align-middle p-3 m-auto rounded-lg "
            style={{ height: "500px" }}
          >
            <div>
              <img
                src="./logo.png"
                alt="logo"
                width={100}
                className="m-auto mt-2"
              />
              <h2 className="mt-3 ml-2 text-center ">Log In Your Account</h2>
            </div>
            <div>
              <input
                type="text"
                autoComplete="email"
                className="p-2 my-3 rounded-md text-black w-72"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                className="p-2 my-3 rounded-md text-black w-72"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link to="/forget" className="w-full text-xl text-black text-end">
              <p>Forget Password</p>
            </Link>
            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className="p-2.5 btn-green rounded w-20 mt-2 "
              >
                Login
              </button>
            </div>
            <div>
              <p className="sd:text-base md:text-lg lg:text-xl mt-14">
                Not have An Account ?{" "}
                <Link
                  to="/signin"
                  className="btn-blue p-2.5 rounded no-underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Login;
