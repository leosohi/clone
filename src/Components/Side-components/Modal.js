import React, { useContext, useState } from "react";
import {
  X,
  MapPin,
  Clock,
  Timer,
  CaretUpDown,
  NavigationArrow,
} from "@phosphor-icons/react";
import { ShopContext } from "../../Context/CreateContext";
import Autocomplete from "react-google-autocomplete";

const Modal = () => {
  const {
    changeInfo,
    wayII,
    modalDelivery,
    confirmWay,
    now,
    setLater,
    changeDayValue,
    changeTimeValue,
    clickToConfirmTime,
    changeLocation,
    changeTime,
    locationModal,
    timeModal,
    setDeliverTo,
    PlaceSelected,
    setPlaceSelected,
  } = useContext(ShopContext);

  /* display time option */
  let contentH = { height: "300px" };

  if (!now) {
    contentH = { height: "360px" };
  }

  return (
    <div className="modal">
      <div className="overlay" onClick={changeInfo}>
        <div
          className="content"
          /* 防止觸發overlay的Fn */
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="heading">
            <b>地點及時間</b>
          </div>

          <X
            className="x"
            size={24}
            color="#08c1bb"
            weight="bold"
            onClick={changeInfo}
          />

          <div className="two-choices">
            <label htmlFor="giveII">
              <input
                type="radio"
                id="giveII"
                name="wayII"
                checked={modalDelivery}
                onChange={wayII}
              />
              <div className="radioCoverII"></div>
              <span>送餐</span>
            </label>

            <label htmlFor="takeII">
              <input
                type="radio"
                id="takeII"
                name="wayII"
                checked={!modalDelivery}
                onChange={wayII}
              />
              <div className="radioCoverII"></div>
              <span>自取</span>
            </label>
          </div>

          <div className="modal-space" onClick={changeLocation}>
            <MapPin className="map" size={25} color="#bac3c3" weight="bold" />

            <div className="changeLocation">
              <div className="locationData">
                <span>{PlaceSelected}</span>
                <span>Hong Kong</span>
              </div>

              <span className="changeOrder">更改訂單詳情</span>
            </div>
          </div>

          <div className="modal-time" onClick={changeTime}>
            <Clock className="clock" size={25} color="#bac3c3" weight="bold" />
            <div className="time-span">
              <span>時間</span>
              <span className="changeOrder">更改訂單詳情</span>
            </div>
          </div>

          <button className="confirm" onClick={confirmWay}>
            <span>確定</span>
          </button>
        </div>
      </div>

      {/* location modal pop-up */}
      {locationModal && (
        <div className="locationModal">
          <div className="overlayII" onClick={changeLocation}>
            <div
              className="contentII"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="heading">
                <b>地點</b>
                <X
                  className="x"
                  size={24}
                  color="#08c1bb"
                  weight="bold"
                  onClick={changeLocation}
                />
              </div>

              <label className="main">
                <span>輸入你的地址</span>
                <Autocomplete
                  apiKey={process.env.REACT_APP_GOOGLE_API}
                  onPlaceSelected={(place) =>
                    setPlaceSelected(place.formatted_address)
                  }
                  options={{
                    types: ["address"],
                    componentRestrictions: { country: "hk" },
                  }}
                />{" "}
                <NavigationArrow className="arrow" size={20} color="#08c1bb" />
              </label>

              <div className="search">
                <button
                  onClick={() => {
                    if (PlaceSelected !== "" ) {
                      changeLocation();
                      setDeliverTo(PlaceSelected);
                    } 
                    
                  }}
                >
                  確定
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* time modal pop-up */}
      {timeModal && (
        <div className="timeModal">
          <div className="overlayIII" onClick={changeTime}>
            <div
              className="contentIII"
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={contentH}
            >
              <div className="heading">
                <b>時間</b>
                <X
                  className="x"
                  size={24}
                  color="#08c1bb"
                  weight="bold"
                  onClick={changeTime}
                />
              </div>

              <div className="main">
                <label htmlFor="now" className="now">
                  <Timer size={25} color="#585c5c" weight="bold" />
                  <div className="now-space">
                    <span>現在</span>
                    <input
                      type="radio"
                      id="now"
                      name="time"
                      checked={now}
                      onChange={setLater}
                    />
                    <div className="nowRadioCover"></div>
                  </div>
                </label>

                <label htmlFor="later" className="later">
                  <Clock size={23} color="#585c5c" weight="bold" />
                  <div className="later-space">
                    <span>稍後</span>
                    <input
                      type="radio"
                      id="later"
                      name="time"
                      checked={!now}
                      onChange={setLater}
                    />
                    <div className="laterRadioCover"></div>
                  </div>
                </label>

                {!now && (
                  <div className="twoSelect">
                    <label className="day" htmlFor="day">
                      <select id="day" onChange={changeDayValue}>
                        <option value="今天">今天</option>
                        <option value="明天">明天</option>
                      </select>
                      <CaretUpDown
                        className="upDown"
                        size={18}
                        color="#abadad"
                        weight="bold"
                      />
                    </label>

                    <label className="time" htmlFor="time">
                      <select id="time" onChange={changeTimeValue}>
                        <option>23:45 - 00:15</option>
                        <option>00:00 - 00:30</option>
                        <option>00:15 - 00:45</option>
                        <option>00:30 - 01:00</option>
                        <option>00:45 - 01:15</option>
                        <option>01:00 - 01:30</option>
                        <option>01:15 - 01:45</option>
                        <option>01:30 - 02:00</option>
                        <option>01:45 - 02:15</option>
                        <option>02:00 - 02:30</option>
                        <option>02:15 - 02:45</option>
                        <option>02:30 - 03:00</option>
                        <option>02:45 - 03:15</option>
                        <option>03:00 - 03:30</option>
                        <option>03:15 - 03:45</option>
                        <option>03:30 - 04:00</option>
                        <option>03:45 - 04:15</option>
                        <option>04:00 - 04:30</option>
                        <option>04:15 - 04:45</option>
                        <option>04:30 - 05:00</option>
                        <option>04:45 - 05:15</option>
                        <option>05:00 - 05:30</option>
                        <option>05:15 - 05:45</option>
                        <option>05:30 - 06:00</option>
                        <option>05:45 - 06:15</option>
                        <option>06:00 - 06:30</option>
                        <option>06:15 - 06:45</option>
                        <option>06:30 - 07:00</option>
                        <option>06:45 - 07:15</option>
                        <option>07:00 - 07:30</option>
                        <option>07:15 - 07:45</option>
                        <option>07:30 - 08:00</option>
                        <option>07:45 - 08:15</option>
                        <option>08:00 - 08:30</option>
                        <option>08:15 - 08:45</option>
                        <option>08:30 - 09:00</option>
                        <option>08:45 - 09:15</option>
                        <option>09:00 - 09:30</option>
                        <option>09:15 - 09:45</option>
                        <option>09:30 - 10:00</option>
                        <option>09:45 - 10:15</option>
                        <option>10:00 - 10:30</option>
                        <option>10:15 - 10:45</option>
                        <option>10:30 - 11:00</option>
                        <option>10:45 - 11:15</option>
                        <option>11:00 - 11:30</option>
                        <option>11:15 - 11:45</option>
                        <option>11:30 - 12:00</option>
                        <option>11:45 - 12:15</option>
                        <option>12:00 - 12:30</option>
                        <option>12:15 - 12:45</option>
                        <option>12:30 - 13:00</option>
                        <option>12:45 - 13:15</option>
                        <option>13:00 - 13:30</option>
                        <option>13:15 - 13:45</option>
                        <option>13:30 - 14:00</option>
                        <option>13:45 - 14:15</option>
                        <option>14:00 - 14:30</option>
                        <option>14:15 - 14:45</option>
                        <option>14:30 - 15:00</option>
                        <option>14:45 - 15:15</option>
                        <option>15:00 - 15:30</option>
                        <option>15:15 - 15:45</option>
                        <option>15:30 - 16:00</option>
                        <option>15:45 - 16:15</option>
                        <option>16:00 - 16:30</option>
                        <option>16:15 - 16:45</option>
                        <option>16:30 - 17:00</option>
                        <option>16:45 - 17:15</option>
                        <option>17:00 - 17:30</option>
                        <option>17:15 - 17:45</option>
                        <option>17:30 - 18:00</option>
                        <option>17:45 - 18:15</option>
                        <option>18:00 - 18:30</option>
                        <option>18:15 - 18:45</option>
                        <option>18:30 - 19:00</option>
                        <option>18:45 - 19:15</option>
                        <option>19:00 - 19:30</option>
                        <option>19:15 - 19:45</option>
                        <option>19:30 - 20:00</option>
                        <option>19:45 - 20:15</option>
                        <option>20:00 - 20:30</option>
                        <option>20:15 - 20:45</option>
                        <option>20:30 - 21:00</option>
                        <option>20:45 - 21:15</option>
                        <option>21:00 - 21:30</option>
                        <option>21:15 - 21:45</option>
                        <option>21:30 - 22:00</option>
                        <option>21:45 - 22:15</option>
                        <option>22:00 - 22:30</option>
                        <option>22:15 - 22:45</option>
                        <option>22:30 - 23:00</option>
                        <option>22:45 - 23:15</option>
                        <option>23:00 - 23:30</option>
                        <option>23:15 - 23:45</option>
                        <option>23:30 - 00:00</option>
                      </select>
                      <CaretUpDown
                        className="upDown"
                        size={18}
                        color="#abadad"
                        weight="bold"
                      />
                    </label>
                  </div>
                )}
              </div>

              <div className="confirm">
                <button className="cancel" onClick={changeTime}>
                  <span>取消</span>
                </button>
                <button className="confirm" onClick={clickToConfirmTime}>
                  <span>確認</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
