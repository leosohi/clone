import React, { useContext } from "react";
import { ShopContext } from "../../Context/CreateContext";
import SingleDiv from "../Result-components/SingleDiv";

const CrossArea = () => {
  const { randomRest } = useContext(ShopContext);
  return (
    <div>
      <h2>跨區精選</h2>
      <SingleDiv data={randomRest} />
    </div>
  );
};

export default CrossArea;
