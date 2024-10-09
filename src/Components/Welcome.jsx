import React, { useState, useEffect } from "react";
import AxiosService from "../common/AxiosServices";
import Apirouter from "../common/Apirouter";
function Welcome() {
  const [data, setData] = useState([]);
  const getAllServices = async () => {
    try {
      const res = await AxiosService.get(`${Apirouter.GETALL_SERVICES.path}`);
      setData(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllServices();
  }, []);
  return (
    <>
      <div className="w-full h-full relative  ">
        <img
          src={"/home.jpg"}
          alt=""
          className="h-full w-full m-auto md:h-screen"
        />
        <div className=" text-white">
          <h2
            className="text-center ml-auto
         absolute top-0 text-8xl w-full"
          ></h2>
        </div>
        <div className="absolute top-20 text-7xl text-white  text-center w-full ">
          <h1 className=" text-7xl text-white  text-center w-full">
            Welcome to CarCare
          </h1>
        </div>
        {/* <div className="grid md:grid-cols-3 mx-5  ">
        {data.map((e, i) => {
          return (
            <Card className="border-black my-5" key={i}>
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
                  <Link to="/booking">
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
      </div> */}
      </div>
    </>
  );
}

export default Welcome;
