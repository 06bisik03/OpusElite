import UseCartData from "./UseCartData";

const UseCartAndTotal = async () => {
  try {
    const [userCart, cartLength] = await UseCartData();
    if (userCart && cartLength !== null) {
      const subTotal =
        userCart &&
        userCart.reduce((a, b) => {
          return (
            a + b.product_price * b.product_amount * (b.product_sizeIndex || 1)
          );
        }, 0);
      return [userCart, subTotal];
    } else {
      return [null, null];
    }
  } catch (error) {
    console.error(error);
    return [null, null];
  }
};
export default UseCartAndTotal;
