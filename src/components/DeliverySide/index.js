import React from "react";
import Card from "../../components/Card";
import { FlagTwoTone } from "@ant-design/icons";
import "./DeliverySide.css";

function DelivreySide() {
  return (
    <div className="delivrey-side-container center">
      <Card title={"Pik Up"} icon={<FlagTwoTone twoToneColor="#4869c5" />}>
        <p>hello world</p>
        </Card>
    </div>
  );
}

export default DelivreySide;
