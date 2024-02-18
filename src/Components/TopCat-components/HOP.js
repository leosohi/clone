import React, { useContext } from "react";
import SingleDiv from "../Result-components/SingleDiv";
import { ShopContext } from "../../Context/CreateContext";

const HOP = () => {
  const {kangarooMarket} = useContext(ShopContext);
  return (
    <div>
      <h2>待待超市</h2>
      <SingleDiv data={kangarooMarket} />
    </div>
  );
};

export default HOP;
