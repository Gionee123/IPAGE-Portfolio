import React from "react";
import Header from "../common/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Skills from "../components/Skills.jsx";
import Myservices from "../components/Myservices.jsx";
import PortfolioProjects from "../components/PortfolioProjects.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Trainer from "../components/Trainer.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../common/Footer.jsx";
import ApiTest from "../components/ApiTest.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Myservices />
      <PortfolioProjects />
      <Testimonials />
      <Trainer />
      <ApiTest />
      <Contact />
      <Footer />
    </div>
  );
}
