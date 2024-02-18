import React, { useContext } from "react";
import Side from "../Components/Side-components/Side";
import { ShopContext } from "../Context/CreateContext";
import ResponsiveTop from "../Components/Side-components/ResponsiveTop";

import { Outlet } from "react-router-dom";

const Home = () => {
  const {} = useContext(ShopContext);

  return (
    <div className="home">
      <Side />

      <div className="result">
        <ResponsiveTop />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
