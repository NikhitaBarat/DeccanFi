import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./profileCard.styles.css";

function ProfileCard() {
  const { user } = useAuth0();
  return (
    <div className="card">
      <div className="profile-banner">
        <div className="profile-bg"></div>
        <div className="profile-overlay"></div>
      </div>
      <div className="circle">
        <div className="profile-content">
          <img src={user.picture} alt="" />
          <div className="userdata">
            <h3>{user.name}</h3>
          </div>

          <div className="box">
            <div>
              <p className="num">100</p>
              <p>Posts</p>
            </div>
            <div>
              <p className="num">1.5K</p>
              <p>Followers</p>
            </div>
            <div>
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
