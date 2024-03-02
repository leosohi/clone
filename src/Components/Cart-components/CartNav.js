import React, { useState, useEffect, useRef } from "react";
import { Link as LinkScroll } from "react-scroll";
import { CaretDown } from "@phosphor-icons/react";

const CartNav = () => {
  const [menu, setMenu] = useState(false);

  const menuRef = useRef();

  const clickMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const clickOutMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", clickOutMenu);

    return () => {
      document.removeEventListener("mousedown", clickOutMenu);
    };

  }, []);

  return (
    <nav>
      <ul>
        <LinkScroll
          activeClass="active"
          to="set"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li>🍱漢堡套餐 Burger Set🍱</li>
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="burger"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="burger"
        >
          <li>🍔漢堡 Burger🍔</li>
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="fry"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="fry"
        >
          <li>🍟炸物 Fried Food🍟</li>
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="drinks"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="drinks"
        >
          <li>🧋凍飲 Cold Drinks🧋</li>
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="dessert"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="dessert"
        >
          <li>🍮甜品 Dessert🍮</li>
        </LinkScroll>

        <li className="more" onClick={clickMenu} ref={menuRef}>
          更多
          <CaretDown
            size={18}
            style={{ transform: menu ? "rotate(180deg)" : "none" }}
            weight="bold"
          />
          {menu && (
            <div className="dropDownFood" onClick={clickMenu}>
              <LinkScroll
                activeClass="activeDrop"
                to="burger"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={clickMenu}
              >
                <li>🍔漢堡 Burger🍔</li>
              </LinkScroll>
              <LinkScroll
                activeClass="activeDrop"
                to="fry"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={clickMenu}
              >
                <li>🍟炸物 Fried Food🍟</li>
              </LinkScroll>
              <LinkScroll
                activeClass="activeDrop"
                to="drinks"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={clickMenu}
              >
                <li>🧋凍飲 Cold Drinks🧋</li>
              </LinkScroll>
              <LinkScroll
                activeClass="activeDrop"
                to="dessert"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={clickMenu}
              >
                <li>🍮甜品 Dessert🍮</li>
              </LinkScroll>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default CartNav;
