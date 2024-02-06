import React, { useState, useContext } from "react";
import Side from "../Components/Side-components/Side";
import { ShopContext } from "../Context/CreateContext";
import TopCat from "../Components/Result-components/TopCat";
import TopAds from "../Components/Result-components/TopAds";
import ClassicDiv from "../Components/Result-components/ClassicDiv";
import { hotPickData, nearDiscount } from "../Sorting/resultData";
import ResponsiveTop from "../Components/Side-components/ResponsiveTop";

const Home = () => {
  const { deliverTo } = useContext(ShopContext);

  return (
    <div className="home">
      <ResponsiveTop />
      <Side />
      <div className="result">
        <h3 className="deliverTo">送餐至{deliverTo}</h3>
        <TopCat />

        <TopAds />
        {/* <ClassicDiv header={"區內熱門之選"} data={hotPickData}/>
        <ClassicDiv header={"你附近的優惠"} data={nearDiscount}/>  */}
      </div>

      <div className="whitebar"></div>
    </div>
  );
};

export default Home;
