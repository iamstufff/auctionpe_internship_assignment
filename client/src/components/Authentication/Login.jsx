import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Authentication.css";
import { login } from "../../apis/authApi";

const Login = () => {
  const [credentials, setCredentials] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await login(credentials);
    if (response) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.userId);
      navigate("/");
    }
  };

  return (
    <div className="auth_page">
      <h1>Sign In</h1>
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
        <button onClick={handleLogin}>Login</button>
      </form>
      <button onClick={() => navigate("/signup")}>Sign Up</button>
    </div>
  );
};

export default Login;
