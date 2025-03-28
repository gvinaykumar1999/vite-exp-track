import React, { useState } from "react";

function AnsGpt() {
  // Define state for multiple input fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the form data (e.g., send to an API)
    console.log("Form submitted with data:", formData);

    // Reset the input fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Handle input changes for multiple fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically update the correct field based on its name
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AnsGpt;
