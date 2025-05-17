import React, { useState } from "react";
import Heading from "../Heading/Heading";
import BlogArtwork_1 from "../../assets/Blog/Blog1.gif";
import BlogArtwork_2 from "../../assets/Blog/Blog2.jpg";
import BlogArtwork_3 from "../../assets/Blog/Blog3.jpg";
import BtnContainer from "../Container/BtnContainer";
import ShowMore from "./ShowMore";
import ScrollAnimation from 'react-animate-on-scroll';

// Array of objects for the blog details
const blogArr = [
  {
    img: BlogArtwork_1,
    title: "Quiz App",
    label: "Project1",
    icon: "globe",
    url: "https://darling-monstera-54d30a.netlify.app/",
    category: "initial"
  },
  {
    img: BlogArtwork_2,
    title: "Gemini Clone",
    label: "Project2",
    icon: "globe",
    url: "https://gemini-flax-kappa.vercel.app/",
    category: "initial"
  },
  {
    img: BlogArtwork_3,
    title: "Employee Duty Roaster",
    label: "Project3",
    icon: "globe",
    url: "https://ioclroaster-varsha-awasthis-projects.vercel.app/",
    category: "initial"
  },
  // Additional part starts here
  {
    img: BlogArtwork_3,
    title: "Password Manager",
    label: "Project4",
    icon: "globe",
    url: "https://password-manager-one-lyart.vercel.app/",
    category: "additional"
  },
  {
    img: BlogArtwork_1,
    title: "TicTacToe App",
    label: "Project5",
    icon: "android",
    url: "https://github.com/varshaa-7/tictactoeapp",
    category: "additional"
  },
  {
    img: BlogArtwork_2,
    title: "KBC",
    label: "Project6",
    icon: "code",
    url: "https://github.com/varshaa-7/kbc",
    category: "additional"
  },
  {
    img: BlogArtwork_1,
    title: "Youtube Data Scraping",
    label: "Project7",
    icon: "code",
    url: "https://github.com/varshaa-7/Youtube_data_scraping",
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
    <section className="w-screen md:w-[80%] min-h-[130vh] py-16 bg-white md:float-right flex flex-col justify-around items-stretch overflow-hidden">

      <Heading
        faded="Projects"
        bold="What I Create"
        theme="text-black"
        borderColor="border-blue-500"
      />
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <div className="flex flex-col md:gap-5">
          <ul className="flex flex-col md:flex-row justify-evenly items-center md:items-stretch flex-wrap">
            {renderBlogs("initial")}
          </ul>
          <ul className={`${showMore ? "flex justify-evenly flex-wrap relative" : "hidden absolute"}`}>
            {renderBlogs("additional")}
          </ul>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <div className="flex justify-center mt-7 md:mt-0">
          <BtnContainer onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </BtnContainer>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Blog;