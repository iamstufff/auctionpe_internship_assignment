import React, { useEffect, useState } from "react";
import { getActions } from "../../apis/actionApi";

const ActionLogs = ({ data }) => {
  const [actionData, setActionData] = useState([]);
  const sessionId = data.id;
  const token = localStorage.getItem("token");

  const fetchActions = async () => {
    try {
      const response = await getActions(token, sessionId);
      setActionData(response);
    } catch (error) {
      console.error("Error fetching actions:", error);
    }
  };

  useEffect(() => {
    fetchActions();
  }, [sessionId, token]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Action ID</th>
            <th>Action Type</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {actionData.map((action, index) => (
            <tr key={index}>
              <td>{action.id}</td>
              <td>{action.action_type}</td>
              <td>{new Date(action.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActionLogs;
