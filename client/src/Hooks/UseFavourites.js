import axios from "axios";
import UseCheckLog from "./UseCheckLog";
import UsePostData from "./UsePostData";

const UseFavourites = async () => {
  try {
    const user = await UseCheckLog();
    const userid = user.data.user_id;
    const favs = await axios.get(
      `https://localhost:8000/favs/getmostrecent/${userid}`
    );
    const favouritesArray = favs.data;
    const favouritesNumbers = favs.data.length;
    return [favouritesArray, favouritesNumbers];
  } catch (error) {
    return [null];
  }
};
export const UseRemoveFavourite = async (productid) => {
  const user = await UseCheckLog();
  const userid = user.data.user_id;
  const removeFav = await axios.get(
    `https://localhost:8000/favs/removefromfavs/${userid}/${productid}`
  );
  const length = removeFav.data.length;
  return [removeFav.data, length];
};

export const UseToggleFavourite = async (givenProduct) => {
  const alreadyFav = await UseItemAlreadyFavourite(givenProduct.product_id);
  const user = await UseCheckLog();
  const userid = user.data.user_id;
  if (!alreadyFav) {
    await UsePostData(givenProduct, userid, "newfavourite");
  } else {
    await UseRemoveFavourite(givenProduct.product_id);
  }
};

export const UseItemAlreadyFavourite = async (productid) => {
  const [favs, favsNum] = await UseFavourites();
  if (Array.isArray(favs)) {
    const favOrNot = favs.filter((item) => item.product_id === productid);
    if (favOrNot.length > 0 && favsNum !== null) {
      return true;
    } else {
      return false;
    }
  }
};
export default UseFavourites;
