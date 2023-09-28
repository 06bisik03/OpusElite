import axios from "axios";
import UseCheckLog from "./UseCheckLog";

const UseCartData = async () => {
  const user = await UseCheckLog();
  if (user) {
    const userid = user.data.user_id;
    const recentCart = await axios.get(
      `https://localhost:8000/cart/getmostrecent/${userid}`
    );
    const recentCartItems = recentCart.data;
    const cartLength = recentCartItems.reduce((a, b) => {
      return a + b.product_amount;
    }, 0);
    return [recentCartItems, cartLength];
  } else {
    return null;
  }
};
export default UseCartData;
