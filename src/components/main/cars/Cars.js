import React from "react";
import styled from "styled-components";

const CarSection = styled.div`
  /* background-color: darkblue; */
  text-align: center;
  width: 600px;
  height: 100vh;
  margin: auto;
  justify-content: space-between;
  padding: 5% 0;
`;
export default function Cars() {
  return (
    <CarSection>
      <div className="topService">
        <span className="service">Model 3</span>
        <p className="nameDescription">
          Order Online for{" "}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Touchless Delivery
          </a>
        </p>
      </div>
      <div className="buttonWrap">
        <a
          className="serviceButton orderButton"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>CUSTOM ORDER</span>
        </a>
        <a
          className="serviceButton inventoryButton"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>EXISTING INVENTORY</span>
        </a>
      </div>
    </CarSection>
  );
}
