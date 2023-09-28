import axios from "axios";

const UseNavbarProduct = async (sex) => {
  const randomIndex = Math.floor(Math.random() * 4) + 1;
  if (
    localStorage.getItem(`toptrendingsuit ${sex}`) &&
    localStorage.getItem(`toptrendingscent ${sex}`) &&
    localStorage.getItem(`toptrendingshoe ${sex}`)
  ) {
    const scent = JSON.parse(localStorage.getItem(`toptrendingscent ${sex}`));
    const shoe = JSON.parse(localStorage.getItem(`toptrendingshoe ${sex}`));
    const suit = JSON.parse(localStorage.getItem(`toptrendingsuit ${sex}`));
    return [suit, shoe, scent];
  } else {
    try {
      const suitArray = (
        await axios.get(`https://localhost:8000/shop/${sex}/suits`)
      ).data;
      const shoeArray = (
        await axios.get(`https://localhost:8000/shop/${sex}/shoes`)
      ).data;
      const scentArray = (
        await axios.get(`https://localhost:8000/shop/${sex}/scents`)
      ).data;

      const suit = suitArray[randomIndex];
      const shoe = shoeArray[randomIndex];
      const scent = scentArray[randomIndex];
      localStorage.setItem(`toptrendingsuit ${sex}`, JSON.stringify(suit));
      localStorage.setItem(`toptrendingshoe ${sex}`, JSON.stringify(shoe));
      localStorage.setItem(`toptrendingscent ${sex}`, JSON.stringify(scent));
      return [suit, shoe, scent];
    } catch (error) {
      throw new Error("Error fetching Navbar items");
    }
  }
};
export default UseNavbarProduct;
