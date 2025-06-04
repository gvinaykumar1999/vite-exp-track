import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className=" h-screen bg-gray-300">
        <div className="flex space-x-6 p-5 ">
          <img
            src="./contact.jpg"
            alt="cal-img"
            className="h-auto w-1/2 rounded-3xl shadow-2xl "
          ></img>
          <div className=" w-[60%] pt-5">
            <h1 className="text-2xl pb-3"> General Inquiries:</h1>
            <p className="text-lg pl-5 pb-2">
              Please use the contact form below for general questions, feedback,
              or information requests.
            </p>
            <h1 className="text-2xl pb-3">Support:</h1>
            <p className="text-lg  pl-5 pb-2">
              For technical support or assistance with our products/services,
              please email us directly at wealthledger@gmail.com.
            </p>
            <h1 className="text-2xl pb-3">Sales:</h1>
            <p className="text-lg pl-5 pb-2">
              If you're interested in learning more about our offerings or have
              sales-related inquiries, please contact us at one town , eluru or
              call us at 080-67895.
            </p>
            <h1 className="text-2xl pb-3">Media Inquiries:</h1>
            <p className="text-lg  pl-5 pb-2">
              For press or media-related matters, please reach out to
              wealthledger.net
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
