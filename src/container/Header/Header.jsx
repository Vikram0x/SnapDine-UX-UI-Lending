import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Change the trend" />
      <h1 className="app__header-h1">SnapDine</h1>
      <h2 className="app__header-h2">"Where Menus Meet Innovation"</h2>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        SnapDine is on a mission to transform the restaurant experience through
        cutting-edge technology. Our journey began with a simple idea: to
        provide an elegant and hassle-free way for diners to explore menus.{" "}
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
