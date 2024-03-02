import React, { useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import coffee from "../../Assets/no-pic.jpg";
import { useNavigate } from 'react-router-dom';

const HotBrand = ({ data }) => {
  const [translation, setTranslation] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

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

  /* navigate */
  const toRest = (id) => {
    navigate(`/Cart/${id}`);
  };

  const style = { transform: `translateX(${translation}px)` };
  return (
    <div className="hotBrand">
      <h3>熱門品牌</h3>
      {clickCount < 2  && <button className="caroRightBtn" onClick={moveRight}>
        <ArrowRight size={24} weight="bold" />
      </button>}
      {clickCount > 0  && <button className="caroLeftBtn" onClick={moveLeft}>
        <ArrowLeft size={24} weight="bold" />
      </button>}
      <div className="brandGrid" style={style}>
        {data.map((data) => (
          <div className="brandBox" onClick={() => toRest(data.id)}>
            <div className="img-part">
              <img src={coffee} alt={data.name} />
            </div>
            <div className="word-part">
              <span className="name">{data.name}</span>
              <div className="sec">
                <Star
                  className="star"
                  size={18}
                  weight="fill"
                  style={
                    data.mark < 4.6
                      ? { color: "#00717C" }
                      : { color: "#4D7C1B" }
                  }
                />
                <span
                  className="mark"
                  style={
                    data.mark < 4.6
                      ? { color: "#00717C" }
                      : { color: "#4D7C1B" }
                  }
                >
                  {data.mark}
                </span>
                <span className="time">{data.time} 分鐘</span>
              </div>

              {data.discount !== "免運費" ? (
                <span className="discount">全單{data.discount}%折扣</span>
              ) : (
                <span className="discount">"免運費"</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotBrand;
