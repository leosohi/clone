import React, { useContext } from "react";
import { ShopContext } from "../../Context/CreateContext";
import { CaretDown } from "@phosphor-icons/react";

const ResponsiveTop = () => {
  const { deliveryTime, deliverTo, setBaggie, setBike, Lottie, delivery } =
    useContext(ShopContext);
  return (
    <div className="responsiveTop">
      <div className="content">
        <div className="header">
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
      </div>
    </div>
  );
};

export default ResponsiveTop;
