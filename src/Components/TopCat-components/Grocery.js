import React, { useContext } from "react";
import SingleDiv from "../Result-components/SingleDiv";
import { ShopContext } from "../../Context/CreateContext";


const Grocery = () => {
  const {grocery} = useContext(ShopContext);
  return (
    <div>
      <h2>生活百貨店</h2>
      <SingleDiv data={grocery} />
    </div>
  );
}

export default Grocery