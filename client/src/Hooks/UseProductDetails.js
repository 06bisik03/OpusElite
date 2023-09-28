async function UseProductDetails(productID) {
  const productDetails = await fetchProductDetails(productID);
  return productDetails;
}
async function fetchProductDetails(productID) {
  const fetchAPI = `https://localhost:8000/product/${productID}`;
  try {
    const response = await fetch(fetchAPI);

    const details = await response.json();
    return details;
  } catch (error) {
    console.log("Error fetching specific product data");
    return null;
  }
}
export default UseProductDetails;
