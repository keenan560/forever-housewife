import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__left">
        <p style={{ color: "#fff", fontWeight: "lighter" }}>
          2021 &copy; Forever Housewife{" "}
        </p>
      </div>
      <div className="footer__right">
        <FacebookIcon className="footer__icon" />
        <InstagramIcon className="footer__icon" />
        <TwitterIcon className="footer__icon" />
      </div>
    </div>
  );
}

export default Footer;
