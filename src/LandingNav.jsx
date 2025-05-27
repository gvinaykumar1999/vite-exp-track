import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import { LuSquareMenu } from "react-icons/lu";
import { LiaAddressBook } from "react-icons/lia";
import { IoLogoUsd } from "react-icons/io";
import { FaEuroSign } from "react-icons/fa";
import { FaYenSign } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

const LandingNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); //cancel any pending hide
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 2000); //2 seconds
  };

  useEffect(() => {
    //check if we navigated to /accounts -> user logged in

    if (location.pathname === "/accounts") {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    }
  }, [location]);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      console.log("Logging out ....");
      setIsLoggedIn(false);
      localStorage.removeItem("isLoggedIn");
      navigate("/");
    } else {
      console.log("Logging in ...");
      navigate("/login");
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gray-300 dark:bg-gray-900 fixed w-full z-20 m-0 top-0 start-0 ">
        <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 cursor-default"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              WealthLedger
            </span>
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0 w-[200px] h-[36px] rtl:space-x-reverse">
            {isLoggedIn ? (
              <div className="flex items-end justify-end ml-auto">
                <div
                  className="relative "
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <RiAccountCircleLine className="text-3xl" />

                  {/* popup box  */}
                  {isHovered && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mb-3 mt-3 max-w-xs bg-white text-gray-800 px-5 py-3 rounded shadow-lg z-10 transition-opacity duration-300 ease-in-out animate-fade-in">
                      <ul className="cursor-pointer">
                        <Link to="/profile">
                          <li className="flex items-center gap-2">
                            <LiaAddressBook className="text-lg" />
                            Profile
                          </li>
                        </Link>
                        <hr />
                        <li className="flex items-center gap-2">
                          <LuSquareMenu className="text-lg" />
                          Menu
                        </li>
                        <hr />
                        <li
                          onClick={handleAuthClick}
                          className="flex items-center gap-2"
                        >
                          <IoMdLogOut className="text-lg" />
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              location.pathname !== "/login" &&
              location.pathname !== "/signup" && (
                <>
                  <button
                    type="button"
                    onClick={handleAuthClick}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      navigate("/signup");
                    }}
                    className="text-white ml-10 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sign Up
                  </button>
                </>
              )
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden md:flex md:w-[400px] md:order-1"
            id="navbar-sticky"
          >
            {isLoggedIn ? (
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg bg-gray-300 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className="relative">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="block py-2 px-3 text-gray-900  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Currency ▼
                  </button>

                  {isOpen && (
                    <ul className="absolute left-0 mt-2 w-25 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-md ">
                      <li>
                        <button className="flex items-center gap-1 pl-4 pr-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white">
                          <RiMoneyRupeeCircleFill />
                          RUPEE
                        </button>
                      </li>
                      <li>
                        <button className="flex items-center gap-1 pl-4 pr-[30px] py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white">
                          <IoLogoUsd />
                          USD
                        </button>
                      </li>
                      <li>
                        <button className="flex items-center gap-1 pl-4 pr-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white">
                          <FaEuroSign />
                          EUR
                        </button>
                      </li>

                      <li>
                        <button className="flex items-center gap-1 pl-4 pr-[30px] py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white">
                          <FaYenSign />
                          GBP
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    // to="/income"
                    className="block py-2 px-3 text-gray-900  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Incomes
                  </Link>
                </li>
                <li>
                  <Link
                    //to="/expense"
                    className="block py-2 px-3 text-gray-900  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Expense
                  </Link>
                </li>
                <li>
                  <Link
                    //to="/balance"
                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Balance
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg bg-gray-300 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/home"
                    className="block py-2 px-3 text-gray-900  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block py-2 px-3 text-gray-900  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="block py-2 px-3 text-gray-900  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingNav;
