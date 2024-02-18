import React from "react";
import {
  Link as LinkScroll,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { CaretDown } from "@phosphor-icons/react";

const CartNav = () => {
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
        <li className="more">
          更多
          <CaretDown size={18} />
        </li>
      </ul>
    </nav>
  );
};

export default CartNav;
