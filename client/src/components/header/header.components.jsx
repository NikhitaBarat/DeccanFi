import React from "react";
import { Logo } from "../../assets";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./header.styles.css";

const Header = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });
  return (
    <header className="header">
      <div className="brand-logo">
        <Link to="/">
          <img src={Logo} alt="LOGO" />
        </Link>
      </div>

      <ul className="nav-option">
        <li>
          <Link className="home-opt" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/stat">Stat</Link>
        </li>
        {!isAuthenticated && (
          <div className="auth-option">
            <li onClick={() => loginWithRedirect()}>
              Login
            </li>
            <li>
              <button onClick={() => loginWithRedirect()} className="sign-up-btn">Sign Up</button>
            </li>
          </div>
        )}
        {isAuthenticated && (
          <div className="auth-option">
            <li onClick={() => logoutWithRedirect()}>
              Logout
            </li>
            <li>
              <img className="user-pro-img" src={user.picture} alt="" />
            </li>
          </div>
        )}
      </ul>
    </header>
  );
};

export default Header;
