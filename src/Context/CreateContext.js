import { createContext, useState, useEffect } from "react";
import baggie from "../Assets/gif/baggie.json";
import bike from "../Assets/gif/bike.json";
import Lottie from "react-lottie";

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
  const [loginPage, setLoginPage] = useState(false);
  const [clickedAc, setClickedAc] = useState(false);
  const [PlaceSelected, setPlaceSelected] = useState("你的位置");

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
    document.title = "美食外賣運送至" +  deliverTo  + " - 於Kangaroo訂購";
  }, [deliverTo]);

  /* ac modal anime */
  const modalStyle = clickedAc
    ? { animation: "slide-in 0.3s ease-in-out forwards" }
    : { animation: "slide-out 0.3s ease-in-out forwards" };

  /* 按下帳戶btn */
  const acModal = () => {
    setClickedAc(!clickedAc);
  };

  /* 進入登入頁面 */
  const login = () => {
    setLoginPage(true);
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
    login,
    loginPage,
    setLoginPage,
    acModal,
    clickedAc,
    modalStyle,
    Lottie,
    setBaggie,
    setBike,
    setDeliverTo,
    PlaceSelected,
    setPlaceSelected
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
