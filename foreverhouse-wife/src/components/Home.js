import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home__container">
      <div className="home__banner__container animate__animated animate__fadeIn animate__slow">
        <img
          className="home__banner"
          alt="logo"
          src="https://foreverhousewife.com/wp-content/uploads/2020/01/cropped-FullColor_1024x1024_300dpi-logo-picture-scaled-2.jpg"
        />
        <p className="home__banner__text">
          Always Busy; Sometimes Sane; Forever Fabulous. All by The Strength Of
          God
        </p>
      </div>
      <h1 className="home__latest__title">Latest Content</h1>
      <div className="home__latest">
        {/* Article */}
        <div className="home__latest__blog">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h3>
          <button className="home__latest__blog__button">Read more</button>
        </div>
        {/* Video */}
        <div className="home__latest__vid">
          <iframe
            width="460"
            height="240"
            src="https://www.youtube.com/embed/NSD2WW8xieY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;
