import React, { useContext } from "react";
import { ShopContext } from "../../Context/CreateContext";
import TopAds from "../Result-components/TopAds";
import ClassicDiv from "../Result-components/ClassicDiv";
import HotBrand from "../Result-components/HotBrand";
import SingleDiv from "../Result-components/SingleDiv";

const Rest = () => {
  const {
    nearDiscountClassic,
    specialClassic,
    hotClassic,
    noDFeeClassic,
    highMarkClassic,
    highMarkSingle,
    fastestClassic,
    fastestSingle
  } = useContext(ShopContext);

  return (
    <div>
      <h2>餐廳</h2>
      <TopAds />
      <ClassicDiv header={"區內熱門之選"} data={hotClassic} />
      <ClassicDiv header={"你附近的優惠"} data={nearDiscountClassic} />
      <ClassicDiv header={"待待送獨家"} data={specialClassic} />
      <HotBrand data={hotClassic} />
      <ClassicDiv header={"免運費"} data={noDFeeClassic} />
      <ClassicDiv header={"評分最高"} data={highMarkClassic} />
      <SingleDiv data={highMarkSingle} />
      <ClassicDiv header={"最快送上"} data={fastestClassic} />
      <SingleDiv data={fastestSingle} />
    </div>
  );
};

export default Rest;
