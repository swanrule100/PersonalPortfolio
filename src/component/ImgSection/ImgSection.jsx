import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImgSection.css";

const images = [
  { src: "img1.jpg", title: "Image 1" },
  { src: "img2.jpg", title: "Image 2" },
  { src: "img3.jpg", title: "Image 3" },
  { src: "img4.jpg", title: "Image 4" },
  { src: "img5.jpg", title: "Image 5" },
  { src: "img6.jpg", title: "Image 6" },
  { src: "img7.jpg", title: "Image 7" },
  { src: "img8.jpg", title: "Image 8" },
];

function ImgSection() {
  return (
    <div className="mainImgSection">
      <div className="titleName">
        <h1>Visual Gallery</h1>
        <p>
          A curated selection of images showcasing my creative work and moments
          of inspiration.
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="imageItem">
              <img src={image.src} alt={image.title} />
              {/* <p>{image.title}</p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImgSection;
