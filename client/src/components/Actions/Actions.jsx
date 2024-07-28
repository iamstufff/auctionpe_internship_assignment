import React, { useRef, useState } from "react";
import { logAction } from "../../apis/actionApi";

const Actions = () => {
  const sessionId = localStorage.getItem("sessionId");
  const token = localStorage.getItem("token");

  const counterRef = useRef(0);
  const toggleRef = useRef(true);
  const inputRef = useRef("");
  const inputTimer = useRef(null);
  const buttonRef = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [counter, setCounter] = useState(0);
  const [buttonColor, setButtonColor] = useState("default");

  const handleActionLog = async (actionType) => {
    const actionData = {
      session_id: sessionId,
      timestamp: new Date(),
      action_type: actionType,
    };
    await logAction(token, actionData);
  };

  const handleIncrement = () => {
    if (counterRef.current < 300) {
      counterRef.current += 1;
      setCounter(counterRef.current);
      handleActionLog("Increase");
    }
  };

  const handleDecrement = () => {
    if (counterRef.current > 0) {
      counterRef.current -= 1;
      setCounter(counterRef.current);
      handleActionLog("Decrease");
    }
  };

  const handleToggle = () => {
    toggleRef.current = !toggleRef.current;
    handleActionLog("Toggle");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    inputRef.current = value;

    if (inputTimer.current) {
      clearTimeout(inputTimer.current);
    }

    inputTimer.current = setTimeout(() => {
      handleActionLog("Text Input");
    }, 500);
  };

  const handleButtonClick = () => {
    handleActionLog("Simple Button");
    setButtonColor(buttonColor === "default" ? "clicked" : "default");
  };

  return (
    <div className="actions">
      <label className="counter">{counter}</label>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <label>
        <span style={{ marginRight: "10px" }}>
          {toggleRef.current ? "Toggle ON" : "Toggle OFF"}
        </span>
        <input
          type="checkbox"
          checked={toggleRef.current}
          onChange={handleToggle}
        />
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter Text Here..."
      />
      <button
        className={buttonColor}
        onClick={handleButtonClick}
        style={{
          backgroundColor: buttonColor === "default" ? "#4470f4" : "#020918",
          color: buttonColor === "clicked" ? "#ffffff" : "#ffffff",
        }}
      >
        Click the Button
      </button>
    </div>
  );
};

export default Actions;
