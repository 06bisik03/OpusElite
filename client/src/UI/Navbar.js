import { useEffect, useState } from "react";
import React from "react";


import UseCartData from "../Hooks/UseCartData";
import UseNavbarProduct from "../Hooks/UseNavbarProducts";


import LoadedNavbar from "./LoadedNavbar";
import LoadingNavbar from "./LoadingNavbar";
const Navbar = ({ plus }) => {
  const [itemAmount, setItemAmount] = useState(0);

  const [topTrendingMen, setTopTrendingMen] = useState(null);
  const [topTrendingWomen, setTopTrendingWomen] = useState(null);

  useEffect(() => {
    const cartItems = async () => {
      try {
        const [items, cartLength] = await UseCartData();
        console.log(items);
        setItemAmount(cartLength);
      } catch (error) {
        setItemAmount("0");
      }
      const topTrendingMen = await UseNavbarProduct("men");
      const topTrendingWomen = await UseNavbarProduct("women");
      setTopTrendingMen(topTrendingMen);
      setTopTrendingWomen(topTrendingWomen);
    };
    cartItems();
  }, [plus]);

  if (topTrendingMen && topTrendingWomen) {
    return (
      <LoadedNavbar
        itemAmount={itemAmount}
        topTrendingMen={topTrendingMen}
        topTrendingWomen={topTrendingWomen}
      />
    );
  } else {
    return <LoadingNavbar />;
  }
};
export default Navbar;
