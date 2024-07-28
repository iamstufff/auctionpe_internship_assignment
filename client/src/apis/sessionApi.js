import axios from "axios";
const url = `${
  import.meta.env.VITE_APP_BACKEND_URL || "http://localhost:5000"
}/api/sessions`;

const startSession = async (token) => {
  try {
    const response = await axios.post(
      `${url}/start-session`,
      {},
      {
        headers: { Authorization: token },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const endSession = async (token, sessionId) => {
  try {
    const response = await axios.post(
      `${url}/end-session`,
      { sessionId },
      {
        headers: { Authorization: token },
      }
    );
    return response.data;
  } catch (error) {
    console.log(err);
  }
};

const getSessions = async (token) => {
  const response = await axios.get(`${url}/sessions`, {
    headers: { Authorization: token },
  });
  return response.data;
};

export { startSession, endSession, getSessions };
