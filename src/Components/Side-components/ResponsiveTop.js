import React, { useContext } from "react";
import { ShopContext } from "../../Context/CreateContext";
import { CaretDown, Sliders, MagnifyingGlass } from "@phosphor-icons/react";

const ResponsiveTop = () => {
  const {
    deliveryTime,
    deliverTo,
    setBaggie,
    setBike,
    Lottie,
    delivery,
    changeInfo,
  } = useContext(ShopContext);

  return (
    <div className="responsiveTop">
      <div className="content">
        <div className="header" onClick={changeInfo}>
          {delivery && <Lottie options={setBike} height={40} width={50} />}
          {!delivery && (
            <Lottie
              options={setBaggie}
              height={40}
              width={50}
              style={{ paddingRight: "6px" }}
            />
          )}
          <div className="word">
            <div className="top">
              <span>送餐．</span>
              <span>{deliveryTime}</span>
            </div>
            <div className="bottom">
              <span className="to">{deliverTo}</span>
              <CaretDown size={18} color="#08c1bb" className="down" />
            </div>
          </div>
        </div>

        <div className="lower">
          <MagnifyingGlass size={18} className="glass"/>
          <input type="text" placeholder="餐廳、生活百貨、菜式"/>
          <div className="filter">
            <Sliders size={18} color="#08c1bb"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTop;
