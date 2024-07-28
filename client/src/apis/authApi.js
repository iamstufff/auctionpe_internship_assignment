import axios from "axios";

const url = `${
  import.meta.env.VITE_APP_BACKEND_URL || "http://localhost:5000"
}/api/auth`;

const signup = async (userData) => {
  try {
    const response = await axios.post(`${url}/signup`, userData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const login = async (credentials) => {
  try {
    const response = await axios.post(`${url}/login`, credentials);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { signup, login };
