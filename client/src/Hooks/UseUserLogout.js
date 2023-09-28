import axios from "axios";
const UseUserLogout = async () => {
  try {
    await axios.get("https://localhost:8000/auth/logout", {
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
  }
};
export default UseUserLogout;
