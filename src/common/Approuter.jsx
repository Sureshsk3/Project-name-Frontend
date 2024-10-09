import NavBar from "../Components/Navbar";
import Dashboard from "../Components/Dashboard";
import Services from "../Components/Createservice";
import Protectedroute from "./Protectedroute";
import Home from "../Components/Home";
import Adminroute from "./Adminroute";
import { Navigate } from "react-router-dom";
import About from "../Components/About";
import Booking from "../Components/Booking";
import AllServices from "../Components/Services";
import Login from "../Components/Login";
import Signin from "../Components/Signin";
import Welcome from "../Components/Welcome";
import Forget from "../Components/Forget";
import OTP from "../Components/OTP";
import Contact from "../Components/Contact";
import ResetPassword from "../Components/Resetpassword";

export default [
  {
    path: "/welcome",
    element: (
      <>
        <NavBar />
        <Welcome />
        <AllServices/>
        <About />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <NavBar />
        <Home />
        <AllServices />
        <About />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <NavBar />
        <Login />
        <About />
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <NavBar />
        <Signin />
        <About />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Protectedroute>
        <NavBar />
        <Dashboard />
        <About />
      </Protectedroute>
    ),
  },
  {
    path: "/service",
    element: (
      <Protectedroute>
        <NavBar />
        <AllServices />
        <About />
      </Protectedroute>
    ),
  },
  {
    path: "/booking",
    element: (
      <Protectedroute>
        <NavBar />
        <Booking />
        <About />
      </Protectedroute>
    ),
  },
  {
    path: "/create-service",
    element: (
      <Protectedroute>
        <Adminroute>
          <NavBar />
          <Services />
          <About />
        </Adminroute>
      </Protectedroute>
    ),
  },
  {
    path: "/forget",
    element: (
      <>
        <NavBar />
        <Forget />
      </>
    ),
  },
  {
    path: "/otp",
    element: (
      <>
        <NavBar />
        <OTP />
      </>
    ),
  },
  {
    path: "/resetPassword",
    element: (
      <>
        <NavBar />
        <ResetPassword />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <NavBar />
        <Contact />
        <About />
      </>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/welcome" />,
  },
];
