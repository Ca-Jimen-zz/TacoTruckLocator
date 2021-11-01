import React from "react";
import * as locationServices from "../services/locationServices";

class Locations extends React.Component {
  state = {
    locations: [],
  };
  componentDidMount() {
    locationServices
      .getLocations()
      .then(this.onGetLocationsSuccess)
      .catch(this.onGetLocationsError);
  }

  onGetLocationsSuccess = (response) => {
    console.log(response);
    this.setState((prevState) => {
      let prev = { ...prevState };
      prev.locations = response.data;
      return { locations: prev.locations };
    }, this.stateChanged);
  };

  stateChanged = () => {
    console.log("new state", this.state);
  };

  onGetLocationsError = (err) => {
    console.log({ error: err });
  };

  render() {
    return (
      <>
        <h1>
          Found {} Taco Trucks in {}
        </h1>
      </>
    );
  }
}

export default Locations;
