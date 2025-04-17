import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [signupData, setSignupData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    password: "",
    confirmpassword: "",
  });

  const [submittedData, setSubmittedData] = useState([]);
  //const [passwordError, setPasswordError] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    // required fields validation
    Object.entries(signupData).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key] = "This field is required";
      }
    });

    //password match check

    if (
      signupData.password &&
      signupData.confirmpassword &&
      signupData.password !== signupData.confirmpassword
    ) {
      errors.confirmpassword = "Password do not match";
    }

    setFormErrors(errors);

    // Stop submission if there are errors
    if (Object.keys(errors).length > 0) return;

    //password error
    // if (signupData.password !== signupData.confirmpassword) {
    //   setPasswordError("* Password do not match");
    //   return;
    // }
    // setPasswordError("");

    //save data
    setSubmittedData([...submittedData], { ...signupData });
    console.log(signupData);

    //reset form
    setSignupData({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      company: "",
      location: "",
      password: "",
      confirmpassword: "",
    });
  };

  return (
    <div className="flex items-center justify-center h-screen p-4 sm:p-0">
      <div className="flex flex-col sm:flex-row box-border rounded-2xl w-full sm:w-[60%] bg-gray-50">
        <div className="w-full relative p-4 sm:p-8">
          <button
            onClick={() => navigate("/")}
            className="absolute top-5 right-5 w-6 h-6 flex items-center justify-center hover:bg-gray-300 text-gray-700 text-xl rounded-full shadow-md"
          >
            &times;
          </button>
          <h2 className="text-center text-2xl  sm:text-3xl mt-12 mb-3 font-bold">
            Sign Up
          </h2>
          <p className="text-center text-xs sm:text-sm text-gray-400">
            Please enter your details
          </p>

          <form onSubmit={handleSubmit} className="mt-8 w-full ">
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
                  placeholder="First Name"
                  value={signupData.fname}
                  onChange={handleChanges}
                  className={`block w-full rounded-lg bg-gray-50 p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border ${
                    formErrors.fname ? "border-red-500" : "border-gray-300"
                  } `}
                />
                {formErrors.fname && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.fname}
                  </p>
                )}
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
                  placeholder="Last Name"
                  value={signupData.lname}
                  onChange={handleChanges}
                  className={`block w-full rounded-lg bg-gray-50 p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border ${
                    formErrors.lname ? "border-red-500" : "border-gray-300"
                  } `}
                />
                {formErrors.lname && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.lname}
                  </p>
                )}
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
                  value={signupData.email}
                  onChange={handleChanges}
                  placeholder="Email Id"
                  className={`block w-full rounded-lg bg-gray-50 p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  } `}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.email}
                  </p>
                )}
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
                  name="phone"
                  value={signupData.phone}
                  onChange={handleChanges}
                  placeholder="Phone Number"
                  className={`block w-full rounded-lg bg-gray-50 p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border ${
                    formErrors.phone ? "border-red-500" : "border-gray-300"
                  } `}
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.phone}
                  </p>
                )}
              </div>
            </div>

            <br />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label
                  htmlFor="companyname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company name
                </label>
                <input
                  type="text"
                  name="company"
                  value={signupData.company}
                  onChange={handleChanges}
                  placeholder="Company name"
                  className={`block w-full rounded-lg bg-gray-50 p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border ${
                    formErrors.company ? "border-red-500" : "border-gray-300"
                  } `}
                />
                {formErrors.company && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.company}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={signupData.location}
                  onChange={handleChanges}
                  placeholder="Location"
                  className={`block w-full rounded-lg bg-gray-50 p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border ${
                    formErrors.location ? "border-red-500" : "border-gray-300"
                  } `}
                />
                {formErrors.location && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.location}
                  </p>
                )}
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
                  value={signupData.password}
                  onChange={handleChanges}
                  placeholder="Password"
                  className={`block w-full rounded-lg bg-gray-50 p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border ${
                    formErrors.password ? "border-red-500" : "border-gray-300"
                  } `}
                />
                {formErrors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.password}
                  </p>
                )}
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
                  value={signupData.confirmpassword}
                  onChange={handleChanges}
                  placeholder="Confirm Password"
                  className={`block w-full rounded-lg bg-gray-50 p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border ${
                    formErrors.confirmpassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } `}
                />
                {formErrors.confirmpassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.confirmpassword}
                  </p>
                )}

                {/* {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )} */}
              </div>
            </div>
            <br />

            <a
              href="/login"
              className="text-purple-600 text-sm text-center mt-2 hover:underline"
            >
              Already have an account ?
            </a>
            <br></br>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-[50%] mt-8 px-6 py-3 bg-purple-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
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
