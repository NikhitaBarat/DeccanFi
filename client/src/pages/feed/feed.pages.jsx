import React from "react";
import './feed.styles.css';
import { Banner, Profile, Profile1, Profile2, Profile3, PProfile, AImage, Abstract1, Abstract2, Abstract3 } from '../../assets';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import VideocamIcon from '@mui/icons-material/Videocam';
import PollIcon from '@mui/icons-material/Poll';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Storycard from '../../components/storycard/storycard.components.jsx'

const Feed = () => {
  const STORY = [
    {
      title: "Adison Mango",
      imgurl: Abstract1,
      profileimg: Profile1,
    },
    {
      title: "Rosalin Kumberai",
      imgurl: Abstract2,
      profileimg: Profile2,
    },
    {
      title: "Reene Rapp",
      imgurl: Abstract3,
      profileimg: Profile3,
    },
  ];
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
          {STORY.map((s) => (
            <Storycard title={s.title} image={s.imgurl} profile={s.profileimg} />
          ))}
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
              <button className='offer' >
                Make offer
              </button>
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
              <button className='offer' >
                Make offer
              </button>
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
              <button className='offer' >
                Make Offer
              </button>
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
              <button className='offer'>
                Make Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;