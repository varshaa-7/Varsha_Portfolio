import ScrollAnimation from 'react-animate-on-scroll';

const Heading = ( {faded, bold, theme, borderColor} ) => {
  return (
    <div className="flex flex-col justify-items-start items-center md:mt-7">
      <ScrollAnimation animateIn="bounceInLeft" animateOnce>
        <p className="text-5xl md:text-8xl font-extrabold text-gray-300 opacity-40 uppercase">{faded}</p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInRight" animateOnce>
        <div className="flex flex-col justify-center items-center -translate-y-6 md:-translate-y-12">
          <pre className={`${theme} text-xl md:text-4xl absolute font-bold font-sans`}>{bold}</pre>
          <span className={`w-24 md:w-28 border-b-2 md:border-b-4 ${borderColor} absolute mt-10 md:mt-14`}></span>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Heading;