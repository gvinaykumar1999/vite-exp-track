import React from "react";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <div className="bg-[url('./landingpage-bg.jpg')] bg-cover bg-center h-screen m-0">
        <div className="p-5 ">
          <h1 className="text-3xl underline "> Introduction </h1>
          <br />
          <p className="text-lg px-5 w-[60%]">
            Wealth Ledger is a forward-thinking organization committed to
            delivering high-quality accounting tailored to meet the evolving
            needs of our clients. Established in 2023, our company has grown
            into a trusted name in the accounting sector, driven by innovation,
            integrity, and a customer-first approach. With a team of passionate
            professionals and a focus on excellence, we specialize in Accounting
            . Our mission is to create impactful solutions that empower
            businesses and enrich lives, while maintaining sustainable practices
            and fostering long-term partnerships.
          </p>
          <br />

          <h1 className="text-3xl underline "> Welcome to Our Website </h1>
          <br />
          <p className="text-lg px-5 w-[60%]">
            We’re thrilled to have you here! Whether you’re looking for
            inspiration, information, or innovative solutions, you’ve come to
            the right place. Explore our content, learn something new, and let
            us know how we can help you get the most out of your visit.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
