import React from "react";
import { FacebookLogo, TwitterLogo, InstagramLogo } from "@phosphor-icons/react";
import apple from "../Assets/download-icon/apple.svg";
import google from "../Assets/download-icon/google-play.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="boxes">
        <div className="about box">
          <h3>有關待待送</h3>
          <a href="#">投資者</a>
          <a href="#">關於待待送</a>
          <a href="#">外賣美食</a>
          <a href="#">更多</a>
          <a href="#">媒體報導</a>
          <a href="#">技術日誌</a>
          <a href="#">設計blog</a>
          <a href="#">工作機會</a>
          <a href="#">餐廳註冊</a>
        </div>
        <div className="law box">
          <h3>法律</h3>
          <a href="#">使用條款</a>
          <a href="#">私隱政策及條款</a>
          <a href="#">Cookie信息</a>
        </div>
        <div className="help box">
          <h3>幫助</h3>
          <a href="#">聯絡方法</a>
          <a href="#">常見問題</a>
          <a href="#">菜式</a>
        </div>
        <div className="download box">
          <h3>下載待待送</h3>
          <div className="two">
            <img src={apple} alt="from google play" />
            <img src={google} alt="from apple store" />
          </div>
        </div>
      </div>

      <div className="deepDown">
        <div className="threeLogos">
          <FacebookLogo size={24} color="white" weight="fill" className="fb"/>
          <TwitterLogo size={24} color="white" weight="fill" className="twit"/>
          <InstagramLogo size={24} color="white" className="ig"/>
        </div>

        <span>2024 Kangaoo</span>
      </div>
    </div>
  );
};

export default Footer;
