import React from "react";
import "./wallet.styles.css";
import Send from "../../assets/icons/send.png";
import Purchase from "../../assets/icons/purchase.png";
import Receive from "../../assets/icons/receive.png";

const Wallet = () => {
  return (
    <div className="wallet">
      <div className="wallet-row">
        <div className="overlay"></div>
        <div className="value">
          <h3>Current Wallet Value</h3>
          <h1>$60,236.42</h1>
          <h4>▴ $407,00(3.14%)</h4>
        </div>
        <div className="wallet-action">
          <div className="btn">
            <div className="btn-icons">
              <div className="btn-image-bg">
                <img src={Send} alt="" />
              </div>
              Send
            </div>
            <div className="btn-icons">
              <div className="btn-image-bg">
                <img src={Purchase} alt="" />
              </div>
              Purchase
            </div>
            <div className="btn-icons">
              <div className="btn-image-bg">
                <img src={Receive} alt="" />
              </div>
              Receive
            </div>
          </div>
        </div>
        <hr className="margin" />
      </div>
    </div>
  );
};

export default Wallet;
