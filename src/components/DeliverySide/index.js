import React from "react";
import Card from "../../components/Card";
import { FlagTwoTone } from "@ant-design/icons";
import "./DeliverySide.css";
import LocationContent from "../LocationContent";

function DelivreySide() {
  return (
    <div className="delivrey-side-container center">
      <Card title={"Pik Up"} icon={<FlagTwoTone twoToneColor="#4869c5" />}>
        <LocationContent/>
        </Card>
        <Card title={"Pik Up"} icon={<FlagTwoTone twoToneColor="#4869c5" />}>
        <p>DROP OFF</p>
        </Card>
        <Card title={"Pik Up"} icon={<FlagTwoTone twoToneColor="#4869c5" />}>
        <p>VIHCULE</p>
        </Card>
        <Card title={"Pik Up"} icon={<FlagTwoTone twoToneColor="#4869c5" />}>
        <p>DATE</p>
        </Card>
    </div>
  );
}

export default DelivreySide;
