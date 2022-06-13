import React from "react";
import { MonsterLeft } from "../../assets";
import { NFTcard } from "../../components";
import "./home.styles.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="bg-relative">
        <div className="blur-bg"></div>
      </div>
      <section>
        <div className="spreads"></div>
        <div className="spreads"></div>
      </section>
      <div className="website-main">
        <div className="home-content">
          <h1>
            Discover, and collect <br />
            extraordinary <br />
            <span>monster</span> NFTs.
          </h1>
          <p>
            Marketplace for monster character collections non fungible token
            (NFTs).
          </p>
          <button className="collect-now">Collect Now &gt;</button>
        </div>
        <div className="monster-img">
          <img className="monster" src={MonsterLeft} alt="" />
          <div className="rounds">
            <div className="oval-1"></div>
            <div className="oval-2"></div>
          </div>
        </div>
      </div>
      <div className="rounds">
            <div className="cirlcle-1"></div>
            <div className="cirlcle-2"></div>
            <div className="cirlcle-3"></div>
      </div>

      <div className="nft-list">
        <NFTcard />
        <NFTcard />
        <NFTcard />
      </div>
    </div>
  );
};

export default Home;
