import React from "react";
import "./LoginHeader.css";

const LoginHeader = () => {
  return (
    <div className="upperTitleSection">
      <div className="title">YummyMeal</div>

      <div className="LoginRegisterMenu">
        <ul>
           
          <li>
            <a id="lbl_login" href="#">
              Login
            </a>
          </li>

          <li>
            <label id="lbl_splash"> | </label>
          </li>

          <li>
            <a id="lnk_register" href="#">
              Register
            </a>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default LoginHeader;

// import React, { Component } from "react";

// class MenuItem extends React.Component {
//   render() {
//     return (
//       <div>
//         <a id="lbl_login" href="#">
//           Login
//         </a>

//         <label id="lbl_splash"> | </label>
//         <a id="lnk_register" href="#">
//           Register
//         </a>
//       </div>
//     );
//   }
// }

// export default class LoginHeader extends Component {
//   render() {
//     var myMenu = ["Login", "Register"];
//     return (
//       <div>
//         <button className="hamburger">m</button>
//         <ul className="menu">
//           {myMenu.map((item) => {
//             return <MenuItem key={item} text={item} />;
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
