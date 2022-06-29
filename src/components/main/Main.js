import React from "react";
import Navbar from "../nav_footer/Navbar";
import Footer from "../nav_footer/Footer";
import { serviceData } from "./serviceData";
import Cars from "./cars/Cars";
import "../main/cars/model3-css.css";
import "./main-css.css";
import { scroller, Element, scrollSpy } from "react-scroll";
import { useState, useRef } from "react";

export default function Main() {
  // const [useScroll, setUseScroll] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const scrollContent = useRef();
  const [timeoutId, setTimeoutId] = useState(0);
  const [currElement, setCurrElement] = useState(0);
  // const [currView, setCurrView]

  //// Store the data into service components variable, then destructures it into its own variables
  let serviceComponents = serviceData.map((data, i) => {
    return (
      <Cars
        data={data}
        key={data.id}
        currElement={currElement}
        index={i}
        setCurrElement={setCurrElement}
        scrolling={scrolling}
      />
    );
  });

  function handleScroll(e) {
    e.preventDefault();
    // clearing timeout to prevent scroll while already scrolling
    clearTimeout(timeoutId);
    setTimeoutId(0);

    if (!scrolling) {
      setScrolling(true);
      console.log(currElement);

      //// This is the hard way to try and do this effect on a scroll event////
      ////
      // if (currentYOffset > useScroll) {
      //   if (currElement + 1 !== serviceData.length) {
      //     //scrolls to the next element in the array
      //     scroller.scrollTo(serviceData[currElement + 1].id, {
      //       duration: 800,
      //       delay: 0,
      //       smooth: "easeInOut",
      //       containerId: "scrollContainer",
      //     });
      //     scrollSpy.update();
      //     setCurrElement(currElement + 1);
      //     console.log("Scroll Down")
      //   }
      //   // console.log(serviceData[currElement + 1]);
      // } else if (currentYOffset < useScroll){
      //   if (currElement - 1 >= 0) {
      //     // scrolls to the previous element in the array
      //     scroller.scrollTo(serviceData[currElement - 1].id, {
      //       duration: 800,
      //       delay: 0,
      //       smooth: "easeInOut",
      //       containerId: "scrollContainer",
      //     });
      //     scrollSpy.update();
      //     setCurrElement(currElement - 1);
      //     console.log("Scroll Up")
      //   }
      // }
      ////
    }
    //// Sets timeout between scroll events
    let tOId = setTimeout(() => {
      setScrolling(false);
    }, 800);
    setTimeoutId(tOId);
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
