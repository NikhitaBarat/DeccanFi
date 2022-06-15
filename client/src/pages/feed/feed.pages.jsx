import React from "react";
import './feed.styles.css';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Banner from '../../assets/feed-banner.png';
import Profile from '../../assets/feed-profile.png';
import SBanner from '../../assets/story-banner.png';
import SProfile from '../../assets/story-image.png';
import PProfile from '../../assets/post-image.png';
import AImage from '../../assets/aimage.png'
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import VideocamIcon from '@mui/icons-material/Videocam';
import PollIcon from '@mui/icons-material/Poll';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { ClickAwayListener } from "@mui/material";

const Feed = () => {
  return (
    <div className="feed-page">
      <div className="left">
        <div className="profile-card">
          <div className="profile-banner">
            <img src={Banner} alt="" />
          </div>
          <div className="show">
            <div className="followers">
              <h4>1984</h4>
              <p>Followers</p>
            </div>
            <div className="profile-image">
              <img src={Profile} alt="" />
            </div>
            <div className="following">
              <h4>1007</h4>
              <p>Following</p>
            </div>
          </div>
          <div className="name">
            <h4>Evgen Ledo</h4>
            <p>@ledoheck</p>
            <p>Hello! I'm here since 2022.</p>
          </div>
          <button className="check-profile">
            Check my profile
          </button>
        </div>
      </div>
      <div className="centre">
        <div className="stories">
          <div className="story">
            <div className="story-banner">
              <img src={SBanner} alt="" />
            </div>
            <div className="story-image">
              <img src={SProfile} alt="" />
            </div>
            <div className="story-name">
              <h4>Adison Mango</h4>
            </div>
          </div>
          <div className="story">
            <div className="story-banner">
              <img src={SBanner} alt="" />
            </div>
            <div className="story-image">
              <img src={SProfile} alt="" />
            </div>
            <div className="story-name">
              <h4>Adison Mango</h4>
            </div>
          </div>
          <div className="story">
            <div className="story-banner">
              <img src={SBanner} alt="" />
            </div>
            <div className="story-image">
              <img src={SProfile} alt="" />
            </div>
            <div className="story-name">
              <h4>Adison Mango</h4>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="top">
            <img src={PProfile} alt="" />
            <input type="text" placeholder="Tell us about your thoughts" />
          </div>
          <div className="options">
            <div className="option">
              <PhotoSizeSelectActualIcon />
              <p>Photo</p>
            </div>
            <div className="option">
              <VideocamIcon />
              <p>Video</p>
            </div>
            <div className="option">
              <PollIcon />
              <p>Poll</p>
            </div>
            <div className="option">
              <CalendarTodayIcon />
              <p>Schedule</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="activity">
          Recent Activity
          <div className="a-box">
            <div className="a-top">
              <img src={AImage} alt="" />
              <h4>Vitaliy Akterskiy</h4>
              <p>Recently purchased Primate Solana</p>
            </div>
            <div className="a-bid">
              <div className="amount">
                <h4>34 ETH</h4>
                <p>Last Bid</p>
              </div>
              <div className="offer">
                Make Offer
              </div>
            </div>
          </div>
          <div className="a-box">
            <div className="a-top">
              <img src={AImage} alt="" />
              <h4>Vitaliy Akterskiy</h4>
              <p>Recently purchased Primate Solana</p>
            </div>
            <div className="a-bid">
              <div className="amount">
                <h4>34 ETH</h4>
                <p>Last Bid</p>
              </div>
              <div className="offer">
                Make Offer
              </div>
            </div>
          </div>
          <div className="a-box">
            <div className="a-top">
              <img src={AImage} alt="" />
              <h4>Vitaliy Akterskiy</h4>
              <p>Recently purchased Primate Solana</p>
            </div>
            <div className="a-bid">
              <div className="amount">
                <h4>34 ETH</h4>
                <p>Last Bid</p>
              </div>
              <div className="offer">
                Make Offer
              </div>
            </div>
          </div>
          <div className="a-box">
            <div className="a-top">
              <img src={AImage} alt="" />
              <h4>Vitaliy Akterskiy</h4>
              <p>Recently purchased Primate Solana</p>
            </div>
            <div className="a-bid">
              <div className="amount">
                <h4>34 ETH</h4>
                <p>Last Bid</p>
              </div>
              <div className="offer">
                Make Offer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;