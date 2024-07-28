import React, { useState, useEffect } from "react";
import { endSession, startSession } from "../apis/sessionApi";
import Actions from "../components/Actions/Actions";
import "./SessionPage.css";
import { useNavigate } from "react-router-dom";

const SessionPage = () => {
  const [timer, setTimer] = useState(300);
  const [actionsEnabled, setActionsEnabled] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (actionsEnabled) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [actionsEnabled]);

  useEffect(() => {
    if (timer === 0) {
      handleEndSession();
    }
  }, [timer]);

  const handleStartSession = async () => {
    const data = await startSession(token);
    localStorage.setItem("sessionId", data.sessionId);
    setActionsEnabled(true);
  };

  const handleEndSession = async () => {
    let sessionId = localStorage.getItem("sessionId");
    await endSession(token, sessionId);
    setActionsEnabled(false);
    setTimer(300);
    navigate("/");
  };

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="session">
      <h1>Session Page</h1>
      <button onClick={actionsEnabled ? handleEndSession : handleStartSession}>
        {actionsEnabled ? "End Session" : "Start Session"}
      </button>
      {actionsEnabled && (
        <div className="actions">
          <h2>
            Time remaining: {minutes}:{paddedSeconds}
          </h2>
          <Actions />
          {/* <Increment />
          <Decrement />
          <Toggle />
          <Input />
          <Button /> */}
        </div>
      )}
    </div>
  );
};

export default SessionPage;
