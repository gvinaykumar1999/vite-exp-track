import React from "react";
import { useCurrency } from "./CurrencyContext";

const ExpensesPage = ({ submittedData }) => {
  const { currency } = useCurrency();

  const expenseData = submittedData.filter(
    (data) => data.moneySpend === "Expense"
  );

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-red-700 underline">
        All Expense Transactions
      </h2>
      {expenseData.length > 0 ? (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Activity
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {expenseData.map((data, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4"> {data.activity}</td>
                  <td className="px-6 py-4">
                    {currency}
                    {parseFloat(data.amount).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No income data found .
        </p>
      )}
    </div>
  );
};

export default ExpensesPage;
