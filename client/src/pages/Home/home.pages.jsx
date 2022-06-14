import React from "react";
import {
  MonsterLeft,
  MonsterRight,
  BoredApes,
  Babymonster,
} from "../../assets";
import { NFTcard } from "../../components";
import { Sponsors } from "../../components";
import "./home.styles.css";

const Home = () => {
  const TREND_NFT = [
    {
      title: "Yeti Crypt",
      imgurl: MonsterRight,
    },
    {
      title: "Bored Apes",
      imgurl: BoredApes,
    },
    {
      title: "Baby Monsta",
      imgurl: Babymonster,
    },
  ];

  return (
    <div className="home-page">
      <div className="home-bg-purple"></div>
      <div className="bg-relative">
        <div className="cir-1"></div>
        <div className="cir-2"></div>
        <div className="cir-3"></div>
        <div className="cir-4"></div>
        <div className="blur-bg-1"></div>
        <div className="blur-bg-2"></div>
      </div>
      <section className="spread-section">
        <div className="spreads"></div>
        <div className="spreads"></div>
      </section>
      <div className="website-main">
        <div className="home-content">
          <h1>
            Discover, and collect <br />
            extraordinary <br />
            <span>NFTs</span> by your friends.
          </h1>
          <p>
            A place to find and collect NFTs made by your friends.
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
      <Sponsors />
      <div className="nft-list">
        {TREND_NFT.map((monster) => (
          <NFTcard title={monster.title} image={monster.imgurl} />
        ))}
      </div>
    </div>
  );
};

export default Home;
