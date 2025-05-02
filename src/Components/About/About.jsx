import React, { useState } from "react";
import Heading from "../Heading/Heading";
import BtnContainer from "../Container/BtnContainer";
import Resume from "../../assets/Varsha_Resume.pdf";
import ScrollAnimation from 'react-animate-on-scroll';
import CountUp from 'react-countup';
import Avatar from "../../assets/Testimonial/Female_avatar.png"

// This array of objects is used for the Experience numbers
// const experienceArr = [
//   // {
//   //   icon: "local_cafe",
//   //   number: "57",
//   //   content: "Cup of coffee"
//   // },
//   {
//     icon: "local_fire_department",
//     number: "25",
//     content: "Projects completed"
//   },
//   {
//     icon: "group",
//     number: "30",
//     content: "Satisfied clients"
//   },
//   {
//     icon: "editor_choice",
//     number: "74",
//     content: "Nominees winner"
//   }
// ];

// This array is for the details part in the About section
const progressArr = [
  {
    domain: "Web development",
    progress: "90%",
    spanColor: "bg-yellow-500",
    width: "w-11/12"
  },
  {
    domain: "DSA",
    progress: "80%",
    spanColor: "bg-red-500",
    width: "w-4/5"
  },
  {
    domain: "Competitive programming",
    progress: "75%",
    spanColor: "bg-blue-500",
    width: "w-9/12"
  }
];

const About = () => (
  <div className="bg-white h-screen w-screen md:w-4/5 float-right flex flex-col justify-evenly">
    <Heading faded="About Me" bold="Know Me More" theme="text-black" borderColor="border-blue-500" />
    <AboutSection />
    {/* <ExperienceSection /> */}
  </div>
);

const AboutSection = () => (
  <ScrollAnimation animateIn="fadeInUp" animateOnce>
    <section className="flex flex-col md:flex-row items-center md:items-start justify-evenly gap-9 md:gap-0">
      <img className="max-h-24 md:max-h-40 w-auto" src={Avatar} alt="icon" />

      {/* Arrow for desktop view */}
      <div className="hidden md:block h-0 w-0 border-t-[13px] border-r-[20px] border-b-[13px] border-solid border-t-transparent border-b-transparent border-l-[#474646] absolute right-[69.35%] mt-11" />
      {/* Arrow for mobile view */}
      <div className="md:hidden h-0 w-0 border-l-[13px] border-r-[13px] border-b-[20px] border-solid border-r-transparent border-l-transparent border-l-[#474646] absolute top-28" />

      <div className="h-auto w-[95%] md:max-w-[60%] rounded-lg flex flex-col md:flex-row items-center justify-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] gap-3 p-5 md:p-9">
        <AboutText />
        <ProgressSection />
      </div>
    </section>
  </ScrollAnimation>
);

const AboutText = () => (
  <div className="flex flex-col items-start w-full md:w-2/4 gap-7">
    <p className="text-sm md:text-base font-medium font-sans opacity-70">I’m Varsha Awasthi, a passionate and tech-driven student dedicated to transforming innovative ideas into reality.</p>
    <div className="hidden md:block">
      <BtnContainer>
        <button type="button" formTarget="_blank" onClick={() => window.open(Resume, '_blank', 'noopener,noreferrer')}>
          Download CV
        </button>
      </BtnContainer>
    </div>
  </div>
);

const ProgressSection = () => (
  <div className="flex w-full md:w-2/4 flex-col gap-3">   
    {
      progressArr.map((temp, index) => (
        <React.Fragment key={index}>
          <div className="flex justify-between font-sans">
            <label className="text-sm md:text-base font-mono font-bold opacity-75">{temp.domain}</label>
            <label className="text-sm md:text-base font-mono font-bold opacity-75">{temp.progress}</label>
          </div>
          <span className={`${temp.spanColor} ${temp.width} h-1 rounded-lg`} />
        </React.Fragment>
      ))
    }
    <div className="w-full flex justify-center md:hidden">
      <BtnContainer>
        <button type="button" formTarget="_blank" onClick={() => window.open(Resume, '_blank', 'noopener,noreferrer')}>
          Download CV
        </button>
      </BtnContainer>
    </div>
  </div>
);

// const ExperienceSection = () => (
//   <ScrollAnimation animateIn="fadeIn" delay={100} animateOnce>
//     <section className="grid grid-flow-row grid-cols-2 md:grid-cols-4 place-items-start md:place-items-center px-5 md:px-16">
//       {
//         experienceArr.map((temp, index) => (
//           <div className="flex gap-4 justify-center" key={index}>
//             <span className="material-symbols-outlined text-2xl md:text-5xl opacity-20">{temp.icon}</span>
//             <div className="block">
//               <p className="text-xl md:text-4xl text-custom-dark font-bold">
//                 <CountUp 
//                   delay={3}
//                   start={0}
//                   duration={3}
//                   end={parseInt(temp.number, 10)}
//                 />
//               </p>
//               <p className="text-xs md:text-base text-custom-dark font-normal mt-1 opacity-85">{temp.content}</p>
//             </div>
//           </div>
//         ))
//       }
//     </section>
//   </ScrollAnimation>
// );

export default About;
