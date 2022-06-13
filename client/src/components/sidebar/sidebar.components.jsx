import React from "react";
import { WalletIcon, CartIcon, HistoryIcon, OffersIcon, SettingIcon, OverviewIcon } from '../../assets/icons'
import './sidebar.styles.css';

const Sidebar = () => {
  return (
    <div className="side-bar">
      <ul className="sidebar-nav-option">
        <li>
          <img src={OverviewIcon} alt="" />
          Overview
        </li>
        <li>
          <img src={CartIcon} alt="" />
          Market
        </li>
        <li>
          <img src={WalletIcon} alt="" />
          Wallet
        </li>
        <li>
          <img src={HistoryIcon} alt="" />
          History
        </li>
        <li>
          <img src={OffersIcon} alt="" />
          Offers
        </li>
        <li>
          <img src={SettingIcon} alt="" />
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
