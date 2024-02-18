import React from "react";
import burger from "../../Assets/allRest/burge.jpg";
import { Plus } from "@phosphor-icons/react";

const CartClassic = ({ id, header, data }) => {
  return (
    <div className="cartClassic" id={id}>
      <h2>{header}</h2>

      <div className="cartGrid">
        {data.map((data, index) => (
          <div className="gridBox" key={index}>
            <div className="wordy">
              <span className="hk">{data.nameHK}</span>
              <span className="en">{data.nameEN}</span>
              <span className="money">${data.price}</span>
              {data.hot && (
                <span style={{ color: "orange", fontWeight: "600" }}>
                  {" "}
                  · 熱門
                </span>
              )}
            </div>

            <img src={burger} alt={data.nameEN} />

            <div className="btn">
              <Plus size={18} color="#08c1bb" weight="bold" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartClassic;
