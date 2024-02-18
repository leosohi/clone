import React, {useContext} from 'react'
import { ShopContext } from '../../Context/CreateContext'
import TopAds from '../Result-components/TopAds';
import HotBrand from '../Result-components/HotBrand';
import SingleDiv from '../Result-components/SingleDiv';
import ClassicDiv from '../Result-components/ClassicDiv';

const Take = () => {
  const {deliverTo, hotClassic, nearDiscountClassic, specialClassic, highMarkClassic, highMarkSingle} = useContext(ShopContext);
  return (
    <div>
      <h2>於{deliverTo}自取訂單</h2>
      <TopAds />
      <HotBrand data={hotClassic}/>
      <ClassicDiv header={"你附近的優惠"} data={nearDiscountClassic} />
      <ClassicDiv header={"待待送獨家"} data={specialClassic} />
      <ClassicDiv header={"評分最高"} data={highMarkClassic} />
      <SingleDiv data={highMarkSingle} />
    </div>
  )
}

export default Take