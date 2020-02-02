import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = ({ each }) => {
  switch (each) {
    case "location":
      return <FontAwesomeIcon icon="map-marker-alt" />;
    case "quote":
      return <FontAwesomeIcon icon="quote-right" />;
    case "character":
      return <FontAwesomeIcon icon="male" />;
    default:
      return null;
  }
};

export default Loading;
