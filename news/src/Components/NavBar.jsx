import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>
        <NavLink to="/" exact>
          TEK News
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/sports" exact>
            Sports
          </NavLink>
        </li>
        <li>
          <NavLink to="/weather" exact>
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink to="/politics" exact>
            Politics
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
