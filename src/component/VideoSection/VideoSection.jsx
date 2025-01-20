import React, { useState, useRef } from "react";
import "./VideoSection.css";

const videos = [
  { src: "video1.mp4", title: "Video 1" },
  { src: "video2.mp4", title: "Video 2" },
  { src: "video3.mp4", title: "Video 3" },
  { src: "video4.mp4", title: "Video 4" },
  { src: "video5.mp4", title: "Video 5" },
];

function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    playVideo(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === videos.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    playVideo(newIndex);
  };

  const playVideo = (index) => {
    if (videoRef.current) {
      videoRef.current.src = videos[index].src;
      videoRef.current.play();
    }
  };

  return (
    <div id="videoSectionBody">
      <div className="videosSectionName">
        {" "}
        <h1>Video Creations</h1>
        <p>
          A collection of motivational videos crafted to ignite passion, drive,
          and a sense of transformation. Each video aims to inspire you to push
          boundaries and embrace personal growth, both in and out of the gym.
        </p>
      </div>

      <div className="carouselContainer">
        <button className="carouselBtn prevBtn" onClick={handlePrev}>
          &#9665;
        </button>

        <div className="carouselContent">
          <div className="videoCard">
            <video ref={videoRef} controls>
              <source src={videos[currentIndex].src} type="video/mp4" />
            </video>
          </div>
        </div>

        <button className="carouselBtn nextBtn" onClick={handleNext}>
          &#9655;
        </button>
      </div>
    </div>
  );
}

export default VideoSection;
