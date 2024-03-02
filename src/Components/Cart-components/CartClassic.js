import React, { useContext } from "react";
import burger from "../../Assets/allRest/burge.jpg";
import { Plus, Minus } from "@phosphor-icons/react";
import { ShopContext } from "../../Context/CreateContext";

const CartClassic = ({ id, header, data }) => {
  const { showOneModal, cartItem, addToCart, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cartClassic" id={id}>
      <h2>{header}</h2>

      <div className="cartGrid">
        {data.map((data, index) => (
          <div
            className="gridBox"
            key={index}
            onClick={() => showOneModal(data.id)}
            style={{
              borderLeft: cartItem[data.id] <= 0 ? "none" : "4px solid #08c1bb",
            }}
          >
            <div className="wordy">
              <span className="hk">
              {cartItem[data.id] > 0 && <span className="amount">{cartItem[data.id]}x </span>}
                {data.nameHK}
              </span>
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

            {cartItem[data.id] <= 0 ? (
              <div
                className="btn"
                onClick={(e) => {
                  addToCart(data.id);
                  e.stopPropagation();
                }}
              >
                <Plus size={18} color="#08c1bb" weight="bold" />
              </div>
            ) : (
              <div className="newBtn">
                <button
                  className="plus"
                  onClick={(e) => {
                    addToCart(data.id);
                    e.stopPropagation();
                  }}
                >
                  <Plus size={18} weight="bold" color="#08c1bb" />
                </button>
                <button
                  className="trash"
                  onClick={(e) => {
                    removeFromCart(data.id);
                    e.stopPropagation();
                  }}
                >
                  <Minus size={18} color="#08c1bb" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartClassic;
