import UseCheckLog from "./UseCheckLog";
import axios from "axios";
const UseUserTransactions = async () => {
  const currentUser = await UseCheckLog();
  const userid = currentUser.data.user_id;
  try {
    const ress = await axios.get(
      `https://localhost:8000/transaction/trsget/${userid}`
    );
    console.log(ress.data);
    return ress.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export default UseUserTransactions;
