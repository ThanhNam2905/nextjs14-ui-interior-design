import Image from 'next/image';

const projects = [
  {
    id: 1,
    name: 'Drowing room for family time',
    description: 'Bedroom with a clean and comfortable design for your family',
    image: '/images/project3.jpg',
    link: '#',
  },
  {
    id: 2,
    name: 'Kitchen look morden and clean',
    description: 'Kitchen look morden and clean, charming with a morden design',
    image: '/images/project2.jpg',
    link: '#',
  },
  {
    id: 3,
    name: 'Perfect living room for family time',
    description:
      'Drowing room with a clean and comfortable design for your family, charming with a morden design',
    image: '/images/project4.png',
    link: '#',
  },
  {
    id: 4,
    name: 'Perfect living room for family time',
    description:
      'Drowing room with a clean and comfortable design for your family, charming with a morden design',
    image: '/images/project4.png',
    link: '#',
  },
];

const Page = () => {
  return (
    <div>
      <div className="bg-[url(/images/backgroundproject.jpg)] bg-center bg-cover">
        <h1 className="container text-6xl lg:text-[72px] font-semibold text-white tracking-widest py-64 md:py-72">
          Our Projects
        </h1>
      </div>
      <div className="container grid lg:grid-cols-2 gap-10 py-8 my-5 md:my-8 lg:my-12">
        {projects.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg group"
          >
            <Image
              src={item.image}
              alt=""
              width={480}
              height={380}
              className="w-full"
            />
            <div className="absolute bottom-0 right-0 bg-white/60 dark:bg-black/60 flex flex-col items-center justify-end w-96 gap-4 p-10 line-clamp-4 text-xl transition-all duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0">
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="py-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
