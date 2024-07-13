'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { TbArrowUpRight } from 'react-icons/tb';
import { motion, useScroll, useTransform } from 'framer-motion';
import { btnVariants, desVariants, titleVariants } from '@/utils/animation';
import { useRef } from 'react';

const Page = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div>
      <div className="bg-[url(/images/whoweare.jpg)] bg-center bg-cover">
        <motion.h1
          initial="offscreen"
          whileInView={'onscreen'}
          variants={btnVariants}
          className="py-36 text-5xl text-black font-semibold text-center tracking-wider md:py-44 lg:py-64 lg:text-[72px]"
        >
          Who are we?
        </motion.h1>
      </div>
      <div className="container">
        <motion.div
          initial="offscreen"
          whileInView={'onscreen'}
          variants={titleVariants}
          className="mt-8 md:mt-12 lg:mt-14"
        >
          <h3 className="text-3xl px-6 text-center font-semibold capitalize md:px-12 lg:px-16 lg:text-5xl">
            We have great idea & Interior design
          </h3>
          <p className="text-lg mt-4 mb-6 text-center leading-8 text-muted-foreground">
            Our interior design company, is a company that provides interior
            design services for homes, offices, apartments, and others. We
            provides the best interior design services for you. We have a team
            that is experienced in the field of interior.
          </p>
        </motion.div>
        <div className="mt-10 lg:mt-14 justify-center lg:flex gap-x-8">
          {/* left image section */}
          <motion.div
            ref={ref}
            style={{ scale }}
            initial="offscreen"
            whileInView={'onscreen'}
            variants={desVariants}
            className="w-full"
          >
            <Image
              src="/images/gallery1123.jpg"
              alt=""
              width={740}
              height={740}
            />
          </motion.div>
          {/* right content section */}
          <motion.div
            initial="offscreen"
            whileInView={'onscreen'}
            variants={btnVariants}
            className="mt-6 lg:mt-2"
          >
            <p className="text-muted-foreground leading-7 tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              repellendus aut porro quo delectus hic facilis quidem odio itaque
              vel adipisci. Enim corrupti molestiae facere repellat sit
              voluptatem ipsam inventore perferendis dolorum? <br /> <br />
            </p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              ipsam aut asperiores quasi beatae perspiciatis quaerat enim ullam
              repellendus veniam blanditiis dolorum tempore ipsum libero
              repudiandae fugit sint. Magnam nemo sint assumenda vero, libero
              officia eaque labore quam id amet. <br /> <br />
            </p>
            <span className="text-xl font-bold tracking-wide">
              The backpiper ARCH, we share a belief in the transformational
              power of people united in a common purpose.
            </span>
            <div className="mt-6">
              <Button className="inline-flex font-semibold px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-gray-950 hover:ring-2 ring-offset-2">
                Read more <TbArrowUpRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
        {/* Team section */}
        <div className="lg:py-20">
          <div className="pt-8 pb-5">
            <h1 className="text-4xl font-bold tracking-wider uppercase text-center">
              Team our
            </h1>
          </div>
          <div className="grid py-8 lg:grid-cols-3 gap-20">
            <motion.div
              initial="offscreen"
              whileInView={'onscreen'}
              variants={titleVariants}
              className="border-2 border-primary rounded-lg"
            >
              <div className="px-7 py-9 text-center bg-gray-100 rounded-lg dark:bg-tertiary -m-0.5 transition-all hover:-translate-x-2.5 hover:-translate-y-2.5">
                <Image
                  src="/images/profile2.jpg"
                  alt=""
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                />
                <h3 className="uppercase text-xl font-semibold py-4">
                  Building serveys
                </h3>
                <p className="px-1 leading-6 text-gray-700 text-sm">
                  Creativity is the ability to generate, create or discover new
                  ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView={'onscreen'}
              variants={titleVariants}
              className="border-2 border-primary"
            >
              <div className="px-7 py-9 text-center bg-gray-100 dark:bg-tertiary -m-0.5 transition-all hover:-translate-x-2.5 hover:-translate-y-2.5">
                <Image
                  src="/images/profile3.jpg"
                  alt=""
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                />
                <h3 className="uppercase text-xl font-semibold py-4">
                  Building serveys
                </h3>
                <p className="px-1 leading-6 text-gray-700 text-sm">
                  Creativity is the ability to generate, create or discover new
                  ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView={'onscreen'}
              variants={titleVariants}
              className="border-2 border-primary"
            >
              <div className="px-7 py-9 text-center bg-gray-100 dark:bg-tertiary -m-0.5 transition-all hover:-translate-x-2.5 hover:-translate-y-2.5">
                <Image
                  src="/images/profile1.jpg"
                  alt=""
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                />
                <h3 className="uppercase text-xl font-semibold py-4">
                  Building serveys
                </h3>
                <p className="px-1 leading-6 text-gray-700 text-sm">
                  Creativity is the ability to generate, create or discover new
                  ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
