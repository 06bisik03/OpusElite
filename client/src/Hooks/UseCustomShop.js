import axios from "axios";

const UseCustomShop = async (customType, filterParams, funcType) => {
  if (funcType === "getCustomData") {
    if (customType === "suit") {
      try {
        const ress = await axios.post(
          "https://localhost:8000/custom/newcustomsuit",
          filterParams
        );
        console.log(ress);
        return ress;
      } catch (error) {
        console.error("Error trying to get custom data");
      }
    } else if (customType === "shoe") {
      console.log(filterParams);
      try {
        const ress = await axios.post(
          "https://localhost:8000/custom/newcustomshoe",
          filterParams
        );
        console.log(ress);

        return ress;
      } catch (error) {
        console.error("Error trying to get custom data");
      }
    }
  } else if (funcType === "removeCustomData") {
    if (customType === "suit") {
    } else if (customType === "shoe") {
    }
  }
};
export default UseCustomShop;
