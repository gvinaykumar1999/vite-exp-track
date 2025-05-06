import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState([]);
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    // required fields validation
    Object.entries(loginData).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key] = "This field is required";
      }
    });

    setFormErrors(errors);

    // Stop submission if there are errors
    if (Object.keys(errors).length === 0) {
      navigate("/accounts");
    }

    setSubmittedData([...submittedData], { ...loginData });
    //console
    console.log(loginData);
    //reset input values
    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <div className=" flex items-center justify-center p-4 sm:p-0 bg-[url('./login-bg2.jpg')] bg-cover bg-center h-screen ">
      <div className="flex flex-col sm:flex-row box-border rounded-2xl w-full sm:w-[60%] bg-gray-50">
        {/* Left Side */}
        <div className="w-full sm:w-1/2 p-4 sm:p-8">
          <h2 className="text-center text-2xl sm:text-3xl mt-12 mb-3 font-bold">
            Log In
          </h2>
          <p className="text-center text-xs sm:text-sm text-gray-400">
            Welcome back! Please enter your details
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div>
              {" "}
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={loginData.email}
                className={`block w-full rounded-lg bg-gray-50 p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                } `}
                placeholder="Email"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
            <br />
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
                onChange={handleChange}
                value={loginData.password}
                className={`block w-full rounded-lg bg-gray-50 p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border ${
                  formErrors.password ? "border-red-500" : "border-gray-300"
                } `}
                placeholder="Password"
              />
              {formErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.password}
                </p>
              )}
            </div>
            <a
              href="#"
              className="text-purple-800 hover:underline text-xs  mt-2"
            >
              Forgot password?
            </a>

            <button className="inline-block w-full mt-8 px-6 py-3 bg-purple-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Log in
            </button>

            <div className="flex items-center justify-center my-5 gap-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="text-gray-400 text-xs">Or Continue with</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex gap-4">
              {/* Google Button */}
              <button className="w-1/2 flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Google</span>
              </button>
              {/* Facebook Button */}
              <button className="w-1/2 flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50">
                <img
                  src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                  alt="Facebook"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Facebook</span>
              </button>
            </div>
          </form>
          <p className="text-center text-xs mt-12 mb-8 text-gray-400">
            Don't have an account?
            <a href="/signup" className="text-purple-600 pl-1 hover:underline">
              Sign up
            </a>
          </p>
        </div>

        {/* Right Side */}
        <div className="w-0 sm:w-1/2 relative hidden sm:block">
          <button
            onClick={() => navigate("/")}
            className="absolute top-5 right-5 w-6 h-6 flex items-center justify-center hover:bg-gray-300 text-gray-700 text-xl rounded-full shadow-md"
          >
            &times;
          </button>

          <img
            src="public/moneylogin.jpg"
            alt="Login Img"
            className="w-full h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
