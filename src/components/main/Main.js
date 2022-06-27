import React from "react";
import Navbar from "../nav_footer/Navbar";
import { serviceData } from "./serviceData";
import Cars from "./cars/Cars";
import "../main/cars/model3-css.css";
import { scroller, Element, animateScroll as scroll } from "react-scroll";

// import { Section } from "react-scroll-section";
import { useState, useRef } from "react";
// import { useScrollSections } from "react-scroll-section";

let serviceComponents = serviceData.map((data) => {
  return <Cars data={data} key={data.id} />;
});

export default function Main() {
  const [useScroll, setUseScroll] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  // const sections = useScrollSections();
  const scrollContent = useRef();
  const [timeoutId, setTimeoutId] = useState(0);
  const [currElement, setCurrElement] = useState(0);

  function handleScroll(e) {
    e.preventDefault();
    clearTimeout(timeoutId);
    setTimeoutId(0);

    // let currentSection;

    // sections.forEach((element, index) => {
    //   if (element.selected === true) {
    //     currentSection = index;
    //   }
    // });

    //sections.filter((section, index)=> section.selected === true && index)
    let currentYOffset = scrollContent.current.scrollTop;
    // console.log('handle ran')
    // console.log(currentSection)
    if (!scrolling) {
      setScrolling(true);
      if (currentYOffset > useScroll) {
        if (currElement + 1 !== serviceData.length) {
          scroller.scrollTo(serviceData[currElement + 1].id, {
            duration: 800,
            delay: 0,
            smooth: "easeInOut",
            containerId: "scrollContainer"
          });
          setCurrElement(currElement + 1);
        }
        console.log(serviceData[currElement + 1])
      }
      else {
        if (currElement - 1 >= 0) {
          scroller.scrollTo(serviceData[currElement - 1].id, {
            duration: 800,
            delay: 0,
            smooth: "easeInOut",
            containerId: "scrollContainer"
          });
          setCurrElement(currElement - 1);
        }
      }
        
      
    }
    let tOId = setTimeout(() => {
      setScrolling(false);
    }, 300);
    setTimeoutId(tOId);
    setUseScroll(currentYOffset);
  }

  return (
    <div id="mainBody">
      <Navbar />
      <div
        id="scrollContainer"
        ref={scrollContent}
        onScroll={handleScroll}
        style={{
          height: "100vh",
          overflowY: "scroll",
          position: "fixed",
          width: "100%",
        }}
      >
        {serviceComponents}
      </div>
    </div>
  );
}
