'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { btnVariants, desVariants } from '@/utils/animation';

const AboutSection = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto]">
      <div className="grid lg:grid-cols-2 gap-x-2 place-items-center">
        <motion.div
          initial="offscreen"
          whileInView={'onscreen'}
          variants={btnVariants}
        >
          <Image
            src="/images/aboutfront.png"
            width={900}
            height={500}
            alt="About Image"
            className="max-md:hidden"
          />
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView={'onscreen'}
          variants={desVariants}
        >
          <h2 className="px-10 py-4 text-3xl font-bold leading-tight lg:text-5xl">
            We are awards Winning Company
          </h2>
          <div className="px-10 tracking-wider uppercase text-primary mt-2.5">
            World Award
          </div>
          <p className="px-10 pb-4 mt-4 text-muted-foreground">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas.
          </p>
          <p className="px-10 pb-4 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            sit harum dicta minima praesentium voluptatem, earum id sequi hic
            possimus impedit ullam distinctio. Veniam ut asperiores sequi cum
            nisi dolor totam recusandae?
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
