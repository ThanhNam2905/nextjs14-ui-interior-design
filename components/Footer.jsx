'use client';

import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { btnVariants, desVariants, titleVariants } from '@/utils/animation';

export const Footer = () => {
  return (
    <div className="bg-tertiary">
      <div className="mx-auto container py-14 lg:grid lg:grid-cols-2 gap-x-5">
        <div className="grid lg:grid-cols-3 gap-x-4">
          <motion.div
            initial="offscreen"
            whileInView={'onscreen'}
            variants={btnVariants}
          >
            <h4 className="mb-4 font-bold uppercase text-xl tracking-wider">
              Company
            </h4>
            <div className="flex flex-col gap-y-3">
              <Link href="/">
                <span className="footer__link-item">About us</span>
              </Link>
              <Link href="/">
                <span className="footer__link-item">Press</span>
              </Link>
              <Link href="/">
                <span className="footer__link-item">Careers</span>
              </Link>
              <Link href="/">
                <span className="footer__link-item">Contact us</span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={'onscreen'}
            variants={btnVariants}
            className="mt-4 lg:mt-0"
          >
            <h4 className="mb-4 font-bold uppercase text-xl tracking-wider">
              Development
            </h4>
            <div className="flex flex-col gap-y-3">
              <Link href="/">
                <span className="footer__link-item">Documentation</span>
              </Link>
              <Link href="/">
                <span className="footer__link-item">Reference</span>
              </Link>
              <Link href="/">
                <span className="footer__link-item">Changelog</span>
              </Link>
              <Link href="/">
                <span className="footer__link-item">Status</span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={'onscreen'}
            variants={btnVariants}
            className="mt-4 lg:mt-0"
          >
            <h4 className="mb-4 font-bold uppercase text-xl tracking-wider">
              Follow socials
            </h4>
            <div className="flex flex-col gap-y-3">
              <Link href="/">
                <span className="footer__link-item">Instagram</span>
              </Link>
              <Link href="/">
                <span className="footer__link-item">Facebook</span>
              </Link>
              <Link href="/">
                <span className="footer__link-item">Linkedin</span>
              </Link>
              <Link href="/">
                <span className="footer__link-item">Twitter</span>
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView={'onscreen'}
          variants={desVariants}
          className="pl-0 lg:pl-12 mt-4 lg:mt-0"
        >
          <h4 className="mb-4 font-bold uppercase text-xl tracking-wider">
            newsletter
          </h4>
          <div className="relative lg:max-w-lg">
            <Input
              type="mail"
              id="subscribe"
              placeholder="Email Address Your"
            />
            <Button className="absolute right-2 top-[6.5px] h-11 font-normal hover:bg-black transition-all duration-300 ease-linear">
              Subscribe
            </Button>
            <p className="pt-4 text-muted-foreground">
              By subscribing to our newsletter, you agree to receive emails from
              us. Your personal data will be stored and processed in accordance
              with our Privacy Policy and you can unsubscirbe at any time.
            </p>
          </div>
        </motion.div>
      </div>
      {/* Copy right */}
      <motion.div
        initial="offscreen"
        whileInView={'onscreen'}
        variants={titleVariants}
        className="py-10 bg-black dark:bg-primary"
      >
        <div className="text-center text-white text-lg">
          <p className="capitalize pb-5 font-light">
            &copy; copyright Jully 2024. All rights reserved.
          </p>
          <div className="flex gap-x-4 text-base items-center divide-white divide-x-2 justify-center font-light">
            <Link href="#" className="hover:underline hover:underline-offset-4">
              Privacy
            </Link>
            <Link
              href="#"
              className="pl-4 hover:underline hover:underline-offset-4"
            >
              Terms
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
