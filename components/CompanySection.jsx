'use client';

import { tagVariants, titleVariants } from '@/utils/animation';
import Bagde from './Bagde';
import { motion } from 'framer-motion';

const CompanySection = () => {
  return (
    <div className="bg-primary dark:bg-tertiary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {/* Bagde 1 */}
          <motion.div
            initial="offscreen"
            whileInView={'onscreen'}
            variants={titleVariants}
            className="mx-auto flex flex-col max-w-xs gap-y-4"
          >
            <dt className="text-white leading-7">
              Transaction every 24h hours
            </dt>
            <dd className="order-first text-3xl tracking-wide font-semibold text-white sm:text-5xl">
              <Bagde endCountNum={22} endCountText="milions" />
            </dd>
          </motion.div>
          {/* Bagde 2 */}
          <motion.div
            initial="offscreen"
            whileInView={'onscreen'}
            variants={tagVariants}
            className="mx-auto flex flex-col max-w-xs gap-y-4"
          >
            <dt className="text-white leading-7">Assets Under Running</dt>
            <dd className="order-first text-3xl tracking-wide font-semibold text-white sm:text-5xl">
              <Bagde endCountNum={102} endCountText="trillions" />
            </dd>
          </motion.div>
          {/* Bagde 3 */}
          <motion.div
            initial="offscreen"
            whileInView={'onscreen'}
            variants={titleVariants}
            className="mx-auto flex flex-col max-w-xs gap-y-4"
          >
            <dt className="text-white leading-7">New Users Annually</dt>
            <dd className="order-first text-3xl tracking-wide font-semibold text-white sm:text-5xl">
              <Bagde endCountNum={25000} endCountText="+" />
            </dd>
          </motion.div>
        </dl>
      </div>
    </div>
  );
};

export default CompanySection;
