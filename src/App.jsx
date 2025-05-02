import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experince/Experience";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import { Navigate } from "react-router-dom";

function App() {

  // This array of objects is used for the Navigation Panel
  const linksArr = [
    { 
      link: 'Home',
      icon: 'home',
      url: '/Home'
    },
    {
      link: 'About',
      icon: 'support_agent',
      url: '/About'
    },
    {
      link: 'Skills',
      icon: 'work',
      url: '/Services'
    },
    {
      link: 'Summary',
      icon: 'school',
      url: '/Experience'
    },
    {
      link: 'Experience',
      icon: 'people',
      url: '/Testimonial'
    },
    {
      link: 'Projects',
      icon: 'edit_note',
      url: '/Blogs'
    },
    {
      link: 'Contact',
      icon: 'forum',
      url: '/Contact'
    }
  ];

  // This array of objects is used for the Social Madia links
  const socialLinks = [
   
    {
      url: "https://www.instagram.com/i.__.am.__.kiran/?hl=en",
      network: "instagram"
    },
    {
      url: "https://www.linkedin.com/in/varsha-awasthi-1a7a31257/",
      network: "linkedin"
    },
    {
      url: "https://github.com/varshaa-7",
      network: "github"
    }
  ];

  return  (
    <div className="overflow-x-hidden">
      <Router>
        <Sidebar links={linksArr} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner icons={socialLinks} />
                <About />
                <Services />
                <Experience />
                <Testimonial />
                <Blog />
                <Contact />
              </>
            }
          />
          <Route 
            path="/Home" 
            element={
              <Navigate to="/" />
            } 
          />
          <Route 
            path="/About"
            element={
              <About />
            }
          />
          <Route 
            path="/Services"
            element={
              <Services />
            }
          />
          <Route 
            path="/Experience"
            element={
              <Experience />
            }
          />
          <Route 
            path="/Testimonial"
            element={
              <Testimonial />
            }
          />
          <Route 
            path="/Blogs"
            element={
              <Blog />
            }
          />
          <Route 
            path="/Contact"
            element={
              <Contact />
            }
          />
          <Route 
            path="*" 
            element={
              <h1 className="text-center text-black">404 - Page Not Found</h1>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;