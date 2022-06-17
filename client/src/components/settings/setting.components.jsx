import React from "react";
import "./setting.styles.css";
import Image from "../../assets/aimage.png";

const Settings = () => {
  return (
    <div className="setting">
      <div className="row-setting">
        <div className="name-setting">
          <div>
            <h2>My Account</h2>
            <h3> Alex Washington </h3>
          </div>
          <div className="zero">
            <img src={Image} alt="" />
          </div>
        </div>
        <hr />
        <div className="user-setting">
          <div>
            <h2>UserName</h2>
            <h3>@alexa_washington8</h3>
          </div>
          <button className="btn-edit">Edit</button>
        </div>
        <div className="user-setting">
          <div>
            <h2>Email</h2>
            <h3>alexawashington8@hotmail.com</h3>
          </div>
          <button className="btn-edit">Edit</button>
        </div>
        <div className="user-setting">
          <div>
            <h2>Password</h2>
            <h3>*************</h3>
          </div>
          <button className="btn-edit">Edit</button>
        </div>
        <hr />
        <div className="acc-setting">
          <div>
            <h2>My Account</h2>
            <h3>Delete your account and data</h3>
          </div>

          <button className="accc-edit">Close Account</button>
        </div>
        <div className="save">
          <button className="save-edit">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
