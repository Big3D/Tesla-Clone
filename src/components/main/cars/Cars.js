import React from "react";
import styled from "styled-components";

const CarSection = styled.div`
  background-color: darkblue;
  width: 500px;
  margin: auto;
`;
export default function Cars() {
  return (
    <CarSection>
      <span className="Service">Model 365</span>
      <p className="test">Order Online for Touchless Delivery</p>

      <a
        className="orderButton"
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Custom Order</span>
      </a>
      <a
        className="inventoryButton"
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
      >
        Existing Inventory
      </a>
    </CarSection>
  );
}
