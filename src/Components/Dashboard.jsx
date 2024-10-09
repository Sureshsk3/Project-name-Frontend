import React, { useEffect, useState } from "react";
import Apirouter from "../common/Apirouter";
import AxiosService from "../common/AxiosServices";
function Dashboard() {
  const token = sessionStorage.getItem("token");
  const id = sessionStorage.getItem("id");
  const [data, setData] = useState([]);
  const role = sessionStorage.getItem("role");
  const getAMyBookings = async () => {
    try {
      const res = await AxiosService.get(
        `${Apirouter.GETONE_BOOKING.path}/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setData(res.data); 
    } catch (error) {}
  };
  const getAllBookings = async () => {
    try {
      const res = await AxiosService.get(`${Apirouter.GETALL_BOOKING.path}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setData(res.data);
    } catch (error) {}
  };
  const buttons = [
    {
      lable: "Approved",
      color: "bg-green-500 p-2 rounded m-2",
      status: ["Pending", "Rejected"],
      to:"Approved"
    },
    {
      lable: "Rejected",
      color: "bg-red-500 p-2 rounded m-2",
      status: ["Pending", "Approved"],
      to:"Rejected"
    },
  ];

  useEffect(() => {
    if (role === "Admin") getAllBookings();
    else if (role === "User") getAMyBookings();
    else console.log("Invaild User");
  }, []);

  return (
    <>
      <div className="h-screen w-full ">
        <h2 className="h-20 grid text-center justify-center text-white items-center m-auto bg-slate-500">All Booking Are Here</h2>
        <table className="w-full overflow-x-scroll text-center text-white">
          <thead className=" bg-black border-2 h-20 border-slate-500 ">
            <tr className="">
              <th className="border-2">ServiceName</th>
              <th className="border-2">BookingDate</th>
              <th className="border-2">Model</th>
              <th className="border-2">Status</th>
              {role === "Admin" ? <th className="border-2">Action</th> : <></>}
            </tr>
          </thead>
          <tbody className="border-2 border-black  bg-slate-400 h-10">
            {data.map((item, i) => {
              return (
                <tr className="" key={i}>
                  <td className="border-2">{item.serviceName}</td>
                  <td className="border-2">{item.date}</td>
                  <td className="border-2">{item.carModel}</td>
                  <td className="border-2">{item.status}</td>
                  {role === "Admin" ?<td className="border-2">
                    {buttons.map((e, i) => {
                      return e.status.includes(item.status) ? (
                        <button className={`${e.color}`} key={i}>{e.lable}</button>
                      ) : (
                        <></>
                      );
                    })}
                  </td>:<></>}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
