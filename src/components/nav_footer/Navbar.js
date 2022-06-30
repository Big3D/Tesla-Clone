import React, { useRef, useState, useEffect, createRef } from "react";
import "./navbar-css.css";
import TeslaLogo from "../img/TeslaLogo";

let navLinks = [
  "modelS",
  "model3",
  "modelX",
  "modelY",
  "solarRoof",
  "solarPanel",
  "shop",
  "account",
  "menu",
];

export default function Navbar() {
  //// All states used
  const [hoveredNav, setHoveredNav] = useState(false);
  const elementRef = useRef(navLinks.map(() => createRef()));
  const [softSlide, setSoftSlide] = useState({});
  const indicateRef = useRef();
  const [transitioned, setTransitioned] = useState(false);

  useEffect(() => {
    //// Checks to see if the Navbar is hovered over
    //// Default properties of the Hover effect
    if (!hoveredNav) {
      setSoftSlide({
        position: "absolute",
        opacity: "0",
        left: 0,
        transform: `translateX(${
          elementRef.current[0].current.getBoundingClientRect().x
        }px)`,
        transition: "none",
      });
    }
  }, [hoveredNav]);

  function handleHover(hoveredItem) {
    //// Saved code snippet for getting the opacity of a useRef item
    // console.log(window.getComputedStyle(indicateRef.current).getPropertyValue("opacity"));

    //// Checks to see if this is the first time you are hovering
    if (transitioned) {
      //// Creates a variable that holds the information for the NavHover effect
      let transformObject = {
        width: hoveredItem.current.getBoundingClientRect().width,
        height: "32px",
        borderRadius: "12px",
        position: "absolute",
        left: 0,
        transform: `translateX(${
          hoveredItem.current.getBoundingClientRect().x
        }px)`,
        transition: "transform 0.5s cubic-bezier(.75, 0, 0, 1)",
        opacity: "0.5",
      };
      setSoftSlide(transformObject);
    }
    //// If you havent left the navbar then this keeps the Hover effect in place
    else {
      // setHoveredNav(true);
      let transformObject = {
        width: hoveredItem.current.getBoundingClientRect().width,
        height: "32px",
        borderRadius: "12px",
        position: "absolute",
        left: 0,
        transform: `translateX(${
          hoveredItem.current.getBoundingClientRect().x
        }px)`,
        transition: "none",
        opacity: "0.5",
      };
      setSoftSlide(transformObject);
      setTransitioned(true);
    }
  }

  //// Sets the Hover effect back to an "invisible" state
  function handleHoverOff(hoverItem) {
    let removeOpacity = {
      width: hoverItem.current.getBoundingClientRect().width,
      height: "32px",
      borderRadius: "12px",
      position: "absolute",
      left: 0,
      transform: `translateX(${hoverItem.current.getBoundingClientRect().x}px)`,
      transition: "none",
      opacity: "0.5",
    };
    setSoftSlide(removeOpacity);
  }

  return (
    <div className="navbar">
      <div className="navbarWhite">
        <p className="whiteNav">Read Tesla's 2021 Impact Report</p>
      </div>
      <div
        className="navbarOver"
        onMouseEnter={() => {
          setHoveredNav(true);
          console.log("Nav hovering");
        }}
        onMouseLeave={() => {
          setHoveredNav(false);
          setTransitioned(false);
        }}
      >
        <div className="navLogo">
          <TeslaLogo />
        </div>
        <div className="indicator" style={softSlide} ref={indicateRef}></div>
        <div>
          <ul className="navServices">
            <li
              className="serviceItem"
              onMouseLeave={() => handleHoverOff(elementRef.current[0])}
              onMouseOver={() => handleHover(elementRef.current[0])}
              ref={elementRef.current[0]}
            >
              <span className="navText">Model S</span>
            </li>
            <li
              className="serviceItem"
              onMouseLeave={() => handleHoverOff(elementRef.current[1])}
              onMouseEnter={() => handleHover(elementRef.current[1])}
              ref={elementRef.current[1]}
            >
              <span className="navText">Model 3</span>
            </li>
            <li
              className="serviceItem"
              onMouseLeave={() => handleHoverOff(elementRef.current[2])}
              onMouseOver={() => handleHover(elementRef.current[2])}
              ref={elementRef.current[2]}
            >
              <span className="navText">Model X</span>
            </li>
            <li
              className="serviceItem"
              onMouseLeave={() => handleHoverOff(elementRef.current[3])}
              onMouseOver={() => handleHover(elementRef.current[3])}
              ref={elementRef.current[3]}
            >
              <span className="navText">Model Y</span>
            </li>
            <li
              className="serviceItem"
              onMouseLeave={() => handleHoverOff(elementRef.current[4])}
              onMouseOver={() => handleHover(elementRef.current[4])}
              ref={elementRef.current[4]}
            >
              <span className="navText">Solar Roof</span>
            </li>
            <li
              className="serviceItem"
              onMouseLeave={() => handleHoverOff(elementRef.current[5])}
              onMouseEnter={() => handleHover(elementRef.current[5])}
              ref={elementRef.current[5]}
            >
              <span className="navText">Solar Panels</span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="webNav">
            <li
              className="webItem navText"
              onMouseLeave={() => handleHoverOff(elementRef.current[6])}
              onMouseOver={() => handleHover(elementRef.current[6])}
              ref={elementRef.current[6]}
            >
              Shop
            </li>
            <li
              className="webItem navText"
              onMouseLeave={() => handleHoverOff(elementRef.current[7])}
              onMouseOver={() => handleHover(elementRef.current[7])}
              ref={elementRef.current[7]}
            >
              Account
            </li>
            <li
              className="webItem navText"
              onMouseLeave={() => handleHoverOff(elementRef.current[8])}
              onMouseOver={() => handleHover(elementRef.current[8])}
              ref={elementRef.current[8]}
            >
              Menu
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
