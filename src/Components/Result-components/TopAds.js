import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import { topAdsData } from "../../Sorting/resultData";

const TopAds = () => {
  const [translation, setTranslation] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const moveRight = () => {
    if (clickCount < 2) {
      setTranslation((prevTranslation) => prevTranslation - 500);
      setClickCount((prevCount) => prevCount + 1);
    }
  };

  const moveLeft = () => {
    if (clickCount > 0) {
      setTranslation((prevTranslation) => prevTranslation + 500);
      setClickCount((prevCount) => prevCount - 1);
    }
  };

  const style = { transform: `translateX(${translation}px)` };
  return (
    <div className="adsContainer">
      {clickCount < 2 && (
        <button className="caroRightBtn" onClick={moveRight}>
          <ArrowRight size={24} weight="bold" />
        </button>
      )}
      {clickCount > 0 && (
        <button className="caroLeftBtn" onClick={moveLeft}>
          <ArrowLeft size={24} weight="bold" />
        </button>
      )}
      <div className="ads-part" style={style}>
        {topAdsData.map((data, index) => (
          <img src={data.img} alt={data.tag} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default TopAds;
