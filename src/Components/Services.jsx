import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import AxiosService from "../common/AxiosServices";
import Apirouter from "../common/Apirouter";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import Services from "./Createservice";
import Booking from "./Booking";
function AllServices() {
  const token = sessionStorage.getItem("token");
  const role = sessionStorage.getItem("role");
  const [data, setData] = useState([]);
  const getAllServices = async () => {
    try {
      if (true) {
        const res = await AxiosService.get(
          `${Apirouter.GETALL_SERVICES.path}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        setData(res.data);        
      }
    } catch (error) {
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await AxiosService.delete(
        `${Apirouter.DELETE_SERVICE.path}/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Service Deleted Successful");
      getAllServices();
    } catch (error) {
      toast.error("ID Not Available");
    }
  };
  
  const handleBook = async (getId) => {    
    try {
      const res = await AxiosService.post(`${Apirouter.CREATE_BOOKING.path}/${getId}`,{ serviceName, amount, description, image },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
    } catch (error) {
      
    }
  };
  const handleClick = (service)=>{
    sessionStorage.setItem('serviceName',service)
  }
  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <>
      <h1 className="text-center text-red-500"> Service Available</h1>
      <div className="grid md:grid-cols-3 md:mx-5 mx- ">
        {data.map((e, i) => {
          return (
            <Card className="border-black md:mx-10 my-5" key={i}>
              <img variant="top" className="h-52 " src={e.image} />
              <Card.Body>
                <h3 className="text-center text-3xl">{e.serviceName}</h3>
                <p className="h-32 overflow-clip hover:overflow-y-scroll text-justify ">
                  {e.description}
                </p>
                <p className="text-2xl my-3">Price : {e.amount} /- </p>
                <br />
                {role === "Admin" ? (
                  <div className="float-right">
                    <Link to="/create-service">
                      {" "}
                      <Button
                        variant="success"
                        value={e._id}
                        onClick={(e) => handleEdit(e.target.value)}
                      >
                        Edit
                      </Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Button
                      variant="danger"
                      value={e._id}
                      onClick={(e) => handleDelete(e.target.value)}
                    >
                      Delete
                    </Button>
                  </div>
                ) : (
                  <Link to={token ? "/booking" : "/login"}>
                  <Button
                    variant="success"
                    className="float-right"
                    value={e.serviceName}
                    onClick={(e)=>handleClick(e.target.value)}
                  >
                    Book
                    
                  </Button></Link>
                )}
              </Card.Body>
            </Card>
          );
        })}
      </div>
      
    </>
  );
}

export default AllServices;
