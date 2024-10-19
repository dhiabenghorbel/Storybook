import React, { useEffect, useState } from "react";
import classNames from "classnames";
import loadGoogleMapsApi from "load-google-maps-api";
import "./map.scss";
import Icon from "../Icon/Icon.tsx";

const createMap = (googleMaps: any, mapElement: any, lat: number, lng: number, zoom: number) => {
  const centerCoords = { lat, lng };
  return new googleMaps.Map(mapElement, {
    center: centerCoords,
    zoom: zoom
  });
};

interface GoogleMapProps {
  start: string;
  destination: string;
  zoom: number;
  lat: number;
  lng: number;
}

const GoogleMap = ({ start, destination, zoom, lat, lng }: GoogleMapProps) => {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    const mapElement = document.getElementById("map");
    loadGoogleMapsApi({ key: "AIzaSyDDe9_0qtcG0ptMhaIfSNJUCeeQFc_Tftw" }).then((googleMaps: any) => {
      createMap(googleMaps, mapElement, lat, lng, zoom);
    });
  }, [lat, lng, zoom]);

  return (
    <React.Fragment>
      <div className="flex-row-center cursor-pointer" onClick={() => setShowing(prev => !prev)}>
        {/* <p>Ver mapa</p> */}
        <p>See the map</p>
        <Icon name="map-marked-alt" light={false} />
      </div>
      <div id="map" className={classNames({ "map-hidden": !showing }, { "map-show": showing })} />
    </React.Fragment>
  );
};

GoogleMap.defaultProps = {
  start: "",
  destination: "",
  zoom: 7,
  lat: 41.85,
  lng: -87.65
};

export default GoogleMap;
