import React from "react";
import "./AdressInput.css";
import { Input } from "antd";

function AdressInput() {
  const { Search } = Input;
  return (
    <div className="adress-content">
      <Search placeholder="input search text" size="large" />
    </div>
  );
}

export default AdressInput;
