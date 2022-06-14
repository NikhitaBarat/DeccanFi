import React from "react";
import "./sponsers.styles.css";
import Logo1 from "../../assets/icons/express-js.png";
import Logo2 from "../../assets/icons/auth0_icon.png";
import Logo3 from "../../assets/icons/graphql-icon.png";

const Sponsers = () => {
  return (
    <div className="used">
      <ul className="list">
        <li>
          <img src={`https://nodejs.org/static/images/logo.svg`} alt="" />
        </li>
        <li>
          <img src={Logo1} alt="" />
        </li>
        <li>
          <img
            src={`https://img.icons8.com/wired/64/undefined/react.png`}
            alt=""
          />
        </li>
        <li>
          <img
            src={`https://uploads-ssl.webflow.com/6148aea00f7f90ad88e373a0/6148aea00f7f900364e37426_deso-logo-color.svg`}
            alt=""
          />
        </li>
        <li>
          <img src={Logo2} alt="" />
        </li>
        <li>
          <img src={Logo3} alt="" />
        </li>
        <li>
          <img
            src={`https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png`}
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};

export default Sponsers;
