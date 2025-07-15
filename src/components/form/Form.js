import React from "react";
import { useState } from "react";
import "./Form.css";
import { validatePhone, validateSpidrPin } from "../../utils/validation";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    cost: "",
    spidrPin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      alert("Phone number should be exactly 10 digits.");
      return;
    }

    if (!validateSpidrPin(formData.spidrPin)) {
      alert("Spidr PIN must be in the format ####-####-####-####");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Form submitted successfully! Check the console.");
  };

  return (
    <div className="container">
      <h1>Spidr Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="cost"
          type="number"
          placeholder="Guess the cost ($)"
          value={formData.cost}
          onChange={handleChange}
          required
        />
        <input
          name="spidrPin"
          placeholder="####-####-####-####"
          value={formData.spidrPin}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
