import React, { useState, useContext } from "react";
import { topCatData } from "../../Sorting/resultData";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/CreateContext";

const TopCat = () => {
  const {way} = useContext(ShopContext);

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
    <div className="topCatContainer">
      {clickCount < 2 && (
        <button className="caroRightBtn catBtn" onClick={moveRight}>
          <ArrowRight size={24} weight="bold" />
        </button>
      )}
      {clickCount > 0 && (
        <button className="caroLeftBtn catBtn" onClick={moveLeft}>
          <ArrowLeft size={24} weight="bold" />
        </button>
      )}

      <div className="allTopCat" style={style}>
        {topCatData.map((data, index) => (
          <Link to={`/${data.link}`} key={index} onClick={()=>{
            if(data.tag==="自取") {
              way();
            }
          }}>
            <div className="topCat">
              <img src={data.img} className="pic-part" alt={data.tag} />
              <p>{data.tag}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default TopCat;
