import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "./Services.css";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data.services))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="services-card">
            <div className="image">
              <img src={service.path} alt={`Service ${index + 1}`} />
            </div>
            <div className="description">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
