'use client';
import Image from 'next/image';
import { TbArrowUpRight } from 'react-icons/tb';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const itemsSwiper = [
  { src_image: '/images/swiper1.jpg' },
  { src_image: '/images/swiper2.jpg' },
  { src_image: '/images/swiper3.jpg' },
  { src_image: '/images/swiper4.jpg' },
  { src_image: '/images/swiper5.jpg' },
  { src_image: '/images/swiper6.jpg' },
  { src_image: '/images/swiper7.jpg' },
  { src_image: '/images/swiper8.jpg' },
];

const CatalogSwiperSection = () => {
  return (
    <div className="py-8 lg:py-28">
      <div className="container grid lg:grid-cols-1 mb-12 lg:mb-16">
        <div className="text-left">
          <h1 className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">
            Modern Classic
          </h1>
          <h4 className="pb-6 text-xl font-bold tracking-wider mt-5 capitalize italic">
            Luxury decor to create comfort in our home
          </h4>
          <div className="grid grid-cols-2 gap-x-8 leading-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              voluptatem itaque nulla repellendus, culpa reiciendis nihil neque
              corrupti blanditiis pariatur dolore. Ratione recusandae, amet
              animi praesentium illo et modi aliquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              voluptatem itaque nulla repellendus, culpa reiciendis nihil neque
              corrupti blanditiis pariatur dolore. Ratione recusandae, amet
              animi praesentium illo et modi aliquam.
            </p>
          </div>
          <a href="/gallery">
            <Button className="inline-flex items-center px-8 py-3 mt-6 rounded-full text-white shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 duration-300 ease-linear">
              View Gallery <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </div>
      {/* Swiper section */}
      <Swiper
        slidesPerView={1}
        className="catalogs__swiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={true}
        loop={true}
        modules={[Autoplay, Pagination]}
      >
        {itemsSwiper.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.src_image}
              alt=""
              width={520}
              height={300}
              className="w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CatalogSwiperSection;
