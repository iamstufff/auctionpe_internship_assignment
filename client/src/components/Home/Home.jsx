import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleSessionStart = () => {
    navigate("/session");
  };
  return (
    <div className="home">
      <h1>AuctionPe</h1>
      <button onClick={handleSessionStart}>Session Page</button>
    </div>
  );
};

export default Home;
