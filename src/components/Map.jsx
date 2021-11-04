import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "600px",
};

const center = {
  lat: 30.745,
  lng: -93.523,
};

const position = {
  lat: 37.772,
  lng: -122.214,
};

function Map(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC36IkPNMqJAE1rmNIfQcGi2m65jguPpE0",
  });

  const [newPos, setNewPos] = useState();

  useEffect(() => {
    setNewPos({ lat: parseFloat(props.lat), lng: parseFloat(props.lon) });
  }, [props]);

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={newPos.lat ? newPos : position}
      zoom={12}
    >
      {
        /* Child components, such as markers, info windows, etc. */
        <Marker
          onLoad={onLoad}
          position={newPos.lat ? newPos : position}
          visible={newPos.lat ? true : false}
        />
      }
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
