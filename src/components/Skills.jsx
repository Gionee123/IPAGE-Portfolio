import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Drone Training",
      icon: "🚁",
      skills: [
        { name: "RPAS Instructor (DGCA)", percentage: 98 },
        { name: "Ground School & Simulators", percentage: 95 },
        { name: "Practical Flying Sessions", percentage: 92 },
      ],
    },
    {
      title: "Aerospace Expertise",
      icon: "🚀",
      skills: [
        { name: "Flight Dynamics & Stability", percentage: 93 },
        { name: "CFD & Wind Tunnel Testing", percentage: 91 },
        { name: "Curriculum Development", percentage: 90 },
      ],
    },
    {
      title: "Professional Skills",
      icon: "💼",
      skills: [
        { name: "Technical Writing & Research", percentage: 94 },
        { name: "Public Speaking & Presentations", percentage: 89 },
        { name: "Conference & Event Management", percentage: 88 },
      ],
    },
  ];

  const certifications = [
    {
      title: "DGCA RPAS Instructor",
      icon: "🎓",
      description: "Medium & Small Class Certified",
    },
    {
      title: "Published Author",
      icon: "📚",
      description: "'Fundamentals of Propulsion' & 7 Research Papers",
    },
    {
      title: "Conference Organizer",
      icon: "📅",
      description: "ICASAS - 2019, Airworthiness & Safety",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            My{" "}
            <span className="text-red-600 underline decoration-yellow-400">
              Skills
            </span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            {skill.name}
                          </span>
                          <span className="text-sm font-bold text-red-600">
                            {skill.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-red-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-gray-900 py-16 rounded-lg">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Certifications &{" "}
            <span className="text-yellow-400">Achievements</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
