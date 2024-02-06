import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Basket, HouseLine, User, Bag, X } from "@phosphor-icons/react";
import SearchBar from "./SearchBar";
import { ShopContext } from "../../Context/CreateContext";
import Account from "../Account-components/Account";

const Nav = () => {
  const number = 108;
  const checkOutAmount = number.toFixed(2);
  const { login, loginPage, setLoginPage, acModal, clickedAc, modalStyle } =
    useContext(ShopContext);

  return (
    <div className="navBar">
      {/* logo 部份 */}
      <div className="logo-box">
        <Link to="/" className="logo" onClick={() => setLoginPage(false)}>
          <Bag className="bag" size={32} weight="fill" />
          <p className="logo-name">
            <span className="eng">Kangaroo</span>
            <span className="zh"> 待待送</span>
          </p>
        </Link>
      </div>
      {/* search bar 部份 */}
      {!loginPage && <SearchBar />}

      {/* 結算, login, 帳戶部份 */}
      <ul className="navList">
        {!loginPage && (
          <Link to="/cart">
            <li className="navCart">
              <Basket className="listIcon" size={18} />
              <span>${checkOutAmount}</span>
            </li>
          </Link>
        )}

        <Link to="/login" onClick={() => login()}>
          <li className="navLogin">
            <HouseLine className="listIcon" size={18} />
            <span>註冊或登入</span>
          </li>
        </Link>

        <li className="navAccount" onClick={acModal}>
          <User className="listIcon" size={18} />
          <span>帳戶</span>
        </li>
      </ul>

      {clickedAc && <Account />}
      <div className="account-content" style={modalStyle}>
        <div className="header">
          <Bag size={32} weight="fill" color="#08c1bb" />

          <p className="logo-name">
            <span className="eng">Kangaroo</span>
            <span className="zh"> 待待送</span>
          </p>

          <X
            className="crossX"
            size={24}
            weight="bold"
            color="#08c1bb"
            onClick={acModal}
          />
        </div>

        <div className="login-part">
          <Link
            to="/login"
            className="login"
            onClick={() => {
              acModal(); login();
            }}
          >
            <span>註冊或登入</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
