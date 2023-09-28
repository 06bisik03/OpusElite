const UseCompleteLook = async (currentProduct) => {
  const currentProductType = currentProduct.typeFormatted;
  const currentProductSex = currentProduct.formattedSex;
  if (currentProductSex === "Men") {
    let suggestableProductsArray1;
    let suggestableProductsArray2;
    let matchingItemType1;
    let matchingItemType2;
    switch (currentProductType) {
      case "Suit":
        suggestableProductsArray1 = await fetchProductsToMatch(
          "shoes",
          "men",
          currentProduct.product_color
        );
        matchingItemType1 = "shoes";
        suggestableProductsArray2 = await fetchRandomScentMen(
          currentProductType
        );
        matchingItemType2 = "scents";
        break;
      case "Shirt":
        suggestableProductsArray1 = await fetchProductsToMatch(
          "trousers",
          "men",
          currentProduct.product_color
        );
        matchingItemType1 = "trousers";
        suggestableProductsArray2 = await await fetchProductsToMatch(
          "shoes",
          "men",
          currentProduct.product_color
        );
        matchingItemType2 = "shoes";
        break;
      case "Trousers":
        suggestableProductsArray1 = await fetchProductsToMatch(
          "shoes",
          "men",
          currentProduct.product_color
        );
        matchingItemType1 = "shoes";
        suggestableProductsArray2 = await fetchProductsToMatch(
          "shirts",
          "men",
          currentProduct.product_color
        );
        matchingItemType2 = "shirts";
        break;
      case "Shoe":
        suggestableProductsArray1 = await fetchProductsToMatch(
          "suits",
          "men",
          currentProduct.product_color
        );
        matchingItemType1 = "suits";
        suggestableProductsArray2 = await fetchRandomScentMen(
          currentProductType
        );
        matchingItemType2 = "scents";
        break;
      case "Scent":
        suggestableProductsArray1 = await fetchProductsToMatch(
          "suits",
          "men",
          currentProduct.product_color
        );
        matchingItemType1 = "suits";
        suggestableProductsArray2 = await fetchProductsToMatch(
          "shoes",
          "men",
          currentProduct.product_color
        );
        matchingItemType2 = "shoes";
        break;
      default:
        break;
    }
    const suggestionItem1 = chooseRandomProductFromArray(
      suggestableProductsArray1
    );
    const suggestionItem2 = chooseRandomProductFromArray(
      suggestableProductsArray2
    );

    return [
      suggestionItem1,
      matchingItemType1,
      suggestionItem2,
      matchingItemType2,
    ];
  } else {
    let suggestableProductsArray1;
    let suggestableProductsArray2;
    let matchingItemType1;
    let matchingItemType2;

    switch (currentProductType) {
      case "Suit":
        suggestableProductsArray1 = await fetchProductsToMatch(
          "shoes",
          "women",
          currentProduct.product_color
        );
        matchingItemType1 = "shoes";
        suggestableProductsArray2 = await fetchRandomScentWomen(
          currentProductType
        );
        matchingItemType2 = "scents";
        break;
      case "Blouse":
        suggestableProductsArray1 = await fetchProductsToMatch(
          "skirts",
          "women",
          currentProduct.product_color
        );
        matchingItemType1 = "skirts";
        suggestableProductsArray2 = await fetchProductsToMatch(
          "shoes",
          "women",
          currentProduct.product_color
        );
        matchingItemType2 = "shoes";
        break;
      case "Skirt":
        suggestableProductsArray1 = await fetchProductsToMatch(
          "shoes",
          "women",
          currentProduct.product_color
        );
        matchingItemType1 = "shoes";
        suggestableProductsArray2 = await fetchProductsToMatch(
          "blouses",
          "women",
          currentProduct.product_color
        );
        matchingItemType2 = "blouses";
        break;
      case "Shoe":
        suggestableProductsArray1 = await fetchProductsToMatch(
          "suits",
          "women",
          currentProduct.product_color
        );
        matchingItemType1 = "suits";
        suggestableProductsArray2 = await fetchRandomScentWomen(
          currentProductType
        );
        matchingItemType2 = "scents";
        break;
      case "Scent":
        suggestableProductsArray1 = await fetchProductsToMatch(
          "suits",
          "women",
          currentProduct.product_color
        );
        matchingItemType1 = "suits";
        suggestableProductsArray2 = await fetchProductsToMatch(
          "shoes",
          "women",
          currentProduct.product_color
        );
        matchingItemType2 = "shoes";
        break;
      default:
        break;
    }

    const suggestionItem1 =
      chooseRandomProductFromArray(suggestableProductsArray1) || {};
    const suggestionItem2 =
      chooseRandomProductFromArray(suggestableProductsArray2) || {};
    const returnData = [
      suggestionItem1,
      matchingItemType1,
      suggestionItem2,
      matchingItemType2,
    ];

    return returnData;
  }
};
export default UseCompleteLook;

///////////////////////////////HELPERS/////////////////////////////////////////////////////

const fetchProductsToMatch = async (product, sex, color) => {
  const fetchAPI = `https://localhost:8000/shop/${sex}/${product}`;
  const singularProductForm =
    product === "trousers" ? "trousers" : product.slice(0, product.length - 1);
  try {
    const response = await fetch(fetchAPI);
    const data = await response.json();
    const filteredData = data.filter(
      (item) => item[`${singularProductForm}_color`] === color
    );
    return filteredData.length !== 0 ? filteredData : data;
  } catch (error) {
    console.error(error);
  }
};

const fetchRandomScentMen = async () => {
  const fetchAPI = `https://localhost:8000/shop/men/scents`;
  try {
    const response = await fetch(fetchAPI);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching completeLook scents");
    return null;
  }
};

const fetchRandomScentWomen = async () => {
  const fetchAPI = `https://localhost:8000/shop/women/scents`;
  try {
    const response = await fetch(fetchAPI);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching completeLook scents women");
    return null;
  }
};

const chooseRandomProductFromArray = (array) => {
  const randomVariable = Math.random();
  const limiter = array.length - 1;
  const randomItemIndex = Math.floor(randomVariable * limiter);

  return array[randomItemIndex];
};
