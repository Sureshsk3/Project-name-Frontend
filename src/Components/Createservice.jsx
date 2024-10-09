import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Apirouter from "../common/Apirouter";
import AxiosService from "../common/AxiosServices";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
function Services() {
  const navigate = useNavigate("");
  const [serviceName, setServiceName] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const token = sessionStorage.getItem("token");
  const imageType = ["png", "jpg", "jpeg"];
  
  const createServices = async () => {
    try {
      const res = await AxiosService.post(
        `${Apirouter.CREATE_SERVICE.path}`,
        { serviceName, amount, description ,image},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Service Created Successfull");
      navigate("/home");
    } catch (error) {      
      toast.error(
        
      );
    }
  };
  const selectFile = (e) => {
    const selectFile = (e.target.files[0])
    if(validateFile(selectFile.name)){
      const reader = new FileReader()
      reader.readAsDataURL(selectFile)
      reader.onload =()=>{
        setImage(reader.result)
      }
    }
    else{
      toast.error(`Only ${imageType.join(",")} files are allowed`)
    }

  };
  const validateFile = (file)=>{
    const checkExt = file.split(".")[file.split(".").length-1]
    return imageType.includes(checkExt)
  }

  const handleEdit = async () => {
    try {
      const res = await AxiosService.put(
        `${Apirouter.CREATE_SERVICE.path}`,
        { serviceName, amount, description, image },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Service Edited Successfull");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Check All the Details");
    }
  };

  return (
    <div className="md:flex grid justify-evenly w-full">
      <div className="p-3 m-3  border-black border-2 rounded md:h-auto md:w-[50vh]">
        <h1 className="text-center">Create Service</h1>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">NAME</InputGroup.Text>
          <Form.Control
            placeholder="Service Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setServiceName(e.target.value)}
          />
        </InputGroup>
        <Form.Label htmlFor="basic-url" className="text-center text-xl">
          Service Image
        </Form.Label>

        <InputGroup className={`${image ? "block" : "hidden"}`}>
          <Form.Control
            accept={imageType}
            placeholder="Paste the URL Link"
            type="file"
            onChange={selectFile}
          />
        </InputGroup>

        <InputGroup className="mb-3 mt-3">
          <InputGroup.Text>&#8377;</InputGroup.Text>
          <input
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded-r px-3"
            type="number"
          />
        </InputGroup>

        <InputGroup>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ender description here !"
            className="h-40"
          />
        </InputGroup>
        <button
          type="submit"
          className="p-2 m-4 bg-green-500 text-black rounded hover:bg-green-300"
          onClick={createServices}
        >
          Submit
        </button>
      </div>

      {/* <div className=" md:w-[70vh] border-2 m-3 border-black rounded">
        {" "}
        <h2 className="text-center my-2"> Preview Service</h2>
        <div className="w-fit m-auto ">
          <img className="md:w-[60%] h-full m-auto rounded" src={image ? image : ph} />
          <div className=" py-4 ">
            <h3 className="text-5xl uppercase ">{serviceName}</h3>
            <p className="capitalize">{description}</p>
            <h4 className="text-3xl">Price Rs - {amount} /- &nbsp;</h4>
          </div>
        </div>
      // </div>*/}
    </div>
  );
}

export default Services;
