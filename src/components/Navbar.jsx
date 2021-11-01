import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="/">
          <strong>rio</strong>
          seo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-item nav-link" href="/">
              Menu
            </a>
            <a className="nav-item nav-link" href="/locations">
              Truck Locator
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
