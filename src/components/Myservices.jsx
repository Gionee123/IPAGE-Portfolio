import React from "react";

export default function Myservices() {
  return (
    <div className="px-4 py-16 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">
            <span className="text-black">My</span>
            <span className="text-red-600"> Services</span>
          </h1>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-700">
            Specialized drone and aerospace training programs tailored for
            individuals, institutions, and researchers – led by a DGCA-Certified
            RPAS Instructor with over 11 years of experience in aviation
            education.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Drone Pilot Training */}
          <div className="p-6 bg-yellow-400 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="flex items-start mb-4">
              <div className="flex justify-center items-center mr-4 w-12 h-12 bg-white rounded-lg shadow-sm">
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-black">
              Drone Pilot Training
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-800">
              Comprehensive RPAS training programs for aspiring drone pilots at
              India Drone Academy.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-red-600">•</span>
                <span className="text-sm text-black">
                  Ground School Modules
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-red-600">•</span>
                <span className="text-sm text-black">
                  Simulator-based Learning
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-red-600">•</span>
                <span className="text-sm text-black">
                  Remotely Piloted Flight Sessions
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-red-600">•</span>
                <span className="text-sm text-black">
                  DGCA Certification Support
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2: Aerospace Education */}
          <div className="p-6 bg-yellow-400 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="flex items-start mb-4">
              <div className="flex justify-center items-center mr-4 w-12 h-12 bg-white rounded-lg shadow-sm">
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-black">
              Aerospace Education
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-800">
              Aviation-focused instruction in core aerospace disciplines from
              fundamentals to applied projects.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-red-600">•</span>
                <span className="text-sm text-black">Flight Dynamics</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-red-600">•</span>
                <span className="text-sm text-black">Aircraft Performance</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-red-600">•</span>
                <span className="text-sm text-black">Stability & Control</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-red-600">•</span>
                <span className="text-sm text-black">UAV Design Guidance</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Research & Technical Writing */}
          <div className="p-6 bg-yellow-400 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="flex items-start mb-4">
              <div className="flex justify-center items-center mr-4 w-12 h-12 bg-white rounded-lg shadow-sm">
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-black">
              Research & Technical Writing
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-800">
              Authoring support, curriculum building and academic research
              consulting in aerospace and drones.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-red-600">•</span>
                <span className="text-sm text-black">Published Papers</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-red-600">•</span>
                <span className="text-sm text-black">
                  Book: Fundamentals of Propulsion
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-red-600">•</span>
                <span className="text-sm text-black">Conference Papers</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-red-600">•</span>
                <span className="text-sm text-black">
                  Academic Review Guidance
                </span>
              </li>
            </ul>
          </div>

          {/* Card 4: Workshops & Event Management */}
          <div className="p-6 bg-yellow-400 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="flex items-start mb-4">
              <div className="flex justify-center items-center mr-4 w-12 h-12 bg-white rounded-lg shadow-sm">
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-black">
              Workshops & Event Management
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-800">
              End-to-end support for aerospace & UAV educational events,
              including ICASAS-style conferences.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-red-600">•</span>
                <span className="text-sm text-black">
                  Technical Presentations
                </span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-red-600">•</span>
                <span className="text-sm text-black">Faculty Training</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-red-600">•</span>
                <span className="text-sm text-black">Event Planning</span>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-red-600">•</span>
                <span className="text-sm text-black">
                  Professional Speaking Engagements
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
