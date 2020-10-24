import React from "react";
import AdressInput from "./AdressInput/AdressInput";
import ClientInfo from "./ClientInfo";
import "./LocationContent.css";

function LocationContent() {
  return (
    <div className="location-content">
      <AdressInput />
      <ClientInfo />
    </div>
  );
}

export default LocationContent;
