import WelcomePage from "./Welcome/WelcomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./MensPart/Shop";
import ProductDetailed from "./MensPart/ProductDetailed";
import Cart from "./Cart/Cart";
import Profile from "./Profile/Profile";
import Checkout from "./Checkout/Checkout";
import CustomOrder from "./CustomOrders/CustomOrders";
import Customisation from "./CustomOrders/Customisation";

import Custom from "./CustomOrders/Custom";
import Navbar from "./UI/Navbar";
import TransactionDetailed from "./Profile/TransactionDetailed";
import OurBrand from "./OurBrand/OurBrand";


import Fallback from "./Error/Fallback";

import Choosing from "./Extras/Choosing";

function App() {
 
  return (
    
    <BrowserRouter>

      <Routes>

        <Route index element={<WelcomePage />} />
        <Route exact path="/shop" element={<Shop />}>
          <Route path=":sex/:shopType" element={<Shop />} />
        </Route>
        <Route path="/product/:productID" element={<ProductDetailed />}  />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route  path="/custom" element={<Custom />}>
          <Route index element={<CustomOrder/>}/>
          <Route path=":producttype" element={<Customisation/>}/>
        </Route>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/trs/:trsid" element={<TransactionDetailed />}/>
        <Route path="/opuselite" element={<OurBrand />}/>
        <Route path="*" element={<Fallback/>}/>

        <Route path="/choosing/:choicetype" element={<Choosing />}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
