import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AllRestaurantData } from "../Sorting/AllRestaurantData";
import {
  ArrowLeft,
  Star,
  Plus,
  ArrowRight,
  Basket,
} from "@phosphor-icons/react";
import { ShopContext } from "../Context/CreateContext";
import bike from "../Assets/gif/bike.jpg";
import baggie from "../Assets/gif/baggie.jpg";
import CartNav from "../Components/Cart-components/CartNav";
import { FoodItemData } from "../Sorting/FoodItemData";
import burge from "../Assets/allRest/burge.jpg";
import CartClassic from "../Components/Cart-components/CartClassic";

const Cart = () => {
  const [translation, setTranslation] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const { changeInfo, deliverTo, delivery } = useContext(ShopContext);
  let { id } = useParams();
  const data = AllRestaurantData.find((data) => data.id == id);
  const hot = FoodItemData.filter((data) => data.hot);
  const set = FoodItemData.filter((data) => data.set);
  const burger = FoodItemData.filter((data) => data.burger);
  const fry = FoodItemData.filter((data) => data.fry);
  const drinks = FoodItemData.filter((data) => data.drinks);
  const dessert = FoodItemData.filter((data) => data.dessert);

  /* change title */
  useEffect(() => {
    if (data) {
      document.title = deliverTo + "嘅" + data.name + "外賣美食";
    }

    return () => {
      document.title = "美食外賣運送至" + deliverTo + " - 於Kangaroo訂購";
    };
  }, [data, deliverTo]);

  /* coloring */
  const style = {
    color: data.mark < 4.6 ? { color: "#00717C" } : { color: "#4D7C1B" },
    word: data.mark < 4.6 ? "十分正" : "極正",
  };

  const moveRight = () => {
    if (clickCount < 2) {
      setTranslation((prevTranslation) => prevTranslation - 300);
      setClickCount((prevCount) => prevCount + 1);
    }
  };

  const moveLeft = () => {
    if (clickCount > 0) {
      setTranslation((prevTranslation) => prevTranslation + 300);
      setClickCount((prevCount) => prevCount - 1);
    }
  };

  const caroStyle = { transform: `translateX(${translation}px)` };

  return (
    <div className="cart-page">
      <Link to="/">
        <span className="return">
          <ArrowLeft size={24} weight="bold" />
          返回
        </span>
      </Link>

      <div className="restInfo">
        <div className="imgBox">
          <img src={burge} />
        </div>
        <div className="infoBox">
          <h1>{data.name}</h1>
          <div className="line1">
            {data.time}分鐘 ·{" "}
            {data.美食類型.map((type, index) => (
              <span key={index}>
                {type}
                {index < data.美食類型.length - 1 ? " · " : ""}
              </span>
            ))}
          </div>
          <div className="line2">距離 {data.distance}公里 · 於23:00關門</div>
          <div className="line3" style={style.color}>
            <Star weight="fill" size={24} />
            {data.mark} {style.word}
          </div>
        </div>

        <div className="deliverBox">
          <div className="imgBox">
            {delivery ? (
              <img src={bike} alt="bike_img@vecteezy.com" />
            ) : (
              <img src={baggie} alt="bag" />
            )}
          </div>

          <span>於 {data.time} 分鐘內準備好 </span>
          <span className="change" onClick={changeInfo}>
            更改
          </span>
        </div>
      </div>

      <CartNav />

      <div className="main">

        <div className="menu">
          <div className="hot-pick">
            <h2>其他受歡迎之選</h2>
            <div className="carousel">
              {clickCount < 2 && (
                <button className="caroRightBtn" onClick={moveRight}>
                  <ArrowRight size={24} weight="bold" />
                </button>
              )}

              {clickCount > 0 && (
                <button className="caroLeftBtn" onClick={moveLeft}>
                  <ArrowLeft size={24} weight="bold" />
                </button>
              )}
              <div className="carouselBox" style={caroStyle}>
                {hot.map((data, index) => (
                  <div className="card" key={index}>
                    <img src={burge} alt={data.nameEN} />
                    <div className="description">
                      <span className="name">{data.nameHK}</span>
                      <span className="price">${data.price}</span>
                    </div>
                    <div className="btn">
                      <button>
                        <Plus size={18} className="plus" weight="bold" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <CartClassic id="set" header={"🍱漢堡套餐 Burger Set🍱"} data={set}/>
          <CartClassic id="burger" header={"🍔漢堡 Burger🍔"} data={burger}/>
          <CartClassic id="fry" header={"🍟炸物 Fried Food🍟"} data={fry}/>
          <CartClassic id="drinks" header={"🧋凍飲 Cold Drinks🧋"} data={drinks}/>
          <CartClassic id="dessert" header={"🍮甜品 Dessert🍮"} data={dessert}/>

        </div>

        <div className="cartItem">
          <div className="cartTop">
            <Basket size={48} color="#ABADAD" />
            <p>暫無任何物品於購物籃中</p>
          </div>

          <div className="cartBtn">
            <button>
              <span>前往結帳</span>
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Cart;
