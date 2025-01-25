import React from "react";
import "./Landing.css";

import { useState, useEffect } from "react";
const roles = [
  "Web Developer..",
  "ui/ux designer.",
  "Graphic Designer.",
  "Content Creator.",
];
const logoImg = [{ src: "myImge.jpg", title: "my image" }];

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

        {logoImg.map((imge) => (
          <div className="rightside">
            <img src={imge.src} alt="my image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing;
