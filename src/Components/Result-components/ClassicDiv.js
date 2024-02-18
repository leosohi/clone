import React, { useContext, useState } from "react";
import { Star, ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/CreateContext";

const ClassicDiv = ({ header, data }) => {
  const [translation, setTranslation] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const {} = useContext(ShopContext);
  const navigate = useNavigate();

  /* navigate */
  const toRest = (id) => {
    navigate(`/Cart/${id}`);
  };

  /* btn */
  const moveRight = () => {
    if (clickCount < 2) {
      setTranslation((prevTranslation) => prevTranslation - 816);
      setClickCount((prevCount) => prevCount + 1);
    }
  };

  const moveLeft = () => {
    // Check if the carousel has been moved to the right at least once
    if (clickCount > 0) {
      setTranslation((prevTranslation) => prevTranslation + 816);
      setClickCount((prevCount) => prevCount - 1);
    }
  };

  const style = { transform: `translateX(${translation}px)` };

  return (
    <div className="classicDiv">
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

      <div className="heading">
        <h3>{header}</h3>
        {header !== "區內熱門之選" && <span>查看全部</span>}
      </div>

      <div className="classicCarousel" style={style}>
        {data.map((data, index) => (
          <div
            className="classicBox"
            key={index}
            onClick={() => toRest(data.id)}
          >
            <div className="banner">
              {data.charge && (
                <span className="charge">消費滿${data.charge}</span>
              )}
              {data.discount != "免運費" ? (
                <span className="discount">全單{data.discount}%折扣</span>
              ) : (
                <span className="discount">"免運費"</span>
              )}
              {data.special && (
                <span className="deliveroo">{data.special}</span>
              )}
            </div>

            <img src={data.img} alt={data.name} />

            <div className="deliveryTime">
              <span className="num">
                {data.time} <span className="min">分鐘</span>
              </span>
            </div>

            <div className="description">
              <p>{data.name}</p>
              <div
                className="rate"
                style={
                  data.mark < 4.6 ? { color: "#00717C" } : { color: "#4D7C1B" }
                }
              >
                <Star className="star" size={18} weight="fill" />
                <span className="mark">
                  {data.mark} {data.mark < 4.6 ? "極正" : "十分正"}
                </span>
                <span className="comment">{data.comment}</span>
              </div>

              <div className="distance">
                <span className="num">{data.distance} 公里</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassicDiv;
