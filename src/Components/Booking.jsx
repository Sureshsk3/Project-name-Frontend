import { useEffect, useState } from "react";
import AxiosService from "../common/AxiosServices";
import Apirouter from "../common/Apirouter";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Booking() {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("id");
  const serviceName = sessionStorage.getItem("serviceName");
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPhone, setPhone] = useState("");
  const [carModel, setModel] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const [cars, setCar] = useState([]);
  const [selectMake, setMake] = useState("");
  const make = [
    "acura",
    "alfa-romeo",
    "aston-martin",
    "audi",
    "bmw",
    "bentley",
    "buick",
    "cadillac",
    "chevrolet",
    "chrysler",
    "dodge",
    "fiat",
    "ferrari",
    "ford",
    "gmc",
    "honda",
    "hyundai",
    "infiniti",
    "jaguar",
    "jeep",
    "kia",
    "lamborghini",
    "land-rover",
    "lexus",
    "lincoln",
    "mini",
    "maserati",
    "mazda",
    "mclaren",
    "mercedes-benz",
    "mitsubishi",
    "nissan",
    "porsche",
    "ram",
    "rolls-royce",
    "scion",
    "subaru",
    "toyota",
    "volkswagen",
    "volvo",
  ];
  
  const handleSubmit = async () => {
    try {
      const res = await AxiosService.post(
        `${Apirouter.CREATE_BOOKING.path}`,
        {
          userId,
          serviceName,
          userName,
          userEmail,
          userPhone,
          carModel,
          selectMake,
          date,
          address,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Service booking Successfull");
      navigate("/dashboard");
    } catch (error) {}
  };
  const getAllCars = async () => {
    try {
      const cars = await axios.get(
        `https://private-anon-e6876b4566-carsapi1.apiary-mock.com/cars`
      );
      setCar(cars.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCars();
    handleSubmit();
  }, []);

  return (
    <div className="flex my-20 md:mx-auto mx-3 w-fit  ">
      <div className=" border-2 border-black p-3 rounded bg-slate-300 ">
        <h2 className="text-center my-3">Book Your Service here !</h2>
        <form action="" className="flex justify-start flex-col py-2">
          <input
            type="text"
            placeholder="Ender Your Name"
            className=" border-black border-2 m-2 rounded p-2"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ender Your Email"
            className=" border-black border-2 m-2 rounded p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Ender Your Phone"
            className=" border-black border-2 m-2 rounded p-2"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ender Your Address"
            className=" border-black border-2 m-2 rounded p-2"
            onChange={(e) => setAddress(e.target.value)}
          />
          <div>
            <h5 className="text-center">Select Your Car Make & Model</h5>
            <select
              name=""
              id=""
              className="w-fit mx-2 p-2 rounded border-black border-2"
              onChange={(e) => setMake(e.target.value)}
            >
              {make.map((e, i) => {
                return (
                  <option key={i}>
                    {e}
                  </option>
                );
              })}
            </select>
            <select
              name=""
              id=""
              className="w-fit mx-2 p-2 rounded border-black border-2"
              onChange={(e) => setModel(e.target.value)}
            >
              {cars.map((car, i) => {
                return <option key={i}>{car.model}</option>;
              })}
            </select>
          </div>
          <input
            type="datetime-local"
            placeholder="Ender Service Date and Time"
            className=" border-black border-2 m-2 rounded p-2"
            onChange={(e) => setDate(e.target.value)}
          />
        </form>
        <button
          className="bg-black text-white rounded float-end mx-3  p-2"
          onClick={handleSubmit}
        >
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
}

export default Booking;
