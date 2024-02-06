import React from "react";
import { topAdsData } from "../../Sorting/resultData";

const TopAds = () => {
  return (
    <div className="ads-part">
      {topAdsData.map((data, index) => (
          <img src={data.img} alt={data.alt} key={index} />
      ))}
    </div>
  );
};

export default TopAds;
