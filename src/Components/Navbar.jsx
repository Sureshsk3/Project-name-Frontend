import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import UseLogout from "../utils/UseLogout";
import {
  FaHome,
  FaPowerOff,
  FaHandshake,
  FaRegAddressBook,
} from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoCreateOutline, IoLogInOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
function NavBar() {
  const token = sessionStorage.getItem("token");
  const navItems = [
    {
      lable: "HOME",
      path: "/home",
      role: ["User", "Admin"],
      icon: <FaHome />,
    },
    {
      lable: "DASHBOARD",
      path: "/dashboard",
      role: ["User", "Admin"],
      icon: <LuLayoutDashboard />,
    },
    {
      lable: "CREATE SERVICE",
      path: "/create-service",
      role: ["Admin"],
      icon: <IoCreateOutline />,
    },
    {
      lable: "REACH US",
      path: "/about",
      role: ["Admin", "User"],
      icon: <FaRegAddressBook />,
    },
  ];

  const { pathname } = useLocation();
  const logout = UseLogout();
  const role = sessionStorage.getItem("role");
  const [toggle, settoggle] = useState(false);
  return (
    <>
      <section className=" h-full w-full grid items-center  bg-gray-300 md:flex px-3 sticky top-0 z-1">
        {token ? (
          <div className=" my-2  ">
            <img src="./logo.png" alt="" className={` rounded w-24 `} />
          </div>
        ) : (
          <Link to="/welcome">
            <div className=" my-2  ">
              <img
                src="./logo.png"
                alt=""
                className=" rounded w-24 cursor-pointer"
              />
            </div>
          </Link>
        )}
        <nav className="flex md:flex items-center w-full justify-end ">
          {token ? (
            <div className=" hidden md:block">
              <ul className=" flex  p-0 my-3 ">
                {navItems.map((e, i) => {
                  return e.role.includes(role) ? (
                    <Link
                      to={e.path}
                      className="no-underline text-black"
                      key={i}
                    >
                      <li
                        className={` cursor-pointer hover:text-black duration-800 px-3 py-2 ${
                          pathname === e.path
                            ? " border-b-2 border-black w-fit  italic text-xl"
                            : ""
                        }`}
                      >
                        <span>{e.lable}</span>
                      </li>
                    </Link>
                  ) : (
                    ""
                  );
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
          {toggle ? (
            <div className=" flex-col md:hidden block w-full">
              <ul className=" my-3 p-0">
                {navItems.map((e, i) => {
                  return (
                    <div key={i}>
                      {e.role.includes(role) ? (
                        <Link to={e.path} className="no-underline text-black">
                          <li
                            className={` flex text-xl p-2 m-2 cursor-pointer  duration-500 my-3   ${
                              pathname === e.path
                                ? "text-black w-fit rounded bg-white p-2 my-2 italic "
                                : ""
                            }`}
                            title={e.lable}
                          >
                            <span className="mx-2">{e.icon}</span>
                            <span> {e.lable}</span>
                          </li>
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
                {token ? (
                  <FaPowerOff
                    className={`text-4xl ml-4 cursor-pointer  sm:hover:text-red-600`}
                    title="Log out"
                    onClick={logout}
                  />
                ) : (
                  <Link to="/login" className="text-white">
                    {" "}
                    <button
                      className={`font-bold  bg-blue-500 p-2 rounded cursor-pointer `}
                      title="Log In"
                    >
                      Log In
                    </button>
                  </Link>
                )}
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className="hidden md:block">
            {token ? (
              <FaPowerOff
                className={`text-4xl ml-4 cursor-pointer  sm:hover:text-red-600`}
                title="Log out"
                onClick={logout}
              />
            ) : (
              <Link to="/login" className="text-white">
                {" "}
                <button className={`p-2 btn-blue rounded  `} title="Log In">
                  Log In
                </button>
              </Link>
            )}
          </div>
        </nav>

        <GiHamburgerMenu
          className="block md:hidden absolute top-5 -right-0 mr-5 text-2xl "
          onClick={() => settoggle(!toggle)}
        />
      </section>
    </>
  );
}

export default NavBar;
