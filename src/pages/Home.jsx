import React from "react";
import Header from "../common/Header.jsx";
import AboutMe from "../components/AboutMe.jsx";
import PortfolioProjects from "../components/PortfolioProjects.jsx";
import Contact from "../components/Contact.jsx";
import Skills from "../components/Skills.jsx";
import Testimonials from "../components/Testimonials.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Tabing from "../components/Tabing.jsx";
import Myservices from "../components/Myservices.jsx";
import Trainer from "../components/Trainer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutMe />

      {/* Services Section */}
      <Myservices />
      <Trainer />

      {/* Skills Section */}
      <Skills />

      {/* Portfolio Section */}
      <PortfolioProjects />

      {/* Testimonials Section */}
      <Testimonials />
      <Tabing />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
