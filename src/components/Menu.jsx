import React from "react";

function Menu() {
  return (
    <>
      <div className="my-4">
        <h1>Welcome To Taco Truck Locator!</h1>
        <h2>To find a taco truck near you please enter an address</h2>
      </div>
      <form action="">
        <div className="mb-3 row align-items-center">
          <div className="col-auto">
            <label className="form-label" htmlFor="searchBar">
              Enter Address:
            </label>
          </div>
          <div className="col-xl-8">
            <input
              className="form-control"
              type="text"
              name="searchBar"
              id="searchBar"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Menu;
