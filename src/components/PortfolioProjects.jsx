import React from "react";

export default function PortfolioProjects() {
  const defaultProjects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts and data visualization. Built with React, D3.js, and real-time data streaming.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["React", "D3.js", "WebSocket"]
    },
    {
      title: "Fitness Tracker App",
      description: "Cross-platform mobile app for fitness tracking with social features. Built with React Native and Firebase backend.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "Redux"]
    }
  ];

  const projects = defaultProjects;

  const getTechColor = (tech) => {
    const colorMap = {
      "React": "bg-blue-100 text-blue-800",
      "Node.js": "bg-green-100 text-green-800",
      "MongoDB": "bg-yellow-100 text-yellow-800",
      "D3.js": "bg-purple-100 text-purple-800",
      "WebSocket": "bg-red-100 text-red-800",
      "React Native": "bg-blue-100 text-blue-800",
      "Firebase": "bg-orange-100 text-orange-800",
      "Redux": "bg-green-100 text-green-800"
    };
    return colorMap[tech] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Featured Projects
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`${getTechColor(tech)} px-2 py-1 rounded text-sm`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 