import React, { useState } from "react";
import Heading from "../Heading/Heading";
import BlogArtwork_1 from "../../assets/Blog/Blog1.gif";
import BlogArtwork_2 from "../../assets/Blog/Blog2.jpg";
import BlogArtwork_3 from "../../assets/Blog/Blog3.jpg";
import Aicus from "../../assets/Blog/Aicus.png";
import Quiz from "../../assets/Blog/Quiz.png";
import Roster from "../../assets/Blog/Roaster.png";
import Passo from "../../assets/Blog/Passo.png";
import Gemini from "../../assets/Blog/Gemini.png"
import NoCode from "../../assets/Blog/NoCode.png";
import SprintFlow from "../../assets/Blog/SprintFlow.png";
import BtnContainer from "../Container/BtnContainer";
import ShowMore from "./ShowMore";
import ScrollAnimation from 'react-animate-on-scroll';

// Array of objects for the blog details
const blogArr = [
  {
    img: Quiz,
    title: "Quiz App",
    label: "Project1",
    icon: "globe",
    url: "https://darling-monstera-54d30a.netlify.app/",
    category: "initial"
  },
  {
    img: Aicus,
    title: "AI Customer Care",
    label: "Project2",
    icon: "globe",
    url: "https://aicustomercare.netlify.app/",
    category: "initial"
  },
  
  {
    img: Roster,
    title: "Employee Duty Roaster",
    label: "Project3",
    icon: "globe",
    url: "https://ioclroaster-varsha-awasthis-projects.vercel.app/",
    category: "initial"
  },
  // Additional part starts here
  {
    img: Passo,
    title: "Password Manager",
    label: "Project4",
    icon: "globe",
    url: "https://password-manager-one-lyart.vercel.app/",
    category: "initial"
  },
  {
    img: Gemini,
    title: "Gemini Clone",
    label: "Project5",
    icon: "globe",
    url: "https://gemini-flax-kappa.vercel.app/",
    category: "additional"
  },
  
  {
    img: BlogArtwork_1,
    title: "TicTacToe App",
    label: "Project6",
    icon: "android",
    url: "https://github.com/varshaa-7/tictactoeapp",
    category: "additional"
  },
  {
    img: BlogArtwork_2,
    title: "KBC",
    label: "Project7",
    icon: "code",
    url: "https://github.com/varshaa-7/kbc",
    category: "additional"
  },
  {
    img: BlogArtwork_3,
    title: "Youtube Data Scraping",
    label: "Project8",
    icon: "code",
    url: "https://github.com/varshaa-7/Youtube_data_scraping",
    category: "additional"
  },
  {
    img: NoCode,
    title: "No Code Workflow",
    label: "Project2",
    icon: "globe",
    url: "https://no-code-intelligent-workflow-yv2t.vercel.app/",
    category: "additional"
  },
  {
    img: SprintFlow,
    title: "SpritFlow",
    label: "Project10",
    icon: "globe",
    url: "https://sprintflow-1.onrender.com/",
    category: "additional"
  },
  {
    img: BlogArtwork_1,
    title: "Signal AI",
    label: "Project11",
    icon: "settings_input_component",
    url: "https://github.com/varshaa-7/Signal_AI",
    category: "additional"
  },
  {
    img: BlogArtwork_2,
    title: "Video-Streaming",
    label: "Project12",
    icon: "code",
    url: "https://github.com/varshaa-7/Video-Streaming",
    category: "additional"
  },
  {
    img: BlogArtwork_3,
    title: "Webhook",
    label: "Project13",
    icon: "settings_input_component",
    url: "https://github.com/varshaa-7/webhook-repo",
    category: "additional"
  },
];

function Blog() {
  const [showMore, setShowMore] = useState(false);

  const renderBlogs = (category) =>
    blogArr
      .filter((temp) => temp.category === category)
      .map((temp, index) => (
        <ShowMore
          key={index}
          img={temp.img}
          title={temp.title}
          label={temp.label}
          icon={temp.icon}
          url={temp.url}
        />
      ));

  return (
    <section className="w-full md:w-[85%] md:ml-[15%] min-h-[120vh] py-10 bg-white flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <Heading
          faded="Projects"
          bold="What I Create"
          theme="text-black"
          borderColor="border-blue-500"
        />
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <div className="mt-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
              {renderBlogs("initial")}
            </ul>
            <div
              className={`transition-all duration-300 mt-3 ${
                showMore ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"
              }`}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
                {renderBlogs("additional")}
              </ul>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <div className="flex justify-center mt-6">
            <BtnContainer onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "Show More"}
            </BtnContainer>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default Blog;