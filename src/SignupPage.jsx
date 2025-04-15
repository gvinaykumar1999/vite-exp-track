import React from "react";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center h-screen p-4 sm:p-0">
      <div className="flex flex-col sm:flex-row box-border rounded-2xl w-full sm:w-[60%] bg-gray-50">
        <div className="w-full  p-4 sm:p-8">
          <h2 className="text-center text-2xl sm:text-3xl mt-12 mb-3 font-bold">
            Sign Up
          </h2>
          <p className="text-center text-xs sm:text-sm text-gray-400">
            Please enter your details
          </p>
          <form className="mt-8 w-full ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="fname"
                  className="block w-full p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lname"
                  className="block w-full p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Id
                </label>
                <input
                  type="email"
                  name="email"
                  className="block w-full p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Email Id"
                />
              </div>
              <div>
                <label
                  htmlFor="phonenumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="phone"
                  name="phonenumber"
                  className="block w-full p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="block w-full p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Password"
                />
              </div>
              <div>
                <label
                  htmlFor="confirmpassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  className="block w-full p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <br />
            <a
              href="#"
              className="text-purple-600 text-sm text-center mt-2 hover:underline"
            >
              Already have an account ?
            </a>
            <br></br>
            <div className="flex justify-center">
              <button className="w-full sm:w-[50%] mt-8 px-6 py-3 bg-purple-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
