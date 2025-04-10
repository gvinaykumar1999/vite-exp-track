import React from "react";

const LoginForm = () => {
  return (
    <div className=" flex items-center justify-center h-screen ">
      <div className=" flex box-border rounded-2xl w-[60%]  bg-gray-50 ">
        <div className="w-1/2">
          <h2 className=" text-center text-2xl mt-24 mb-3 font-bold">Log In</h2>
          <p className="text-center text-xs text-gray-400">
            Welcome back! Please enter your details
          </p>
          <form className="mx-16 mt-8 ">
            <label
              for="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="block w-full p-3 my-1 ps-10  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="Email"
            />
            <br></br>
            <label
              for="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="block w-full p-3 my-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="password"
            />
            <p className="text-purple-800 text-xs"> forgot password?</p>
            <button className="inline-block  w-[100%] mt-8  px-6 py-3 bg-purple-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Log in
            </button>
            <div className="flex items-center justify-center my-5 gap-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="text-gray-400 text-xs">Or Continue with</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex gap-4">
              <button className="w-1/2 flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  class="w-5 h-5"
                />
                <span className="text-sm font-medium"> Google</span>
              </button>
              <button className="w-1/2 flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50">
                <img
                  src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                  alt="Facebook"
                  class="w-5 h-5"
                />
                <span className="text-sm font-medium"> Facebook</span>
              </button>
            </div>
          </form>
          <p className="text-center text-xs mt-18 mb-8 text-gray-400">
            Don't have account ?{" "}
            <a href="#" class="text-purple-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
        <div className="w-1/2 bg-purple-400"></div>
      </div>
    </div>
  );
};

export default LoginForm;
