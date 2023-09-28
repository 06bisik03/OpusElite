import axios from "axios";

const UseCheckLog = async () => {
  try {
    const response = await axios.get("https://localhost:8000/auth/checkLog", {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    return 401;
  }
};
export default UseCheckLog;
