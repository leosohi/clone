import React, { useContext } from "react";
import { ShopContext } from "../../Context/CreateContext";

const Account = () => {
  const { acModal } = useContext(ShopContext);

  return (
    <div className="account">
      <div className="overlay" onClick={acModal}></div>
    </div>
  );
};

export default Account;
