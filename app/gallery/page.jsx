const Page = () => {
  return (
    <div className="container grid grid-cols-2 md:grid-cols-4 gap-5">
      <div className="flex flex-col gap-6">
        <div>
          <img
            src="/images/gallery.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg hover:scale-95 transition-all duration-200 ease-linear cursor-pointer"
          />
        </div>
        <div>
          <img
            src="/images/gallery1.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg hover:scale-95 transition-all duration-200 ease-linear cursor-pointer"
          />
        </div>
        <div>
          <img
            src="/images/gallery2.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg hover:scale-95 transition-all duration-200 ease-linear cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <img
            src="/images/gallery3.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg cursor-pointer transition-all hover:scale-95 duration-200 ease-linear"
          />
        </div>
        <div>
          <img
            src="/images/gallery4.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg cursor-pointer transition-all hover:scale-95 duration-200 ease-linear"
          />
        </div>
        <div>
          <img
            src="/images/gallery6.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg cursor-pointer transition-all hover:scale-95 duration-200 ease-linear"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <img
            src="/images/gallery7.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg cursor-pointer transition-all hover:scale-95 duration-200 ease-linear"
          />
        </div>
        <div>
          <img
            src="/images/gallery8.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg cursor-pointer transition-all hover:scale-95 duration-200 ease-linear"
          />
        </div>
        <div>
          <img
            src="/images/gallery9.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg cursor-pointer transition-all hover:scale-95 duration-200 ease-linear"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <img
            src="/images/gallery10.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg cursor-pointer transition-all hover:scale-95 duration-200 ease-linear"
          />
        </div>
        <div>
          <img
            src="/images/gallery11.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg cursor-pointer transition-all hover:scale-95 duration-200 ease-linear"
          />
        </div>
        <div>
          <img
            src="/images/gallery12.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg cursor-pointer transition-all hover:scale-95 duration-200 ease-linear"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
