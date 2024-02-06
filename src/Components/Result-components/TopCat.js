import React from "react";
import { topCatData } from "../../Sorting/resultData";

const TopCat = () => {
  return (
    <div className="allTopCat">
      {topCatData.map((data, index) => (
        <div className="topCat" key={index}>
          <img src={data.img} className="pic-part" alt={data.tag} />
          <p>{data.tag}</p>
        </div>
      ))}
    </div>
  );
};

export default TopCat;
