import axios from "axios";
const url = `${
  import.meta.env.VITE_APP_BACKEND_URL || "http://localhost:5000"
}/api/actions`;

const logAction = async (token, actionData) => {
  const response = await axios.post(`${url}/log-action`, actionData, {
    headers: { Authorization: token },
  });
  return response.data;
};

const getActions = async (token, sessionId) => {
  const response = await axios.get(`${url}/actions/${sessionId}`, {
    headers: { Authorization: token },
  });
  return response.data;
};

export { logAction, getActions };
