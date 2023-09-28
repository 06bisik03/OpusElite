import axios from "axios";
const UsePostData = async (product, userID, postType) => {
  console.log(product);
  if (postType === "newproduct") {
    const ress = await axios.post(
      `https://localhost:8000/adddata/cart/${userID}`,
      { item: product },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return ress;
  } else if (postType === "newfavourite") {
    axios
      .post(
        `https://localhost:8000/adddata/favourites/${userID}`,
        { item: product },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log("Item added successfuly");
        } else {
          console.error("Failed to add item to the favourites");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } else if (postType === "removeItem") {
    axios
      .get(`https://localhost:8000/removedata/${userID}/${product}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("Item removed successfully");
        } else {
          console.error("Error while removing item");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

export default UsePostData;
