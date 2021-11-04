import React, { useState } from "react";

function Menu(props) {
  const [address, setAddress] = useState("");

  const onChange = (e) => {
    console.log("onChange", e.target.value);
    setAddress(e.target.value);
  };

  const onSearchClick = () => {
    props.history.push("/locations", { type: "ADDRESS", address });
  };

  return (
    <>
      <div className="my-4">
        <h1>Welcome To Taco Truck Locator!</h1>
        <h2>To find a taco truck near you please enter an address</h2>
      </div>
      <form action="">
        <div className="mb-3 row justify-content-center">
          <div className="col-auto">
            <label className="form-label" htmlFor="searchBar">
              Enter Address:
            </label>
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              name="searchBar"
              id="searchBar"
              onChange={onChange}
              value={address}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary" onClick={onSearchClick}>
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Menu;
