// src/components/Reviews.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Reviews.css'; // We'll create this CSS file next

const reviews = [
  {
    name: 'Goran (BodyPower Gym)',
    text: "I couldn’t be happier with the service provided by MBA Cleaning Service. They always ensure our gym is spotless, creating a clean and welcoming environment for our members. Highly recommended!",
  },
  {
    name: "Jim's Cleaning",
    text: "MBA Cleaning has been a reliable partner. Their team is punctual, thorough, and committed to delivering quality service.",
  },
  {
    name: 'Ana (Chiba Japanese Restaurant)',
    text: "The team at MBA Cleaning Service is fantastic. They take care of everything we need with no hassle, and the results speak for themselves.",
  },
  {
    name: 'Centrogen',
    text: "We’ve been working with MBA Cleaning Service for a while now. They are dependable, efficient, and always leave our facility in excellent condition.",
  },
  {
    name: 'Milos (Eurohub)',
    text: "MBA Cleaning Service provides top-tier service. They are responsive and always deliver outstanding results.",
  },
  {
    name: 'Mico (Saint Petka Orthodox Church)',
    text: "MBA Cleaning Service consistently provides exceptional service. They are reliable and attentive, ensuring everything is in pristine condition.",
  },
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2>What Our Clients Say</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <p className="review-text">"{review.text}"</p>
              <h3 className="reviewer-name">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
