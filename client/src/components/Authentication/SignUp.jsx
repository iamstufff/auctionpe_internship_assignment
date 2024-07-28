import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Authentication.css";
import { signup } from "../../apis/authApi";

const SignUp = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await signup(userData);
    if (response) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.userId);
      navigate("/");
    }
  };
  return (
    <div className="auth_page">
      <h1>Sign Up</h1>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        <button onClick={handleLogin}>Sign Up</button>
      </form>
      <button onClick={() => navigate("/login")}>Log In</button>
    </div>
  );
};

export default SignUp;
