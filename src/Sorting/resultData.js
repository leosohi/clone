import coffee from "../Assets/no-pic.jpg";
/* topCat */
import img1 from "../Assets/topCat/pizza.jpeg";
import img2 from "../Assets/topCat/pickup.jpg";
import img3 from "../Assets/topCat/sale.jpg";
import img4 from "../Assets/topCat/apples.jpg";
import img5 from "../Assets/topCat/fullBag.jpg";
import img6 from "../Assets/topCat/dumplings.jpg";

/* topAds */
import img7 from "../Assets/topAds/sale2.jpg";
import img8 from "../Assets/topAds/promotion.jpg";
import img9 from "../Assets/topAds/cleanfruit.jpg";
import img10 from "../Assets/topAds/salad.jpg";
import img11 from "../Assets/topAds/salefood.jpg";

/* hotPick */
import img12 from "../Assets/hotPicks/burger.jpg";
import img13 from "../Assets/hotPicks/dessert.jpg";
import img14 from "../Assets/hotPicks/friedchick.jpg";
import img15 from "../Assets/hotPicks/spagett.jpg";
import img16 from "../Assets/hotPicks/sushi.jpg";

/* nearDiscount */
import img17 from "../Assets/nearDiscount/chineseDump.jpg";
import img18 from "../Assets/nearDiscount/sushi.jpg";
import img19 from "../Assets/nearDiscount/donburi.jpg";
import img20 from "../Assets/nearDiscount/thai.jpg";
import img21 from "../Assets/nearDiscount/soup.jpg";
import img22 from "../Assets/nearDiscount/congee.jpg";


const topCatData = [
  {
    img: img1,
    tag: "餐廳",
  },
  {
    img: img2,
    tag: "自取",
  },
  {
    img: img3,
    tag: "優惠",
  },
  {
    img: img4,
    tag: "HOP",
  },
  {
    img: img5,
    tag: "生活百貨店",
  },
  {
    img: img6,
    tag: "跨區精選",
  },
];

const topAdsData = [
  {
    img: img11,
    alt: "ads",
  },
  {
    img: img8,
    alt: "ads",
  },
  {
    img: img9,
    alt: "ads",
  },
  {
    img: img7,
    alt: "ads",
  },
  {
    img: img7,
    alt: "ads",
  },
  {
    img: coffee,
    alt: "",
  },
  {
    img: coffee,
    alt: "",
  },
  {
    img: coffee,
    alt: "",
  },
  {
    img: coffee,
    alt: "",
  },
  {
    img: coffee,
    alt: "",
  },
  {
    img: coffee,
    alt: "",
  },
];

const hotPickData = [
  {
    charge: "消費滿 $290",
    discount: "全單30%折扣",
    special: "待待送 Kangaroo 獨家",
    img: img10,
    time: "15 - 30",
    name: "Kangaroo HOP 待待超市",
    color: { color: "#4D7C1B" },
    mark: "4.5 極正",
    comment: "(500+)",
    num: "1.3 公里",
    dFee: "免運費",
  },
  {
    charge: "",
    discount: "全單25%折扣",
    special: "待待送 Kangaroo 獨家",
    img: img14,
    time: "20 - 30",
    name: "十分飽 Ten Mark Full",
    color: { color: "#4D7C1B" },
    mark: "4.5 極正",
    comment: "(500+)",
    num: "0.5 公里",
    dFee: "免運費",
  },
  {
    charge: "",
    discount: "免運費",
    special: "待待送 Kangaroo 獨家",
    img: img13,
    time: "20 - 35",
    name: "天龍甜品 Tin Lung Dessert",
    color: { color: "#4D7C1B" },
    mark: "4.7 極正",
    comment: "(500+)",
    num: "0.5 公里",
    dFee: "免運費",
  },
  {
    charge: "",
    discount: "免運費",
    special: "",
    img: img16,
    time: "40 - 45",
    name: "壽司府 Sushifu",
    color: { color: "#4D7C1B" },
    mark: "4.6 極正",
    comment: "(500+)",
    num: "1.1 公里",
    dFee: "免運費",
  },
  {
    charge: "",
    discount: "免運費",
    special: "",
    img: img15,
    time: "15 - 20",
    name: "昌記意粉",
    color: { color: "#4D7C1B" },
    mark: "4.5 極正",
    comment: "(500+)",
    num: "0.3 公里",
    dFee: "免運費",
  },
  {
    charge: "消費滿 $250",
    discount: "免運費",
    special: "",
    img: img12,
    time: "20 - 25",
    name: "⭐ Burger MaMa 漢堡媽媽",
    color: { color: "#4D7C1B" },
    mark: "4.8 極正",
    comment: "(500+)",
    num: "0.6 公里",
    dFee: "免運費",
  },
];

const nearDiscount = [
  {
    charge: "消費滿 $100",
    discount: "可獲25%折扣",
    special: "",
    img: img17,
    time: "25 - 30",
    name: "北京餃子王",
    color: { color: "#00717C" },
    mark: "4.4 十分正",
    comment: "(500+)",
    num: "1.2 公里",
    dFee: "免運費",
  },
  {
    charge: "",
    discount: "全單30%折扣",
    special: "Kangaroo's Choice",
    img: img18,
    time: "20 - 40",
    name: "洋和食",
    color: { color: "#4D7C1B" },
    mark: "4.5 十分正",
    comment: "(500+)",
    num: "0.8 公里",
    dFee: "免運費",
  },
  {
    charge: "消費滿 $250",
    discount: "免運費",
    special: "",
    img: img12,
    time: "20 - 25",
    name: "⭐ Burger MaMa 漢堡媽媽",
    color: { color: "#4D7C1B" },
    mark: "4.8 極正",
    comment: "(500+)",
    num: "0.6 公里",
    dFee: "免運費",
  },
  {
    charge: "",
    discount: "全單30%折扣",
    special: "Kangaroo's choice",
    img: img19,
    time: "20 - 35",
    name: "⭐ 丼丼飯 Donburi",
    color: { color: "#00717C" },
    mark: "4.4 十分正",
    comment: "(500+)",
    num: "0.8 公里",
    dFee: "免運費",
  },
  {
    charge: "",
    discount: "全單20%折扣",
    special: "Kangaroo's choice",
    img: img20,
    time: "25 - 45",
    name: "⭐ 泰好味 Thai yummy",
    color: { color: "#00717C" },
    mark: "4.2 十分正",
    comment: "(240)",
    num: "0.8 公里",
    dFee: "免運費",
  },
  {
    charge: "",
    discount: "全單15%折扣",
    special: "",
    img: img21,
    time: "15 - 35",
    name: "圓圓湯水 YunYun Soup",
    color: { color: "#4D7C1B" },
    mark: "4.6 極正",
    comment: "(84)",
    num: "0.5 公里",
    dFee: "免運費",
  },
  {
    charge: "",
    discount: "全單15%折扣",
    special: "",
    img: img21,
    time: "15 - 35",
    name: "圓圓湯水 YunYun Soup",
    color: { color: "#4D7C1B" },
    mark: "4.6 極正",
    comment: "(84)",
    num: "0.5 公里",
    dFee: "免運費",
  },
  {
    charge: "消費滿$100",
    discount: "全單25%折扣",
    special: "",
    img: img22,
    time: "25 - 45",
    name: "雲記粥麵 Wang Kee Congee",
    color: { color: "#00717C" },
    mark: "4.3 十分正",
    comment: "(500+)",
    num: "1.5 公里",
    dFee: "免運費",
  },
  {
    charge: "",
    discount: "",
    special: "",
    img: coffee,
    time: "",
    name: "",
    color: { color: "#00717C" },
    mark: "",
    comment: "",
    num: "",
    dFee: "",
  },
];

export { topCatData, topAdsData, hotPickData, nearDiscount };
