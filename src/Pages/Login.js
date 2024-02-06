import React from "react";
import {EnvelopeSimple, FacebookLogo} from "@phosphor-icons/react";
import google_pic from "../Assets/google_svg.png";

const Login = () => {
  return (
    <div className="login">
      <div className="center">
        
        <p>註冊或登入</p>

        <button className="fb">
          <span><FacebookLogo size={23} color="#ffffff" weight="fill" />以 Facebook 帳戶繼續</span>
        </button>

        <button className="google">
          <span><img src={google_pic} alt="google" />以 Google 帳戶繼續</span>
        </button>
        <div className="or">
          <span>或</span>
        </div>

        <button className="email">
          <span><EnvelopeSimple size={18} color="white" />以電郵帳戶繼續</span>
        </button>

        <span className="last">
          一旦繼續，即表示你同意我們的<a href="#">條款及細則</a>和
          <a href="#">私隱政策</a>。
        </span>


      </div>
    </div>
  );
};

export default Login;
