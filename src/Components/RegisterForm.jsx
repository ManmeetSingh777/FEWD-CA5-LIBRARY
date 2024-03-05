import React, { useState } from "react";
import './RegisterForm.css';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log(formData);
      setIsSubmitted(true);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.fullName) {
      errors.fullName = "Enter your Name";
    } else if (data.fullName.length < 3) {
      errors.fullName = "Name must be more than 3 characters";
    } else if (data.fullName.length > 30) {
      errors.fullName = "Name cannot be more than 30 characters";
    }

    if (!data.emailAddress) {
      errors.emailAddress = "Enter your Email";
    } else if (!/^\S+@\S+$/.test(data.emailAddress)) {
      errors.emailAddress = "Invalid email";
    }

    if (!data.password) {
      errors.password = "Enter Password";
    } else if (!/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/.test(data.password)) {
      errors.password = "Password must contain at least one special character";
    } else if (data.password.length < 10) {
      errors.password = "Password must contain at least 10 characters";
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Re-enter your Password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password does not match";
    }
    return errors;
  };

  return (
    <>
      <div className="registration-container">
        <form onSubmit={handleFormSubmit} className="form">
          {isSubmitted ? <h1>Registration Successful!!!</h1> : <h1>Register Now!!</h1>}
          <div className="input-section">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Name"
              className="input"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <span className="error-message">{formErrors.fullName}</span>
            <label>Email</label>
            <input
              type="email"
              name="emailAddress"
              placeholder="Email"
              className="input"
              value={formData.emailAddress}
              onChange={handleInputChange}
            />
            <span className="error-message">{formErrors.emailAddress}</span>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input"
              value={formData.password}
              onChange={handleInputChange}
            />
            <span className="error-message">{formErrors.password}</span>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter Password"
              className="input"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <span className="error-message">{formErrors.confirmPassword}</span>
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}






