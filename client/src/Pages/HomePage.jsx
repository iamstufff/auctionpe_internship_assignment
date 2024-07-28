import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import "./HomePage.css";

const HomePage = () => {
  const [active, setActive] = useState("home");
  return (
    <div className="homepage">
      <Navbar setActive={setActive} />
      {active === "home" && <Home />}
      {active === "dashboard" && <Dashboard />}
    </div>
  );
};

export default HomePage;
