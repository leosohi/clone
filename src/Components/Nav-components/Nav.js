import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HouseLine, User, Bag, X } from "@phosphor-icons/react";
import { ShopContext } from "../../Context/CreateContext";
import Account from "../Account-components/Account";
import Modal from "../Side-components/Modal";
import ResponsiveTop from "../Side-components/ResponsiveTop";
import SearchBar from "../Nav-components/SearchBar";

const Nav = () => {
  const {
    acModal,
    clickedAc,
    modalStyle,
    modal,
    searchBar,
    setSearchBar,
    setCartItem,
    emptyCart,
  } = useContext(ShopContext);

  /* empty cart, disable searchBar */
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/Cart") {
      setCartItem(emptyCart);
    }

    if (location.pathname === "/") {
      setSearchBar(true);
    } else {
      setSearchBar(false);
    }
  }, [location]);

  return (
    <div className="navBar">
      {/* logo 部份 */}
      <div className="logo-box">
        <Link to="/" className="logo">
          <Bag className="bag" size={32} weight="fill" />
          <p className="logo-name">
            <span className="eng">Kangaroo</span>
            <span className="zh"> 待待送</span>
          </p>
        </Link>
      </div>

      {/* search bar 部份 */}
      {searchBar && <SearchBar />}

      {/* login, 帳戶部份 */}
      <ul className="navList">
        <Link to="/login">
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
              acModal();
            }}
          >
            <span>註冊或登入</span>
          </Link>
        </div>
      </div>

      {modal && <Modal />}
      <ResponsiveTop />
    </div>
  );
};

export default Nav;
