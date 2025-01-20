import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <>
      <div id="projectsBody">
        <div className="projectHeading">
          <h1>What I’ve Built</h1>
          <p>
            A showcase of the diverse projects I’ve worked on, blending
            creativity, technology, and problem-solving to deliver impactful
            solutions.
          </p>
        </div>
        <div className="projecShow">
          <div className="card">
            <div className="cardsDetail">
              <div className="projectImge">
                <img
                  src="https://images.pexels.com/photos/4853280/pexels-photo-4853280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="projectName">Track Your Workout</div>
              <div className="projectdetail">
                A simple and easy-to-use website to log and track your workouts.
                It helps you keep track of exercises, sets, and progress, making
                it easier to stay on top of your fitness goals.
              </div>
              <a href="https://github.com/swanrule100/Track-your-workout">
                <button className="knowMore">
                  know More <i class="fa-solid fa-arrow-right"></i>
                </button>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="cardsDetail">
              <div className="projectImge">
                <img
                  src="https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="projectName">FileTransform</div>
              <div className="projectdetail">
                A free, user-friendly tool for converting files between PDF and
                JPG formats. Enjoy high-quality, quick, and hassle-free
                conversions, perfect for all your document transformation needs.
                Simplify your workflow effortlessly!
              </div>
              <a href="https://github.com/swanrule100/Track-your-workout">
                <button className="knowMore">
                  know More <i class="fa-solid fa-arrow-right"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
