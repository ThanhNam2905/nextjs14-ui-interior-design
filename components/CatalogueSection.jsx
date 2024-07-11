import Image from 'next/image';
import { TbArrowNarrowRight } from 'react-icons/tb';

export default function CatalogueSection() {
  const items = [
    {
      id: '01',
      category: 'BEDROOM SETUP',
      title: 'Cossy bedroom setup',
      image: '/images/badroom.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor velit possimus, quidem ad consequatur consectetur. ',
    },
    {
      id: '02',
      category: 'KITCHEN SETUP',
      title: 'Neat & clean Kitchen',
      image: '/images/kitchen1.jpg',
      description:
        'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
    {
      id: '03',
      category: 'DROWING SETUP',
      title: 'Family drowing setup',
      image: '/images/drowing.jpg',
      description:
        'Dicta sunt explicabo. Nemo enim ipsam voluptate sit aspernaturaut odit aut fugit, sed quia consequuntur.',
    },
    {
      id: '04',
      category: 'LIVING SETUP',
      title: 'Living designs',
      image: '/images/living.jpg',
      description:
        'Dicta sunt explicabo. Nemo enim ipsam voluptatem quia volupt quia. Dicta sunt explicabo. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, quia. Dicta sunt explicabo. ',
    },
  ];
  return (
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-x divide-gray-300">
      {items.map((item) => {
        return (
          <div key={item.id} className="relative overflow-hidden group">
            <div>
              <Image
                src={item.image}
                alt={item.title}
                width={380}
                height={100}
                className="w-full h-full"
              />
            </div>
            <div className="absolute top-0 px-8 py-9 bg-white text-black bg-opacity-50 rounded-lg shadow-lg backdrop-blur m-10">
              <div className="flex justify-between pb-4">
                <p className="text-sm text-muted-foreground">{item.category}</p>
                <span className="text-sm border border-black rounded-full py-0.5 px-1">
                  {item.id}
                </span>
              </div>
              <a href="#" className="font-semibold text-xl block text-primary">
                {item.title}
              </a>
              <p className="my-4 text-black line-clamp-5 h-[120px] leading-6">
                {item.description}
              </p>
              <a href="#" className="inline-flex items-center font-medium">
                See Details <TbArrowNarrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
            <div className="inset-0 bg-tertiary flex-col items-center justify-between md:flex md:absolute  pt-10 pb-12 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden">
              <TbArrowNarrowRight className="w-7 h-7 rotate-90" />
              <div className="flex flex-col items-center gap-24">
                <p className="tracking-wider font-semibold -rotate-90">
                  {item.category}
                </p>
                <p>{item.id}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
