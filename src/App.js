import React, { useContext, useEffect } from "react";
import Nav from "./Components/Nav-components/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import Default from "./Components/Result-components/Default";
import Rest from "./Components/TopCat-components/Rest";
import Take from "./Components/TopCat-components/Take";
import Discount from "./Components/TopCat-components/Discount";
import HOP from "./Components/TopCat-components/HOP";
import Grocery from "./Components/TopCat-components/Grocery";
import CrossArea from "./Components/TopCat-components/CrossArea";
import { ShopContext } from "./Context/CreateContext";

function App() {
  const {} = useContext(ShopContext);
  
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Default />} />
          <Route path="/Rest" element={<Rest />} />
          <Route path="/Take" element={<Take />} />
          <Route path="/Discount" element={<Discount />} />
          <Route path="/HOP" element={<HOP />} />
          <Route path="/Grocery" element={<Grocery />} />
          <Route path="/CrossArea" element={<CrossArea />} />
        </Route>
        <Route path="/Cart/:id" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
