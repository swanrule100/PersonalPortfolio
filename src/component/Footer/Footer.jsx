import React from "react";
import "./Footer.css";
function Footer() {
  const mobileNumber = "+917415053094";
  return (
    <>
      <div id="footerBackground">
        <div className="footer1">
          <div className="myname">
            <p>frontend Developer</p>
            <h1>Hansraj Meena</h1>
          </div>
          <div className="description">
            <p>
              With a strong foundation in HTML, CSS, JavaScript, and modern
              frameworks like ReactJS, I specialize in crafting responsive and
              user-friendly web interfaces. My work emphasizes clean design,
              seamless functionality, and an engaging user experience. From
              building dynamic components to integrating APIs, I have developed
              projects that demonstrate attention to detail and problem-solving
              skills.
            </p>
          </div>
          <div className="contactButton">
            <a href={`tel:${mobileNumber}`}>Contect Me</a>
          </div>
        </div>
        <div className="footer2">
          <div className="footer2UP">
            <a href="https://www.linkedin.com/in/hansraj01">
              <i class="fa-brands fa-linkedin"></i>Linkdein
            </a>
            <a href="https://www.instagram.com/hansraj_01">
              <i class="fa-brands fa-instagram"></i>Instagram
            </a>
            <a href={`tel:${mobileNumber}`}>
              <i class="fa-brands fa-whatsapp"></i>Whatsapp
            </a>
          </div>
          <div className="footer2Down">© All right reserved 2024-25</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
