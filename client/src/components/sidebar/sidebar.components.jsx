import React from "react"
import {
  WalletIcon,
  CartIcon,
  HistoryIcon,
  OffersIcon,
  SettingIcon,
  OverviewIcon,
} from "../../assets/icons";
import { Logo } from "../../assets";
import { Link } from "react-router-dom";
import "./sidebar.styles.css";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <ul className="sidebar-nav-option">
        <li>
          <Link to="/dashboard">
            <img src={OverviewIcon} alt="" />
            Overview
          </Link>
        </li>
        <li>
          <Link to="/dashboard/market">
            <img src={CartIcon} alt="" />
            Market
          </Link>
        </li>
        <li>
          <Link to="/dashboard/wallet">
            <img src={WalletIcon} alt="" />
            Wallet
          </Link>
        </li>
        <li>
          <Link to="/dashboard/history">
            <img src={HistoryIcon} alt="" />
            History
          </Link>
        </li>
        <li>
          <Link to="/dashboard/offers">
            <img src={OffersIcon} alt="" />
            Offers
          </Link>
        </li>
        <li>
          <Link to="/dashboard/settings">
            <img src={SettingIcon} alt="" />
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
