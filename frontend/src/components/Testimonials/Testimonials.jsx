import React, { useState, useEffect } from "react";
import './Testimonials.css';
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch the testimonials JSON
    fetch("/testimonials.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);
  return (
    <div className="testimonials">
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false, 
        }}
        modules={[Pagination, Autoplay]} 
        className="swiper-container"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-card">
            <div className="content">
              <p>{testimonial.feedback}</p>
            </div>
            <div className="author">
              <h5>{testimonial.author}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}