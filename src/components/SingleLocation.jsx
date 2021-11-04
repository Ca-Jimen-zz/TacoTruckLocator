import React from "react";

function SingleLocation(props) {
  const onDirectionsClick = () => {
    props.onDirectionsClick(props.address);
  };

  const onMoreInfoClick = () => {
    props.onMoreInfoClick(props.address);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Taco Truck {props.address.id}</h5>
        <p className="card-text">
          {props.address.address}
          <br />
          {props.address.city}, {props.address.state}{" "}
          {props.address.postal_code}
        </p>
        <div className="d-flex justify-content-around">
          <button className="btn btn-secondary" onClick={onDirectionsClick}>
            DIRECTIONS
          </button>
          <button className="btn btn-secondary" onClick={onMoreInfoClick}>
            MORE INFO
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleLocation;
