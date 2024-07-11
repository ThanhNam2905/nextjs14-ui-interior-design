'use client';

import { TbStarFilled, TbStar } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { btnVariants, desVariants, titleVariants } from '@/utils/animation';

const posts = [
  {
    id: 1,
    title: 'Boots your conversion rate',
    href: '#',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae excepturi inventore voluptas eum? Quidem tempore earum nisi excepturi.',
    date: 'Jully 11, 2024',
    datetime: '2024/7/11',
    category: { title: '4.9', href: '#' },
    author: {
      name: 'Micheal Chris',
      role: 'Co-Founder / CEO',
      href: '#',
      imageURL: '/images/profile1.jpg',
    },
  },
  {
    id: 2,
    title: 'Boots your conversion rate',
    href: '#',
    description:
      'Lorem ipsum dolor sit amet, das asdasd asdasdasdasdas  consectetur adipisicing elit. Repudiandae excepturi inventore voluptas eum? Quidem tempore earum nisi excepturi.',
    date: 'Jully 11, 2024',
    datetime: '2024/7/11',
    category: { title: '4.9', href: '#' },
    author: {
      name: 'Samuel Jowht',
      role: 'Manager Designer',
      href: '#',
      imageURL: '/images/profile2.jpg',
    },
  },
  {
    id: 3,
    title: 'Boots your conversion rate',
    href: '#',
    description:
      'Lorem ipsum dolor sit amet, consectetur sdsadsad asd asdas sadasadipisicing elit. Repudiandae excepturi inventore voluptas eum? Quidem tempore earum nisi excepturi.',
    date: 'Jully 11, 2024',
    datetime: '2024/7/11',
    category: { title: '4.9', href: '#' },
    author: {
      name: 'Mr. John Joe',
      role: 'Senior Designer',
      href: '#',
      imageURL: '/images/profile3.jpg',
    },
  },
];

const ContactSection = () => {
  return (
    <div className="container pt-12 lg:pt-3">
      <div className="mx-auto max-w-7xl py-6 lg:py-8 px-3 lg:px-0">
        <motion.h2
          initial="offscreen"
          whileInView={'onscreen'}
          variants={desVariants}
          className="text-3xl font-bold tracking-wide sm:text-4xl lg:text-5xl capitalize"
        >
          Customer Reviews
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView={'onscreen'}
          variants={btnVariants}
          className="mt-3 text-lg leading-7 text-muted-foreground"
        >
          Learn how to grow your business with our expect advice.
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView={'onscreen'}
          variants={titleVariants}
          className="mx-auto mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:max-w-none lg:mx-0 py-10 sm:py-16 border-t border-b  gap-y-16"
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col max-w-xl items-start justify-between gap-y-4"
            >
              <div className="flex items-center gap-x-3">
                <time datetime={post.datetime}></time>
                <div className="flex gap-x-1.5 text-yellow-500 mr-2">
                  <TbStarFilled size={20} />
                  <TbStarFilled size={20} />
                  <TbStarFilled size={20} />
                  <TbStarFilled size={20} />
                  <TbStar size={20} />
                </div>
                <a
                  href={post.category.href}
                  className="relative z-10 bg-primary rounded-full text-white px-3.5 py-1 font-semibold transition-all duration-300 hover:bg-gray-400 hover:text-black"
                >
                  {post.category.title}
                </a>
              </div>

              <div className="group relative hover:cursor-pointer">
                <h4 className="text-xl font-semibold capitalize mt-1 mb-3 group-hover:text-gray-600">
                  <a href={post.href}>{post.title}</a>
                </h4>
                <p className="text-muted-foreground text-base line-clamp-3 leading-7">
                  {post.description}
                </p>
              </div>
              <div className="mt-3 flex items-center gap-x-4">
                <img
                  src={post.author.imageURL}
                  alt=""
                  className="w-16 h-16 rounded-full border border-primary bg-gray-200 ring-1 ring-offset-2 ring-primary"
                />
                <div>
                  <p className="text-lg mb-1 font-bold">
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {post.author.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
