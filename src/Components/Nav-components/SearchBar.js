import React, { useState, useRef, useEffect } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchBar = () => {
  const [placeholder, setPlaceholder] = useState("餐廳、生活百貨、菜式");
  const [display, setDisplay] = useState(false);

  /* dropdown list disappear */
  const inputRef = useRef();
  const dropdownRef = useRef();

  useEffect(() => {
    let clickOutside = (e) => {
      /* Click在不是input及dropdown的地方 */
      if (
        inputRef.current &&
        dropdownRef.current &&
        !inputRef.current.contains(e.target) &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDisplay(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  /* button style change*/
  const [buttonStyles, setButtonStyles] = useState({});

  const changeButtonStyle = (btn) => {
    const updatedStyles = {
      btn1: { backgroundColor: "white", color: "#08c1bb" },
      btn2: { backgroundColor: "white", color: "#08c1bb" },
      btn3: { backgroundColor: "white", color: "#08c1bb" },
    };

    updatedStyles[btn] = {
      backgroundColor: "#08c1bb",
      color: "white",
      borderRadius: "10px",
      fontWeight: 700,
      boxShadow: "0 0 0 0.2rem rgba(8, 193, 187, .25)"
    };
    setButtonStyles(updatedStyles);

    /* 設定新placeholder */
    if (btn === "btn1") {
      setPlaceholder("餐廳、生活百貨、菜式");
    } else if (btn === "btn2") {
      setPlaceholder("餐廳或菜式");
    } else if (btn === "btn3") {
      setPlaceholder("店舖、品牌、產品");
    }
  };

  return (
    <div className="searchBarBox">
      <MagnifyingGlass className="glass" size={18} />
      <input
        className="searchBar"
        type="search"
        placeholder={placeholder}
        onClick={() => setDisplay(!display)}
        ref={inputRef}
      />
      {/* display if display === true */}
      {display && (
        <div className="dropdown-box" ref={dropdownRef}>
          <ul className="dropdown">
            <li>
              <button
                style={buttonStyles.btn1}
                onClick={() => changeButtonStyle("btn1")}
              >
                全部
              </button>
            </li>
            <li>
              <button
                style={buttonStyles.btn2}
                onClick={() => changeButtonStyle("btn2")}
              >
                餐廳
              </button>
            </li>
            <li>
              <button
                style={buttonStyles.btn3}
                onClick={() => changeButtonStyle("btn3")}
              >
                生活百貨店
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
