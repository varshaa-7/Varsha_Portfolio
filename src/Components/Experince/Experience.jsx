import Heading from "../Heading/Heading";
import ExperienceContainer from "../Container/ExperienceContainer";
import ScrollAnimation from "react-animate-on-scroll";
import Sound from '../../assets/Music/HoverSound.mp3'
import useSound from "use-sound";

// Array of objects for education details
const academicsArr = [
  {
    time: "2018 - 2020",
    degree: "Secondary Education",
    institute: "Subhash Public School"
  },
  {
    time: "2020 - 2022",
    degree: "Higher Secondary Education",
    institute: "Subhash Public School"
  },
  {
    time: "2022 - 2026",
    degree: "Bachelor of Technology(CSE)",
    institute: "Madan Mohan Malaviya University Of Technology, Gorakhpur"
  }
];

// Array of objects for proffessional details
const experienceArr = [
  {
    time: "Jun. 2024– Jul. 2024",
    domain: "Summer Intern",
    company: "Indian Oil Corporation Limited"
  },
  {
    time: "Oct. 2024– Jan. 2025",
    domain: "Full Stack Development Intern",
    company: " Kode Bloom Technologies and Services Pvt. Ltd."
  },
  {
    time: "Jun. 2025– Current",
    domain: "Engineering Intern",
    company: " Wingify Software Pvt. Ltd."
  }
];

const Experience = () => {

  const [play, { stop }] = useSound(Sound);

  return (
    <section className="h-auto md:h-screen py-7 md:py-0 w-screen md:w-4/5 md:float-right flex flex-col justify-evenly">
      <Heading faded="Summary" bold="Summary" theme="text-black" borderColor="border-blue-500"/>
      <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce>
        <div className="flex flex-col md:flex-row justify-center text-custom-dark">
          <ExperienceContainer>
            {
              academicsArr.map((temp, index) => (
                <div key={index} className="flex gap-3 md:gap-5 p-2 md:p-5 group-hover:opacity-20 transition duration-300 hover:!opacity-100 hover:!scale-110" 
                  onMouseEnter={() => play()}
                  onMouseLeave={() => stop()}
                >
                  <span className="material-symbols-outlined text-red-400 text-xl md:text-3xl">
                    school
                  </span>
                  <div>
                    <p className="opacity-50 text-lg md:text-xl uppercase">{temp.time}</p>
                    <p className="text-lg md:text-2xl font-semibold font-sans py-2">{temp.degree}</p>
                    <p className="text-base md:text-xl font-normal opacity-85">{temp.institute}</p>
                  </div>
                </div>
              ))
            }
          </ExperienceContainer>
          <ExperienceContainer>
            {
              experienceArr.map((temp, index) => (
                <div key={index} className="flex gap-3 md:gap-5 p-2 md:p-5 group-hover:opacity-20 transition duration-300 hover:!opacity-100 hover:!scale-110" 
                  onMouseEnter={() => play()}
                  onMouseLeave={() => stop()}
                >
                  <span className="material-symbols-outlined text-orange-500 text-xl md:text-3xl">
                    work
                  </span>
                  <div>
                    <p className="text-lg md:text-xl opacity-50 uppercase">{temp.time}</p>
                    <p className="text-lg md:text-2xl font-semibold font-sans py-2">{temp.domain}</p>
                    <p className="text-base md:text-xl font-normal opacity-85">{temp.company}</p>
                  </div>
                </div>
            ))}
          </ExperienceContainer>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <p className="text-center text-custom-dark text-base md:text-xl font-semibold px-7 md:px-0">Want to connect with me? 
          <span className="cursor-pointer m-2 text-orange-500 hover:underline" onClick={() => {
            window.open("https://www.linkedin.com/in/varsha-awasthi-1a7a31257/", "_blank");
          }}>
          Click here</span> 
        for my LinkedIn profile. ✌️</p>
      </ScrollAnimation>
    </section>
  );
};

export default Experience;