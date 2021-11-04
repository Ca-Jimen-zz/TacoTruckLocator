import React from "react";
import * as locationServices from "../services/locationServices";
import SingleLocation from "./SingleLocation";
import testData from "../testData";
import Map from "./Map";
import MoreInfo from "./MoreInfo";

class Locations extends React.Component {
  state = {
    locations: [],
    mappedLoc: [],
    latitude: "",
    longitude: "",
    moreInfoTrigger: 0,
    currentAddress: {},
  };
  componentDidMount() {
    console.log(this.props.location.state);
    locationServices
      .getLocations()
      .then(this.onGetLocationsSuccess)
      .catch(this.onGetLocationsError);
  }

  onGetLocationsSuccess = (response) => {
    console.log(response);
    console.log("testData", testData);
    //let matchFound = response.data.filter(this.filterByPostalCode);
    //let mappedLocations = matchFound.map(this.mapCards);

    let matchFound = testData.filter(this.filterByPostalCode);
    let mappedLocations = matchFound.map(this.mapCards);

    this.setState((prevState) => {
      let prev = { ...prevState };
      prev.locations = response.data;
      return { locations: prev.locations, mappedLoc: mappedLocations };
    }, this.stateChanged);
  };

  onDirectionsClick = (address) => {
    console.log("onDirectionsClick", address);
    this.setState((prevState) => {
      return {
        ...prevState,
        latitude: address.latitude,
        longitude: address.longitude,
      };
    }, this.stateChanged);
  };
  onMoreInfoClick = (address) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        moreInfoTrigger: this.state.moreInfoTrigger + 1,
        currentAddress: address,
      };
    }, this.stateChanged);
  };

  mapCards = (address) => {
    return (
      <React.Fragment key={address.id}>
        <SingleLocation
          onDirectionsClick={this.onDirectionsClick}
          onMoreInfoClick={this.onMoreInfoClick}
          address={address}
        />
      </React.Fragment>
    );
  };

  filterByPostalCode = (address) => {
    if (address.postal_code === this.props.location.state.address) {
      return address;
    }
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
          Found {this.state.mappedLoc.length} Taco{" "}
          {this.state.mappedLoc.length === 1 ? "Truck" : "Trucks"} in{" "}
          {this.props.location.state.address}
        </h1>
        <div className="d-flex col-md-12 justify-content-center my-4">
          <div>{this.state.mappedLoc}</div>
          <div>
            <Map lat={this.state.latitude} lon={this.state.longitude} />
            <MoreInfo
              moreInfo={this.state.moreInfoTrigger}
              address={this.state.currentAddress}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Locations;
