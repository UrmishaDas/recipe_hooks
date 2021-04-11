import React from "react";
import "./Header.css";

import LoginHeader from "../loginHeader/LoginHeader";

const Header = () => {
  return (
    <div>
      <LoginHeader />
      <div className="navbar-wrapper">
        <div className="navbar-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Meal Deals</a>
            </li>
            <li>
              <a href="#">Hot Picks</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>

        </div>
      </div>

      {/* <SearchHeader /> */}
    </div>
  );
};

export default Header;
