import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function NavBar({ titel, route1, route2}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {titel}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link  active-link" aria-current="page" to="/">
                  {route1}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active-link" to="/about">
                  {route2}
                </Link>
              </li>
            </ul>
         
          </div>
        </div>
      </nav>
    </>
  );
}
NavBar.prototype = {
  titel: PropTypes.string.isRequired,
  route1: PropTypes.string.isRequired,
  route2: PropTypes.string.isRequired,
};
NavBar.defaultProps = {
  titel: "Site Name",
  route1: "Link1",
  route2: "Link2",
};
export default NavBar;
