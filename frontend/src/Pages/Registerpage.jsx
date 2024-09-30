import React, { useState } from 'react';
import uploadProfilepic from "../assets/upload.png";
import { Link } from 'react-router-dom';

const Registerpage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: "",
  });

  console.log(formData)

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "profileImage" ? files[0] : value, // Correctly handling file input
    }));
  };

  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="First Name"
          name="firstName" // Fixed name attribute
          className="p-3 rounded-lg border"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName" // Fixed name attribute
          className="p-3 rounded-lg border"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="p-3 rounded-lg border"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="p-3 rounded-lg border"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword" // Fixed name attribute
          className="p-3 rounded-lg border"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <input
          id="image"
          type="file"
          name="profileImage"
          accept="image/*"
          className="hidden"
          onChange={handleChange} // Handles file input correctly
        />
        <label htmlFor="image" className="flex items-center gap-3 mt-2 mb-2">
          {formData.profileImage ?  ( 
            <img src={URL.createObjectURL(formData.profileImage)} 
            alt="profile photo" 
            style={{maxWidth:"80px"}} />
          ):(
            <img src={uploadProfilepic} 
            alt="add profile photo" 
          className="w-8 h-8" />
         )}
          <p className="text-lg text-slate-700">Upload Your photo</p>
        </label>
        <button className="bg-slate-700 rounded-lg p-3 text-white uppercase hover:opacity-95">
          Register
        </button>
      </form>
      <div className="mt-5 flex gap-2">
        <p>Already have an account?</p>
        <Link to="/Login">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default Registerpage;
