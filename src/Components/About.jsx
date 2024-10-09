import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
function About() {
  const details = [
    "Services",
    "About",
    "Contact us",
    "Privacy Policy",
    "Terms of Service",
  ];
  return (
    <>
      <div className="grid md:grid-cols-2 w-full h-fit bg-slate-400 text-black font-bold">
        <div className=" grid mx-2">
          <img
            src={"/logo.png"}
            className="w-24  my-3 rounded md:mx-10 "
            alt=""
          />
         
          <p className="text-xl my-0 w-[70%]">
            No 20, first street,Park Service Road, Guindy, Chennai - 600036
          </p>
          <p className="text-xl text-justify mb-0">
            <FaPhoneAlt className="inline" /> &nbsp; 044 - 3244 4432
          </p>
          <p className="text-xl text-justify ">
            <MdOutlineMail className="inline" /> &nbsp; carcare@gmail.co.in
          </p>
        </div>
        <div className=" grid  container">
          <ul className="grid md:flex  ">
            {details.map((e, i) => {
              return (
                <li className="m-3" key={i}>
                  {e}
                </li>
              );
            })}
          </ul>
          <hr />
          <div className=" text-center my-2">
            <span> &#169; 2023 - 2024 No 1 Service Private Limited </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
