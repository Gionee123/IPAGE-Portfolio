import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../common/Header.jsx";
import AboutMe from "../components/AboutMe.jsx";
import PortfolioProjects from "../components/PortfolioProjects.jsx";
import Contact from "../components/Contact.jsx";
import Skills from "../components/Skills.jsx";
import Testimonials from "../components/Testimonials.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Blog from "../components/Blog.jsx";
import Footer from "../components/Footer.jsx";

export default function PortfolioTemplate() {
  const { id } = useParams();
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load portfolio data from localStorage
    const portfolios = JSON.parse(localStorage.getItem("portfolios") || "[]");
    const portfolio = portfolios.find((p) => p.id === id);

    if (portfolio) {
      setPortfolioData(portfolio);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full border-b-2 border-blue-600 animate-spin"></div>
          <p className="text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="mb-4 text-6xl">😕</div>
          <h1 className="mb-2 text-2xl font-bold text-gray-800">
            Portfolio Not Found
          </h1>
          <p className="text-gray-600">
            The portfolio you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  // Create userData object for components
  const userData = {
    name: portfolioData.name,
    title: portfolioData.title,
    tagline: portfolioData.tagline,
    profileImage: portfolioData.profileImage,
    bio: portfolioData.bio,
    email: portfolioData.email,
    phone: portfolioData.phone,
    location: portfolioData.location,
    skills: portfolioData.skills,
    projects: portfolioData.projects,
    testimonials: portfolioData.testimonials,
    blog: portfolioData.blog,
    contactMessage: portfolioData.contactMessage,
    contactEmail: portfolioData.contactEmail,
    contactPhone: portfolioData.contactPhone,
    socials: portfolioData.socials,
  };

  // Render different templates based on templateId
  if (portfolioData.templateId === "minimal") {
    return (
      <div className="min-h-screen bg-white">
        <Header />

        {/* Minimal Template - Clean and Simple */}
        <section id="home" className="pt-20 pb-16 bg-white">
          <div className="container px-6 mx-auto text-center">
            <div className="mx-auto max-w-4xl">
              {userData.profileImage && (
                <div className="overflow-hidden mx-auto mb-8 w-32 h-32 rounded-full border-4 border-gray-200">
                  <img
                    src={userData.profileImage}
                    alt={userData.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <h1 className="mb-4 text-5xl font-bold text-gray-800">
                {userData.name}
              </h1>
              <h2 className="mb-4 text-2xl font-semibold text-gray-600">
                {userData.title}
              </h2>
              {userData.tagline && (
                <p className="mx-auto max-w-2xl text-xl text-gray-500">
                  {userData.tagline}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container px-6 mx-auto">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
                About
              </h2>
              <div className="mx-auto text-gray-600 prose prose-lg">
                <p>{userData.bio}</p>
              </div>
              <div className="grid gap-8 mt-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-800">
                    Contact
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    {userData.email && <p>📧 {userData.email}</p>}
                    {userData.phone && <p>📞 {userData.phone}</p>}
                    {userData.location && <p>📍 {userData.location}</p>}
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-800">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {userData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm text-gray-700 bg-gray-200 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="portfolio" className="py-16 bg-white">
          <div className="container px-6 mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
              Projects
            </h2>
            <div className="grid gap-8 mx-auto max-w-6xl md:grid-cols-2 lg:grid-cols-3">
              {userData.projects.map((project, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover mb-4 w-full h-48 rounded-lg"
                    />
                  )}
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{project.description}</p>
                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs text-gray-700 bg-gray-200 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container px-6 mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-8 text-3xl font-bold text-gray-800">
                Get In Touch
              </h2>
              {userData.contactMessage && (
                <p className="mb-8 text-xl text-gray-600">
                  {userData.contactMessage}
                </p>
              )}
              <div className="space-y-4">
                {userData.contactEmail && (
                  <p className="text-lg text-gray-700">
                    📧{" "}
                    <a
                      href={`mailto:${userData.contactEmail}`}
                      className="text-blue-600 hover:underline"
                    >
                      {userData.contactEmail}
                    </a>
                  </p>
                )}
                {userData.contactPhone && (
                  <p className="text-lg text-gray-700">
                    📞 {userData.contactPhone}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Modern Template (default)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <Header />

      {/* Hero Section */}
      <HeroSection userData={userData} />

      {/* About Section */}
      <AboutMe userData={userData} />

      {/* Services Section */}

      {/* Skills Section */}
      <Skills userData={userData} />

      {/* Portfolio Section */}
      <PortfolioProjects userData={userData} />

      {/* Testimonials Section */}
      <Testimonials userData={userData} />

      {/* Blog Section */}
      {userData.blog && userData.blog.title && <Blog userData={userData} />}

      {/* Contact Section */}
      <Contact userData={userData} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
