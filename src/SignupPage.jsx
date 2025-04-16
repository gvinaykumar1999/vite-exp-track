import React, { useState } from "react";

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
        <div className="w-full  p-4 sm:p-8">
          <h2 className="text-center text-2xl sm:text-3xl mt-12 mb-3 font-bold">
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
                  value={signupData.fname}
                  onChange={handleChanges}
                  className={`block w-full rounded-lg bg-gray-50 p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border ${
                    formErrors.fname ? "border-red-500" : "border-gray-300"
                  } `}
                  placeholder="First Name"
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
                  value={signupData.lname}
                  onChange={handleChanges}
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
                  value={signupData.email}
                  onChange={handleChanges}
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
                  name="phone"
                  value={signupData.phone}
                  onChange={handleChanges}
                  className="block w-full p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Phone Number"
                />
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
                  className="block w-full p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Company name"
                />
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
                  className="block w-full p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Location"
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
                  value={signupData.password}
                  onChange={handleChanges}
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
                  value={signupData.confirmpassword}
                  onChange={handleChanges}
                  className="block w-full p-3 my-1 ps-5 sm:ps-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Confirm Password"
                />
                {/* {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )} */}
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
