import CountUp from 'react-countup';

const Bagde = ({ containerStyles, endCountNum, endCountText }) => {
  return (
    <div className={`${containerStyles}`}>
      <div className="flex items-center justify-center gap-x-2">
        <div className="text-4xl leading-none font-bold">
          <CountUp end={endCountNum} endCountNum delay={1} duration={4} />
          <span className="ml-2">{endCountText}</span>
        </div>
      </div>
    </div>
  );
};

export default Bagde;
