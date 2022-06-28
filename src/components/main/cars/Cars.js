import React, { useEffect } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { scroller } from "react-scroll";

// import { useState } from "react";

const CarSection = styled.div`
  /* background-color: darkblue; */
  text-align: center;
  width: 600px;
  height: 100vh;
  margin: auto;
  justify-content: space-between;
  padding: 5% 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props) => (props.showMe ? "1" : "0")};
  transition: opacity 1.3s;
  pointer-events: none;
`;

export default function Cars({
  data: { title, id, img, titleDesc, titleDescLink, buttonLink1, buttonLink2 },
  index, scrolling,
  currElement, setCurrElement
}) {
  const { ref, inView, entry } = useInView({threshold: .1});
  useEffect(() => {
    if(inView ){
      scroller.scrollTo(id, {
        duration: 800,
        delay: 0,
        smooth: "easeInOut",
        containerId: "scrollContainer",
      })
      setCurrElement(index)
    }
  }, [scrolling, setCurrElement, index, id, inView, entry]);

  return (
    <Element name={id} className={`${img} container`} >
      {index}
      {currElement}
      <div style={{height:"100vh", width:"100%", position:"absolute"}} ref={ref}/>
      <CarSection showMe={index == currElement ? true : false} >
        <div className="topService">
          <span className="service">{title}</span>
          <p className="nameDescription">
            {titleDesc}
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {titleDescLink}
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
            <span>{buttonLink1}</span>
          </a>
          {buttonLink2 && (
            <a
              className="serviceButton inventoryButton"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{buttonLink2}</span>
            </a>
          )}
        </div>
      </CarSection>
    </Element>
  );
}
