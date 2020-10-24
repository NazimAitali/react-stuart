import React from "react";
import "./ClientInfo.css";
import { Input } from "antd";

function ClientInfo() {
  return (
    <>
      <div className="row">
        <div className="info-input">
          <Input placeholder="First Name" size="large" />
        </div>
        <div className="info-input">
          <Input placeholder="Last Name" size="large" />
        </div>
      </div>
      <div className="row">
        <div className="info-input">
          <Input placeholder="Company" size="large" />
        </div>
      </div>
      <div className="row">
        <div className="info-input">
          <Input placeholder="Phone number " size="large" />
        </div>
        <div className="info-input">
          <Input placeholder="E-mail" size="large" />
        </div>
      </div>
      <div className="row">
        <div className="info-input">
          <Input placeholder="Details" size="large" />
        </div>
      </div>
      {true ? (
        <>
          <div>ORDER DETAILS</div>
          <div className="row">
            <div className="info-input">
              <Input placeholder="Order ID" size="large" />
            </div>
          </div>
          <div className="row">
            <div className="info-input">
              <Input placeholder="Order inforamtion" size="large" />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default ClientInfo;
