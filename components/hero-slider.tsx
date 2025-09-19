"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { heroSliderList } from "@/lib/data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const HeroSlider = () => {
  return (
    <Swiper
      loop
      navigation
      autoplay={{ delay: 4000 }}
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true, dynamicBullets: true }}
      className="heroSlider"
    >
      {heroSliderList.map(({ id, title, image, subtitle, buttonText }) => (
        <SwiperSlide key={id} className="py-12 lg:py-16">
          <div className="container text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="flex-1">
                <h2 className="mb-4 text-4xl lg:text-6xl leading-tight lg:leading-[90px] font-bold text-blue">
                  {title}
                </h2>
                <p className="mb-8 max-w-135 mx-auto xl:mx-0 text-base lg:text-[18px] lg:leading-8">
                  {subtitle}
                </p>
                <button type="button" className="mb-8 lg:mb-0 btn">
                  {buttonText}
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src={image} alt={title} className="h-96 lg:h-auto" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
