"use client";

// import Swiper core and required modules
import { A11y, Thumbs, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ReactNode } from "react";

export type SliderProps = {
  slides?: ReactNode[] | string[];
};

export default function Slider({ slides = [] }: SliderProps) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y, Thumbs, Autoplay]}
      centeredSlides={true}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      className="w-full h-full"
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={`slide-${i}`}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}
