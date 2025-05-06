import React from "react";

const Services = () => {
  return (
    <div>
      <div className="bg-gray-400">
        <h1 className="text-3xl text-center p-5 text-black ">Services</h1>
        <div className="flex space-x-6 pl-10">
          <div>
            <h1 className="text-2xl">Concise and Direct</h1>
            <p className=" p-5 text-xl">
              We provide comprehensive accounting services designed to help
              individuals and businesses achieve financial clarity and success.
              From bookkeeping and tax preparation to strategic financial
              planning, our expertise ensures accuracy and peace of mind.
            </p>
            <h1 className="text-2xl">Benefit-Oriented</h1>
            <p className=" p-5 text-xl">
              Take the stress out of managing your finances. We offer a range of
              professional accounting services tailored to your specific needs.
              Let us handle the numbers so you can focus on what you do best
              growing your business or achieving your personal financial goals.
            </p>
            <h1 className="text-2xl">Focus on Expertise</h1>
            <p className=" p-5 text-xl">
              With years of experience and a commitment to staying ahead of the
              latest regulations, our team delivers reliable and insightful
              accounting services. We offer solutions from routine bookkeeping
              to complex financial analysis, providing the support you need to
              make informed decisions.
            </p>
            <h1 className="text-2xl">Personal Touch</h1>
            <p className=" p-5 text-xl">
              We believe in building strong relationships with our clients. Our
              accounting services go beyond just numbers; we take the time to
              understand your unique situation and provide personalized support
              to help you navigate the financial landscape with confidence.
            </p>
          </div>
          <img
            src="./services.png"
            alt="cal-img"
            className="h-auto w-1/2 rounded-3xl shadow-2xl "
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Services;
