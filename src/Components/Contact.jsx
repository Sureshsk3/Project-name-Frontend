import React from "react";

function Contact() {
  return (
    <>
      <div className="text-xl">
        <img src={"/contact.jpg"} className="w-full" alt="" />
        <div className="grid  md:grid-cols-3 text-justify mx-10 ">
          <div className="md:mx-3 p-5 border-2 border-black shadow-lg my-4  rounded">
            <h3 className="text-center">Contact Us</h3>
            <p>
              We care not only to create quality themes, but as well make sure
              users succeed to setup. If you have any questions regarding our
              Services feel free to contact us any time. Email support is
              available 24/7 and you’ll get reply during 24 hours since you
              complete the request.
            </p>
          </div>
          <div className="md:mx-3 p-5  my-4 ">
            <img src={"/location.png"} alt="" className="w-10  m-auto" />
            <p className="mb-0">
              No 20, first street,Park Service Road, Guindy, Chennai - 600036
            </p>
            <p className=" mb-0">044 - 3244 4432</p>
            <p className=" ">carcare@gmail.co.in</p>
          </div>
          
            
          <div className="md:mx-3 p-5 my-4 ">
            <img src={"/location.png"} alt="" className="w-10  m-auto" />
            <p className="mb-0">
              No 123A, middle street,Mount Road, Egmore, Chennai - 6000126
            </p>
            <p className=" mb-0">044 - 3244 4432</p>
            <p className=" ">carcare@gmail.co.in</p>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Contact;
