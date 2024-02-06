import React from "react";
import { Star } from "@phosphor-icons/react";
import { hotPickData, nearDiscount } from "../../Sorting/resultData";

const ClassicDiv = ({ header, data }) => {
  return (
    <div className="classicDiv">
      <div className="heading">
        <h3>{header}</h3>
        {header !== "區內熱門之選" && <span>查看全部</span>}
      </div>

      <div className="classicCarousel">
        {data.map((data) => (
          <div className="classicBox">
            <div className="banner">
              {data.charge !== "" && (
                <span className="charge">{data.charge}</span>
              )}
              <span className="discount">{data.discount}</span>
              {data.special !== "" && (
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

              <div className="rate">
                <Star
                  className="star"
                  size={18}
                  weight="fill"
                  style={data.color}
                />
                <span className="mark" style={data.color}>
                  {data.mark}
                </span>
                <span className="comment">{data.comment}</span>
              </div>

              <div className="distance">
                <span className="num">{data.num}</span>
                <span className="dot">·</span>
                <span className="dFee">{data.dFee}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassicDiv;
