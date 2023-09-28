import axios from "axios";
import UseCheckLog from "./UseCheckLog";
const UseChangeUserData = async (data, changeType) => {
  if (changeType === "profiledata") {
    try {
      const currentUser = await UseCheckLog();
      const userID = currentUser.data.user_id;
      const userCart = currentUser.data.user_cart;
      const ress = await axios.post(
        `https://localhost:8000/user/changedata/${userID}`,
        data
      );
      const successChangeData = ress.data.modifiedCount === 1;
      return successChangeData ? userCart : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  } else {
    try {
      const currentUser = await UseCheckLog();
      const userID = currentUser.data.user_id;
      const userSub = currentUser.data.user_sub;
      await axios.get(
        `https://localhost:8000/user/changemembership/${userID}/${data}`
      );
      return userSub;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};

export default UseChangeUserData;
