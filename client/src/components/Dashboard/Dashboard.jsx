import React, { useEffect, useState } from "react";
import { getSessions } from "../../apis/sessionApi";
import ActionLogs from "./ActionLogs";
import "./Dashboard.css";

const Dashboard = () => {
  const [sessionData, setSessionData] = useState([]);
  const token = localStorage.getItem("token");

  const getData = async () => {
    try {
      const data = await getSessions(token);
      const sortedData = data.sort(
        (a, b) => new Date(b.start_time) - new Date(a.start_time)
      );
      sortedData.forEach((session) => {
        const startTime = new Date(session.start_time);
        const endTime = new Date(session.end_time);
        const duration = (endTime.getTime() - startTime.getTime()) / 1000;
        if (duration < 300) {
          session.displayEndTime = endTime.toLocaleString();
        } else {
          const adjustedEndTime = new Date(startTime.getTime() + 300 * 1000);
          session.displayEndTime = adjustedEndTime.toLocaleString();
        }
      });
      setSessionData(sortedData);
    } catch (error) {
      console.error("Error fetching session data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {sessionData.length > 0 ? (
        sessionData.map((data, index) => (
          <div key={index} className="session-card">
            <div className="session-header">
              <h2>Session ID: {data.id}</h2>
              <p>
                <span className="time-span">
                  Start Time: {new Date(data.start_time).toLocaleString()}
                </span>
                <span style={{ margin: "0 20px" }}>&nbsp;|&nbsp;</span>
                <span className="time-span">
                  End Time: {data.displayEndTime}
                </span>
              </p>
            </div>
            <ActionLogs data={data} />
          </div>
        ))
      ) : (
        <p>No sessions found.</p>
      )}
    </div>
  );
};

export default Dashboard;
