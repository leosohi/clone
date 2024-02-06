import React, { useState, useEffect} from "react";
import { CaretDown, Check } from "@phosphor-icons/react";

const Category = ({ header, dataArray }) => {
  const [rotate, setRotate] = useState(false);
  const [display, setDisplay] = useState(false);
  const [border, setBorder] = useState(true);

  const activateList = () => {
    setDisplay(!display);
    setRotate(!rotate);
    setBorder(!border);
  };

  /* show last category */
  useEffect(() => {
    if (header === "類別") {
      activateList();
    }
  }, [header]);

  const borderless = {
    borderBottom: border ? "1px solid rgb(232, 235, 235)" : "none",
  };

  const rotation = {
    transform: rotate ? "rotate(-180deg)" : "rotate(0deg)",
  };

  return (
    <div className="sorting" style={borderless}>
      <button className="ranking" onClick={activateList}>
        <div className="heading">
          <h4>{header}</h4>
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
          {dataArray.map(({ id }, index) => {
            return (
              <div className="sorting-box">
                <label className="wider" htmlFor={id}>
                  <input type="checkbox" id={id} key={index} />
                  <Check
                    className="check"
                    size={15}
                    color="white"
                    weight="bold"
                  />
                  <span>{id}</span>
                </label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Category;
