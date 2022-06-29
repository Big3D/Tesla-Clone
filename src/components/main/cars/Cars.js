import React, { useEffect } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { scroller } from "react-scroll";
import Footer from "../../nav_footer/Footer";

//// Styled component
const CarSection = styled.div`
  text-align: center;
  width: 800px;
  height: 100vh;
  margin: auto;
  justify-content: space-between;
  padding: 5% 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props) => (props.showMe ? "1" : "0")};
  transition: opacity 0.6s ease-in 0.5s;
  pointer-events: none;
`;

export default function Cars({
  data: {
    title,
    id,
    img,
    titleDesc,
    titleDescLink,
    buttonLink1,
    buttonLink2,
    showFooter,
  },
  index,
  scrolling,
  currElement,
  setCurrElement,
}) {
  const { ref, inView, entry } = useInView({ threshold: 0.1 });
  //// Moves the current selected element into view
  useEffect(() => {
    if (inView) {
      scroller.scrollTo(id, {
        duration: 800,
        delay: 0,
        smooth: "easeInOut",
        containerId: "scrollContainer",
      });
      setCurrElement(index);
    }
  }, [scrolling, setCurrElement, index, id, inView, entry]);

  //// The main container for all the services on the front page.
  return (
    <Element name={id} className={`${img} container`}>
      <div
        style={{ height: "100vh", width: "100%", position: "absolute" }}
        ref={ref}
      />
      <CarSection showMe={index == currElement ? true : false}>
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
        {showFooter ? <Footer /> : ""}
      </CarSection>
    </Element>
  );
}
