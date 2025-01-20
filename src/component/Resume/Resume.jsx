import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <>
      <div id="resumeDiv">
        <h1 className="HeadingH1">Resume</h1>
        <h3>
          If you’d like to learn more about my skills and experience, feel free
          to download my resume. Click the button below to get a copy!
        </h3>
        <div className="DwnldButton">
          <a href="/HansrajMeenaResume1.pdf" download>
            <button>Download Resume</button>
          </a>
          <a href="/HansrajMeenaResume1.pdf">
            <button>Download CV</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Resume;
