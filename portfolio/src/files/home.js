import React from "react";
import "./animations.css";
import sunIcon from "./../images/sun.svg";
// import AboutSwiper from "./aboutSwiper";



function Home() {
  return (
    <div className="container Home df jcs">
      <nav className="df fdrc jcsb h100">
        <div className="top">
          <div className="logo">
            <a href="#!" className="logo">
              nurmuhammad
            </a>
            <div className="nav_toggler"></div>
          </div>
          <ul className="nav__list _list">
            <li>
              <a href="#!" className="nav__link __link active">
                about
              </a>
            </li>
            <li>
              <a href="#!" className="nav__link __link">
                works
              </a>
            </li>
            <li>
              <a href="#!" className="nav__link __link">
                resume
              </a>
            </li>
            <li>
              <a href="#!" className="nav__link __link">
                contact
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <a href="#!" className="switch df aic jcs">
            <img src={sunIcon} />
            Switch Dark
          </a>
        </div>
      </nav>
      <div className="about">
        <div className="about__text">
          <h1>
            Simply said, <br />I love my work and coding
          </h1>
          <span className="subtitle">And... I love Gaming</span>
          <p className="header__text  __text">
            I`m from Uzbekistan, Tashkent region. And here, in this atmosphere I
            enjoy coding
          </p>
          <p className="header__text  __text">
            I`m 16 years old. My hobby is playing online games. And I know it`s
            not good, but it means how I relax
          </p>
        </div>
        {/* <AboutSwiper /> */}
      </div>
    </div>
  );
}

export default Home;
