'use client';

import { TbArrowUpRight } from 'react-icons/tb';
import { Button } from './ui/button';
import Image from 'next/image';
import {
  btnVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from '@/utils/animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="container py-12 xl:py-24 h-auto text-center lg:text-left lg:py-0 lg:flex lg:justify-between lg:gap-x-6">
      {/* Left Text Section */}
      <div className="lg:w-1/2 lg:py-8 xl:py-14">
        <motion.p
          initial="offscreen"
          whileInView={'onscreen'}
          variants={tagVariants}
          className="uppercase tracking-widest"
        >
          Offer for the best Interior
        </motion.p>
        <motion.h1
          initial="offscreen"
          whileInView={'onscreen'}
          variants={titleVariants}
          className="h1"
        >
          Make your home a <br />
          piece of art
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView={'onscreen'}
          variants={desVariants}
          className="pb-6 text-muted-foreground xl:pb-10"
        >
          Change your view with the best interior design. We provide the best
          interior design for your home. Make every moment beautiful with the
          best interior design. Pellent esque ornare sem lacinia quam ven enatis
          vestibt ive ulum. Maec enas sed dia eget risus varius blandit ult amid
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView={'onscreen'}
          variants={btnVariants}
        >
          <Button className="inline-flex items-center px-8 py-3 rounded-full shadow-lg text-white hover:bg-gray-800 hover:ring-2 ring-offset-2 hover:ring-gray-950 duration-300">
            <em className="text-[16px]">Book now</em>
            <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
      {/* Right Images Section */}
      <div className="lg:w-1/2 hidden">
        <Image
          src="/images/hall.png"
          width={800}
          height={500}
          alt=""
          className="absolute right-20 xl:h-[448px] xl:w-[700px] lg:h-[344px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
