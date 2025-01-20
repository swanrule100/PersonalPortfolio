import React from "react";
import "./Landing.css";

import { useState, useEffect } from "react";
const roles = [
  "Web Developer..",
  "ui/ux designer.",
  "Graphic Designer.",
  "Content Creator.",
];

function Landing() {
  const [currentRole, setcurrentRole] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);

      setTimeout(() => {
        setcurrentRole((preRole) => (preRole + 1) % roles.length);
        setIsFadingOut(false);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="landingPageBody">
        <div className="leftside">
          <p>
            Hi, My Name is <span>Hansraj Meena</span> And i'm a passionate
            <strong className={`role ${isFadingOut ? "fade-out" : "fade-in"}`}>
              {roles[currentRole]}
            </strong>
          </p>
        </div>

        <div className="rightside">
          <img
            src="https://images.pexels.com/photos/1181275/pexels-photo-1181275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="my image"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
