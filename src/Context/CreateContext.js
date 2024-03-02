import { createContext, useState, useEffect } from "react";
import baggie from "../Assets/gif/baggie.json";
import bike from "../Assets/gif/bike.json";
import Lottie from "react-lottie";
import { AllRestaurantData } from "../Sorting/AllRestaurantData";
import { FoodItemData } from "../Sorting/FoodItemData";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [scroll, setScroll] = useState(true);
  const [modal, setModal] = useState(false);
  const [delivery, setDelivery] = useState(true);
  const [modalDelivery, setmodalDelivery] = useState(delivery);
  const [deliverTo, setDeliverTo] = useState("你屋企");
  const [now, setNow] = useState(true);
  const [dayValue, setDayValue] = useState("今天");
  const [timeValue, setTimeValue] = useState("23:45-00:15");
  const [deliveryTime, setDeliveryTime] = useState("現在");
  const [locationModal, setLocationModal] = useState(false);
  const [timeModal, setTimeModal] = useState(false);
  const [clickedAc, setClickedAc] = useState(false);
  const [PlaceSelected, setPlaceSelected] = useState("你的位置");
  const [oneModal, setOneModal] = useState(false);
  const [searchBar, setSearchBar] = useState(true);
  const [tips, setTips] = useState(0);

  /* tips */
  const addTips = () => {
    setTips((prev) => prev + 5);
  };

  const removeTips = () => {
    if (tips >= 5) {
      setTips((prev) => prev - 5);
    }
  };

  /* add & remove by small btn */
  const addToCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const removeFromCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  /* cart logic*/
  const emptyCart = () => {
    let cart = {};
    for (let i = 1; i < FoodItemData.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItem, setCartItem] = useState(emptyCart());

  const cartItemCount = () => {
    let total = 0;
    for (const itemCount in cartItem) {
      total += cartItem[itemCount];
    }
    return total;
  };

  const itemCount = cartItemCount();

  /* total amount */
  const lootTotal = () => {
    let total = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = FoodItemData.find((data) => data.id === Number(item));
        total += cartItem[item] * itemInfo.price;
      }
    }
    return total;
  };

  const total = lootTotal();

  /* open & close  one-modal */
  const showOneModal = (id) => {
    setOneModal(id);
    setScroll(!scroll);
  };

  const closeOneModal = () => {
    setOneModal(false);
    setScroll(!scroll);
  };

  /* Filtered Array */
  const nearDiscount = AllRestaurantData.filter((data) => data.distance < 1);

  const nearDiscountClassic = nearDiscount.slice(0, 9);

  const allDiscount = AllRestaurantData.filter((data) => data.discount);

  const kangarooMarket = AllRestaurantData.filter(
    (data) => data.name === "Kangaroo HOP 待待超市"
  );

  const grocery = AllRestaurantData.filter((data) =>
    data.美食類型.includes("生活百貨")
  );

  const special = AllRestaurantData.filter(
    (data) => data.special === "待待送 Kangaroo 獨家"
  );
  const specialClassic = special.slice(0, 9);

  const hot = AllRestaurantData.filter((data) => data.hot);
  const hotClassic = hot.slice(0, 9);

  const noDFee = AllRestaurantData.filter((data) => data.discount === "免運費");
  const noDFeeClassic = noDFee.slice(0, 9);

  const highMark = AllRestaurantData.sort((a, b) => b.mark - a.mark);
  const highMarkClassic = highMark.slice(0, 9);
  const highMarkSingle = highMark.slice(9, 19);

  function parseTime(timeRange) {
    let [start, end] = timeRange.split(" - ").map((str) => parseInt(str, 10));
    return { start, end };
  }

  function compareRestaurants(a, b) {
    let timeA = parseTime(a.time);
    let timeB = parseTime(b.time);

    // 比較起始時間
    if (timeA.start !== timeB.start) {
      return timeA.start - timeB.start;
    }
    // 起始時間相同，比較結束時間
    return timeA.end - timeB.end;
  }

  // 使用自定義的比較函數進行排序
  const fastest = AllRestaurantData.sort(compareRestaurants);
  const fastestClassic = fastest.slice(0, 9);
  const fastestSingle = fastest.slice(9, 19);

  // shuffleArray
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const randomRest = shuffleArray([...AllRestaurantData]);

  /* 兩張gif */
  const setBaggie = {
    loop: false,
    autoplay: true,
    animationData: baggie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const setBike = {
    loop: false,
    autoplay: true,
    animationData: bike,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  /* 改標題 */
  useEffect(() => {
    document.title = "美食外賣運送至" + deliverTo + " - 於Kangaroo訂購";
  }, [deliverTo]);

  /* ac modal anime */
  const modalStyle = clickedAc
    ? { animation: "slide-in 0.3s ease-in-out forwards" }
    : { animation: "slide-out 0.3s ease-in-out forwards" };

  /* 按下帳戶btn */
  const acModal = () => {
    setClickedAc(!clickedAc);
    setScroll(!scroll);
  };

  /* change location and time modal pop */
  const changeLocation = () => {
    setLocationModal(!locationModal);
  };

  const changeTime = () => {
    setTimeModal(!timeModal);
  };

  /* 設定Side bar 送餐時間 */
  const clickToConfirmTime = () => {
    if (now) {
      setDeliveryTime("現在");
    } else if (dayValue === "今天") {
      setDeliveryTime(timeValue);
    } else {
      setDeliveryTime(dayValue + " " + timeValue);
    }

    changeTime();
  };

  /* set day, time value */
  const changeDayValue = (e) => {
    setDayValue(e.target.value);
  };

  const changeTimeValue = (e) => {
    setTimeValue(e.target.value);
  };

  /* set time to later */
  const setLater = () => {
    setNow(!now);
  };

  /* modal confirm btn logic */
  const confirmWay = () => {
    setDelivery(modalDelivery);
    changeInfo();
  };

  /* modal radio btn logic */
  const wayII = () => {
    setmodalDelivery(!modalDelivery);
  };

  /* side radio btn logic */
  const way = () => {
    setDelivery(!delivery);
  };

  /* display modal 及 scrolling function */
  const changeInfo = () => {
    setScroll(!scroll);
    setModal(!modal);
  };

  scroll
    ? (document.body.style.overflow = "auto")
    : (document.body.style.overflow = "hidden");

  /* 輸出 var */
  const contextValue = {
    modal,
    changeInfo,
    delivery,
    way,
    wayII,
    modalDelivery,
    confirmWay,
    deliverTo,
    now,
    setLater,
    changeDayValue,
    changeTimeValue,
    dayValue,
    clickToConfirmTime,
    deliveryTime,
    changeLocation,
    changeTime,
    locationModal,
    timeModal,
    acModal,
    clickedAc,
    modalStyle,
    Lottie,
    setBaggie,
    setBike,
    setDeliverTo,
    PlaceSelected,
    setPlaceSelected,
    AllRestaurantData,
    nearDiscount,
    special,
    hot,
    noDFee,
    highMark,
    fastest,
    nearDiscountClassic,
    specialClassic,
    hotClassic,
    noDFeeClassic,
    highMarkClassic,
    fastestClassic,
    fastestSingle,
    highMarkSingle,
    allDiscount,
    grocery,
    randomRest,
    kangarooMarket,
    oneModal,
    showOneModal,
    closeOneModal,
    cartItem,
    setCartItem,
    total,
    addToCart,
    removeFromCart,
    emptyCart,
    setSearchBar,
    searchBar,
    itemCount,
    addTips,
    removeTips,
    tips
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
