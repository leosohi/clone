import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { ShopContext } from "../../Context/CreateContext";
import { FoodItemData } from "../../Sorting/FoodItemData";
import { MinusCircle, PlusCircle, X } from "@phosphor-icons/react";
import ItemInfo from "./ItemInfo";

const BottomCart = () => {
  const [basketDetail, setBasketDetail] = useState(false);
  const { total, itemCount, cartItem, removeTips, addTips, tips } =
    useContext(ShopContext);

  const checkDetail = () => {
    setBasketDetail(!basketDetail);
  };

  return (
    <div className="bottomCart">
      <div
        className="hiddenDetail"
        style={{ top: basketDetail ? "0" : "100%" }}
      >
        <div className="cartNewItem">
          <div className="cartNewTop">
            <h3>你的訂單</h3>

            <X
              size={18}
              weight="bold"
              color="#08c1bb"
              className="x"
              onClick={checkDetail}
            />

            <div className="itemList">
              {FoodItemData.map((data, index) => {
                if (cartItem[data.id] > 0) {
                  return <ItemInfo data={data} key={index} />;
                }
              })}
            </div>

            <div className="checkout">
              <div className="first-line">
                <span>小計</span>
                <span>${total}.00</span>
              </div>

              {total < 75 && (
                <div className="sec-line">
                  <span>小型訂單費用</span>
                  <span>${75 - total}.00</span>
                </div>
              )}

              <div className="third-line">
                <span>送餐服務費</span>
                <span>$20.00</span>
              </div>

              <div className="fourth-line">
                <span>外送員小費</span>
                <div className="right">
                  <MinusCircle
                    size={18}
                    color="#08c1bb"
                    weight="bold"
                    onClick={removeTips}
                    className="min"
                  />
                  <PlusCircle
                    size={18}
                    color="#08c1bb"
                    weight="bold"
                    onClick={addTips}
                    className="add"
                  />
                  <span>${tips}.00</span>
                </div>
              </div>

              <div className="last-line">
                <span>總額</span>
                <span>${total < 76 ? 95 + tips : total + 20 + tips}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lowerBtn">
        {!basketDetail ? (
          <button onClick={checkDetail}>
            <span>{itemCount}</span>
            <span>查看在購物籃</span>
            <span>${total}.00</span>
          </button>
        ) : (
          <button className="pay" onClick={checkDetail}>
            <span >前往結帳</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default BottomCart;
