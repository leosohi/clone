import React, { useContext } from "react";
import { MinusCircle, PlusCircle } from "@phosphor-icons/react";
import { ShopContext } from "../../Context/CreateContext";

const ItemInfo = ({ data }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="itemContainer">
      <div className="itemInfo">
        <p>{data.nameHK}</p>

        <div className="right">
          <MinusCircle
            size={18}
            color="#08c1bb"
            weight="bold"
            onClick={() => removeFromCart(data.id)}
            className="minus"
          />
          <span className="amount">{cartItem[data.id]}</span>
          <PlusCircle
            size={18}
            color="#08c1bb"
            weight="bold"
            onClick={() => addToCart(data.id)}
            className="plus"
          />
          <span className="price">${data.price * cartItem[data.id]}.00</span>
        </div>
      </div>
      {data.id <=6 && <p className="setInfo">配中薯條 Chips M, 中可樂 Coke M</p>}
    </div>
  );
};

export default ItemInfo;
