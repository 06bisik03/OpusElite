const UseShopProducts = async (shopType, sex) => {
  const productData = await fetchProducts(shopType, sex);
  return productData;
};

async function fetchProducts(shopType, sex) {
  const fetchAPI = `https://localhost:8000/shop/${sex}/${shopType}`;
  try {
    const response = await fetch(fetchAPI);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${shopType} related data`);
    return null;
  }
}

export default UseShopProducts;
