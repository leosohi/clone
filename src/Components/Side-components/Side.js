import React, { useContext, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import Modal from "./Modal";
import Category from "./Category";
import {
  discountData,
  dietary,
  type,
  dishes,
  lastSort,
} from "../../Sorting/sortingData";
import { ShopContext } from "../../Context/CreateContext";

const Side = () => {
  const [rotate, setRotate] = useState(false);
  const [display, setDisplay] = useState(false);
  const [border, setBorder] = useState(true);
  const { modal, changeInfo, delivery, way, deliverTo, deliveryTime, setBaggie,
    setBike, Lottie } =
    useContext(ShopContext);

  /* show the list*/
  const activateList = () => {
    setDisplay(!display);
    setRotate(!rotate);
    setBorder(!border);
  };

  /* hide the border */
  const borderless = {
    borderBottom: border ? "1px solid rgb(232, 235, 235)" : "none",
  };

  /* rotate arrow */
  const rotation = {
    transform: rotate ? "rotate(-180deg)" : "rotate(0deg)",
  };

  return (
    <div className="side">
      {modal && <Modal />}

      <div className="gif-part" onClick={changeInfo}>
       
      {delivery && <Lottie options={setBike} height={40} width={50} />}
      {!delivery && <Lottie options={setBaggie} height={40} width={50} style={{paddingRight: "6px"}}/>}

        <div className="timeAndSpace">
          <p className="px14">{deliveryTime}</p>
          <div className="second-line">
            <div className="yourLocation">{deliverTo}</div>
            <p className="px14 changeLocation">更改訂單詳情</p>
          </div>
        </div>
      </div>

      <div className="giveOrTake">
        <label htmlFor="give">
          <input
            type="radio"
            id="give"
            name="way"
            checked={delivery}
            onChange={way}
          />
          <div className="radioCover"></div>
          <span>送餐</span>
        </label>

        <label htmlFor="take">
          <input
            type="radio"
            id="take"
            name="way"
            checked={!delivery}
            onChange={way}
          />
          <div className="radioCover"></div>
          <span>自取</span>
        </label>
      </div>

      <div className="scroll-part">
        <div className="topShadow"></div>
        <div className="bottomShadow"></div>

        <div className="sorting" style={borderless}>
          <button className="ranking" onClick={activateList}>
            <div className="heading">
              <h4>排序</h4>
              <CaretDown
                className="caretDown"
                size={18}
                weight="bold"
                style={rotation}
              />
            </div>
          </button>

          {display && (
            <div className="sorting-list">
              <div className="sorting-box">
                <label htmlFor="suggest">
                  <input
                    type="radio"
                    id="suggest"
                    name="sorting"
                    defaultChecked
                  />
                  <div className="radioCoverII"></div>
                  <span>推薦</span>
                </label>
              </div>

              <div className="sorting-box">
                <label htmlFor="highMark">
                  <input type="radio" id="highMark" name="sorting" />
                  <div className="radioCoverII"></div>
                  <span>評分最高</span>
                </label>
              </div>

              <div className="sorting-box">
                <label htmlFor="distance">
                  <input type="radio" id="distance" name="sorting" />
                  <div className="radioCoverII"></div>
                  <span>距離</span>
                </label>
              </div>

              <div className="sorting-box">
                <label htmlFor="fast">
                  <input type="radio" id="fast" name="sorting" />
                  <div className="radioCoverII"></div>
                  <span>送餐時間最快</span>
                </label>
              </div>
            </div>
          )}
        </div>

        <Category header={"優惠"} dataArray={discountData} />

        <Category header={"膳食"} dataArray={dietary} />

        <Category header={"美食類型"} dataArray={type} />

        <Category header={"菜式"} dataArray={dishes} />

        <Category header={"類別"} dataArray={lastSort} />
      </div>
    </div>
  );
};

export default Side;
