import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./profileCard.styles.css";

function ProfileCard() {
  const { user } = useAuth0();
  return (
    <div className="user-profile-card">
      <div className="user-profile-banner">
        <div className="user-profile-bg"></div>
        <div className="user-profile-overlay"></div>
      </div>
      <div className="user-circle">
        <div className="user-profile-content">
          <img className="user-profile-picture" src={user.picture} alt="" />
          <div className="userdata">
            <h3>{user.name}</h3>
          </div>

          <div className="user-profile-data-box">
            <div className="profile-stats">
              <p className="num">100</p>
              <p>Posts</p>
            </div>
            <div className="profile-stats">
              <p className="num">1.5K</p>
              <p>Followers</p>
            </div>
            <div className="profile-stats">
              <p className="num">500</p>
              <p>Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
