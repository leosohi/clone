import React, {useContext} from "react";
import { ShopContext } from "../../Context/CreateContext";
import SingleDiv from "../Result-components/SingleDiv"

const Discount = () => {
  const {allDiscount} = useContext(ShopContext);

  return (
    <div>
      <h2>所有優惠</h2>
      <SingleDiv data={allDiscount}/>
    </div>
  );
};

export default Discount;
