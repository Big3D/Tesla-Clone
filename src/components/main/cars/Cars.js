import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
// import { useState } from "react";
// import { useScrollSection } from "react-scroll-section";

const CarSection = styled.div`
  /* background-color: darkblue; */
  text-align: center;
  width: 600px;
  height: 100vh;
  margin: auto;
  justify-content: space-between;
  padding: 5% 0;
`;

export default function Cars({ data: { title, id, img } }) {
  return (
    <Element name={id} className={`${img} container`}>
      <CarSection>
        <div className="topService">
          <span className="service">{title}</span>
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
    </Element>
  );
}
