import React from "react";

const About = () => {
  return (
    <div className="text-gray-200">
      <div className="bg-[url('./aboutpage.jpg')] w-full h-screen">
        <h1 className="text-3xl text-center p-5">About Page</h1>

        <div className="p-5">
          <h1 className="text-2xl ">Mission Statement :</h1>
          <p className=" p-5 w-[50%] text-xl">
            Our website provides practical, easy-to-understand financial advice
            for young adults, helping them make smart money decisions and
            achieve financial independence.
          </p>
          <p className="text-xl">
            <span className="font-bold">Purpose: </span>To provide financial
            advice.
          </p>
          <p className="text-xl">
            <span className="font-bold">Audience: </span>Young adults.
          </p>
          <p className="text-xl">
            <span className="font-bold">Benefit: </span>Clear, actionable steps
            toward financial independence.
          </p>
        </div>
        <div className="p-5">
          <h1 className="text-2xl ">Product details :</h1>
          <p className=" p-5 w-[50%] text-xl">
            Welcome to GreenSprout! We believe that living sustainably shouldn't
            be a sacrifice, but a fulfilling journey. Frustrated by the
            overwhelming amount of information out there, we created GreenSprout
            to provide practical tips, inspiring stories, and reliable resources
            for anyone looking to make eco-conscious choices in their daily
            life.
          </p>
          <p className=" pl-5 pt-0 w-[50%] text-xl">
            Our team of passionate environmentalists and everyday individuals
            shares their experiences and insights on everything from reducing
            waste to mindful consumption. Join our growing community and let's
            cultivate a greener future together. Explore our latest articles or
            connect with us on social media!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
