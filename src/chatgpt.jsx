import React from "react";
import { useState } from "react";

const Chatgpt = () => {
  // Define state for multiple input fields
  const [formData, setFormData] = useState({
    activity: "",
    amount: "",
    moneySpend: "",
  });

  //handle for form submition

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data (e.g., send to an API)
    console.log("form submitted with data ", formData);

    // reset input fields after submition

    setFormData({
      activity: "",
      amount: "",
      moneySpend: "",
    });
  };

  // Handle input changes for multiple fields

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Dynamically update the correct field based on its name
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className=" mt-1 m-auto border-2 w-[50%]">
      <h2 className=" text-center pt-6 pb-6 text-3xl font-bold text-red-700 underline">
        Expense Tracker
      </h2>
      <br></br>
      <div className="inline-flex w-[100%] mb-8">
        <div className="inline-flex ml-8 w-[82%]">
          <p className="font-bold">Balance :</p>
          <p className="text-3xl pl-6 -m-2 text-green-600"> $20000</p>
        </div>
        <button
          type="button"
          className=" focus:outline-none justify-between text-white float-right bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-5"
        >
          ADD
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className=" border-2 mx-8 my-6 rounded-lg px-5 py-5  ">
          <input
            type="text"
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            className="block w-full p-4 my-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Activity"
          />
          <input
            type="phone"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="block w-full p-4 ps-10 my-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Amount"
          />
          <br></br>
          <div className="flex items-center mb-4 mx-6 ">
            <input
              type="radio"
              value="Expense"
              name="moneySpend"
              onChange={handleChange}
              checked={formData.moneySpend === "Expense"}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Expense
            </label>
            <input
              type="radio"
              value="Income"
              name="moneySpend"
              onChange={handleChange}
              checked={formData.moneySpend === "Income"}
              className="w-4 h-4 ml-10 text-blue-600 bg-gray-100 border-gray-300"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Income
            </label>
            <button
              type="submit"
              className=" focus:outline-none justify-between text-white float-right bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-15"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <div className="w-[100%] justify-between inline-flex mb-10 ">
        <div className="w-[35%] pl-6 ml-8 text-balance border-2 rounded-b-md">
          <p className="font-bold mb-1.5"> Expense :</p>
          <p className="text-3xl text-center text-red-600">$50000</p>
        </div>
        <div className="w-[35%] pl-6 mr-8 text-balance border-2 rounded-b-md">
          <p className="font-bold mb-1.5">Income :</p>
          <p className="text-3xl text-center text-green-600">$ 70000</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold ml-8">Transactions</h2>
      </div>
      <div className="mb-6">
        <input
          type="search"
          placeholder="Search Here"
          className="bg-gray-100 mx-8 my-8 border border-gray-300 text-sm rounded-lg block w-[90%] p-3 "
        />
      </div>

      <div className="relative overflow-x-auto shadow-md mb-10 sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Activity
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              ></th>
              <td className="px-6 py-4">$ </td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700"
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Chatgpt;
