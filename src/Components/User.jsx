import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Apirouter from "../common/Apirouter";
import AxiosService from "../common/AxiosServices";
function User() {
  const token = sessionStorage.getItem("token");
  const [users, setUsers] = useState([]);
  const getData = async () => {
    try {
      const res = await AxiosService.get(`${Apirouter.GETALL_USERS.path}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data);
      toast.success("Data fetched Successfull");
    } catch (error) {
      console.log(error);

      toast.error("You Are Not Access the Components");
    }
  };

  // useEffect(()=>{
  //   getData()
  // },[])
  return (
    <div>
      {users.map((e, i) => {
        return <h1>{e.fullName}</h1>;
      })}
    </div>
  );
}

export default User;
