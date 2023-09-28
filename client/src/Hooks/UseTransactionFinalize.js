import UseCartAndTotal from "./UseCartAndTotal";

import UseCheckLog from "./UseCheckLog";
import axios from "axios";
const UseTransactionFinalize = async (trs_data) => {
  const currentUser = await UseCheckLog();
  const [userCart, totalCart] = await UseCartAndTotal();
  const userID = currentUser.data.user_id;
  console.log(userID);
  const date = Date.now();
  const productsCart = userCart.map((item) => [
    item.product_id,
    item.product_size,
    item.product_name,
    item.product_images[0],
    item.product_amount.toString(),
  ]);
  console.log(productsCart);
  const finalTransactionData = {
    trs_user_id: userID,
    trs_items_bought: productsCart,
    trs_date: date,
    trs_payment_method: "Card",
    trs_total: totalCart,
    ...trs_data,
  };

  try {
    const ress = await axios.post(
      "https://localhost:8000/transaction/trspost",
      finalTransactionData
    );
    if (ress.status === 200) {
      try {
        const ressClearCart = await axios.get(
          `https://localhost:8000/user/clearcart/${userID}`
        );
        console.log("Successfully emptied cart");
        return ressClearCart;
      } catch (error) {
        console.error("Problem while emptying cart.");
      }
    }
  } catch (error) {
    console.error(error);
    alert(
      "Your transaction has been denied. Please try again later. Server is being fixed."
    );
  }
};
export default UseTransactionFinalize;
