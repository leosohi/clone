import React, { useContext, useState } from "react";
import { FoodItemData } from "../../Sorting/FoodItemData";
import burger from "../../Assets/allRest/burge.jpg";
import { PlusCircle, MinusCircle, X } from "@phosphor-icons/react";
import { ShopContext } from "../../Context/CreateContext";

const OneModal = ({ id }) => {
  const { closeOneModal, setCartItem } = useContext(ShopContext);
  const item = FoodItemData.find((data) => data.id === id);
  const [modalAmount, setModalAmount] = useState(1);

  /* add by modal btn */
  const modalAddToCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] + modalAmount }));
    closeOneModal();
  };

  /* add minus logic */
  const addModalAmount = () => {
    setModalAmount((prev) => prev + 1);
  };

  const removeModalAmount = () => {
    if (modalAmount > 1) {
      setModalAmount((prev) => prev - 1);
    }
  };

  return (
    <div className="justOneModal">
      <div className="overlay" onClick={closeOneModal}>
        <div
          className="content"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="contentUp">
            <div className="exit" onClick={closeOneModal}>
              <X size={24} color="#08c1bb" weight="bold" />
            </div>

            <img src={burger} alt={item.nameEN} />
            <div className="word">
              <h1>{item.nameHK}</h1>
              <p>{item.nameEN}</p>
              <p className="hint">
                對於致敏原、食材或烹調方式有任何疑問?
                <a href="#"> 請聯絡餐廳。</a>
              </p>
            </div>
          </div>

          <div className="contentLow">
            <div className="changeAmount">
              <MinusCircle
                size={24}
                weight="bold"
                onClick={removeModalAmount}
                style={{
                  color: modalAmount === 1 ? "grey" : "#08c1bb",
                  cursor: modalAmount > 1 ? "pointer" : "default",
                }}
              />
              <h2>{modalAmount}</h2>
              <PlusCircle
                size={24}
                weight="bold"
                color="#08c1bb"
                onClick={addModalAmount}
                className="plus"
              />
            </div>
            <div className="btn">
              <button onClick={()=>modalAddToCart(id)}>以 ${item.price * modalAmount}.00 加入</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneModal;
