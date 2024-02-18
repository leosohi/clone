import React, { useContext } from "react";
import HotBrand from "./HotBrand";
import SingleDiv from "./SingleDiv";
import TopCat from "./TopCat";
import TopAds from "./TopAds";
import ClassicDiv from "./ClassicDiv";
import { ShopContext } from "../../Context/CreateContext";

const Default = () => {
  const {
    deliverTo,
    nearDiscountClassic,
    specialClassic,
    hotClassic,
    noDFeeClassic,
    highMarkClassic,
    fastestClassic,
    fastestSingle,
  } = useContext(ShopContext);

  return (
    <div>
      <h3 className="deliverTo">送餐至{deliverTo}</h3>
      <TopCat />
      <TopAds />
      <ClassicDiv header={"區內熱門之選"} data={hotClassic} />
      <ClassicDiv header={"你附近的優惠"} data={nearDiscountClassic} />
      <ClassicDiv header={"待待送獨家"} data={specialClassic} />
      <HotBrand data={hotClassic} />
      <SingleDiv data={hotClassic} />
      <ClassicDiv header={"免運費"} data={noDFeeClassic} />
      <ClassicDiv header={"評分最高"} data={highMarkClassic} />
      <ClassicDiv header={"最快送上"} data={fastestClassic} />
      <SingleDiv data={fastestSingle} />
    </div>
  );
};

export default Default;
