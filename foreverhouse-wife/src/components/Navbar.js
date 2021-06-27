import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";
import BookIcon from "@material-ui/icons/Book";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

function Navbar() {
  return (
    <div className="navbar__container animate__animated animate__fadeIn animate__faster">
      {/* Left */}
      <div className="navbar__left">
        <a className="navbar__brand" href="/">
          Forever Housewife
        </a>
      </div>
      {/* Right */}
      <div className="navbar__right">
        <a className="nav__link" href="/about">
          <InfoIcon />
        </a>
        <a className="nav__link" href="/blog">
          <BookIcon />
        </a>
        <a className="nav__link" href="/vids">
          <VideoLabelIcon />
        </a>
        <a className="nav__link" href="/subscribe">
          <SubscriptionsIcon />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
