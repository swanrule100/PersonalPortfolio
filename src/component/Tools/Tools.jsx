import React from "react";
import "./Tools.css";
import cssLogo from "./logos/icons8-css-logo-240.png";
import githubLogo from "./logos/icons8-github-logo-1500.png";
import htmlLogo from "./logos/icons8-html-logo-480.png";
import javascriptLogo from "./logos/icons8-javascript-480.png";
import nodejsLogo from "./logos/nodejs.png";
import reactLogo from "./logos/icons8-react-480.png";

function Tools() {
  return (
    <>
      <div className="toolsbody">
        <div className="nametagline">
          <h1>Tool Box</h1>
          <p>
            A collection of tools, frameworks, and technologies that I have used
            to build and optimize my projects, showcasing my technical expertise
            and adaptability
          </p>
        </div>
        <div className="techImg">
          <img src={htmlLogo} alt="" />
          <img src={cssLogo} alt="" />
          <img src={javascriptLogo} alt="" />
          <img src={reactLogo} alt="" />
          <img src={githubLogo} alt="" />
          <img src={nodejsLogo} alt="" />
        </div>
      </div>
    </>
  );
}

export default Tools;
