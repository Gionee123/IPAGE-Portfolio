import React from "react";

export default function Trainer() {
  return (
    <div className="px-4 py-16 bg-yellow-400">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="mb-2 text-4xl font-bold text-black">
                Meet Our Professionals
              </h1>
              <p className="mb-2 text-lg text-gray-700">
                Meet the experts shaping the future of drone tech
              </p>
              <div className="w-16 h-1 bg-black"></div>
            </div>
            <button className="px-6 py-3 font-medium text-white bg-black rounded-lg transition-colors duration-300 hover:bg-gray-800">
              List your Profile
            </button>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col gap-4 items-center md:flex-row">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search professionals..."
                  className="px-4 py-3 w-full placeholder-gray-600 bg-yellow-100 rounded-lg border-none outline-none focus:ring-2 focus:ring-black"
                />
                <svg
                  className="absolute right-3 top-1/2 w-5 h-5 text-gray-500 transform -translate-y-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="relative">
                <select className="px-4 py-3 pr-10 bg-yellow-100 rounded-lg border-none appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-black">
                  <option>All Professions</option>
                  <option>Flight Instructor</option>
                  <option>Software Engineer</option>
                  <option>AI Specialist</option>
                  <option>Drone Pilot</option>
                </select>
                <svg
                  className="absolute right-3 top-1/2 w-4 h-4 text-gray-600 transform -translate-y-1/2 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <div className="relative">
                <select className="px-4 py-3 pr-10 bg-yellow-100 rounded-lg border-none appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-black">
                  <option>All Locations</option>
                  <option>Miami, FL</option>
                  <option>Denver, CO</option>
                  <option>Seattle, WA</option>
                  <option>San Francisco, CA</option>
                </select>
                <svg
                  className="absolute right-3 top-1/2 w-4 h-4 text-gray-600 transform -translate-y-1/2 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <div className="relative">
                <select className="px-4 py-3 pr-10 bg-yellow-100 rounded-lg border-none appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-black">
                  <option>Sort by Name</option>
                  <option>Sort by Rating</option>
                  <option>Sort by Experience</option>
                  <option>Sort by Projects</option>
                </select>
                <svg
                  className="absolute right-3 top-1/2 w-4 h-4 text-gray-600 transform -translate-y-1/2 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Trainer 1: Emma Foster */}
          <div className="p-6 bg-yellow-100 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
            {/* Profile Image */}
            <div className="flex justify-center mb-4">
              <div className="overflow-hidden w-20 h-20 bg-gray-200 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
                  alt="Emma Foster"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Name and Age */}
            <div className="mb-3 text-center">
              <h3 className="text-xl font-bold text-gray-800">Emma Foster</h3>
              <p className="text-sm text-gray-600">Age: 26</p>
            </div>

            {/* Profession Tag */}
            <div className="flex justify-center mb-3">
              <span className="px-3 py-1 text-sm font-medium text-white bg-black rounded-full">
                Flight Instructor
              </span>
            </div>

            {/* Location */}
            <div className="flex justify-center items-center mb-3 text-gray-600">
              <svg
                className="mr-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm">Miami, FL</span>
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-3">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <defs>
                      <linearGradient id="half-star-1">
                        <stop offset="50%" stopColor="#fbbf24" />
                        <stop offset="50%" stopColor="#e5e7eb" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#half-star-1)"
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                    />
                  </svg>
                </div>
                <span className="ml-1 text-sm font-medium text-gray-700">
                  4.8
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mb-4 text-sm leading-relaxed text-center text-gray-600">
              Certified flight instructor providing comprehensive drone pilot
              training and safety protocols.
            </p>

            {/* Metrics */}
            <div className="flex justify-between mb-4">
              <div className="flex-1 px-3 py-2 mr-2 text-center bg-yellow-400 rounded-lg">
                <p className="text-xs font-medium text-gray-800">4 years</p>
                <p className="text-xs text-gray-700">Experience</p>
              </div>
              <div className="flex-1 px-3 py-2 ml-2 text-center bg-yellow-400 rounded-lg">
                <p className="text-xs font-medium text-gray-800">95</p>
                <p className="text-xs text-gray-700">Projects</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-yellow-300 rounded">
                  Pilot Training
                </span>
                <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-yellow-300 rounded">
                  Safety Protocols
                </span>
                <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-yellow-300 rounded">
                  +1
                </span>
              </div>
            </div>

            {/* Contact Button */}
            <button className="flex justify-center items-center px-4 py-2 w-full text-white bg-black rounded-lg transition-colors duration-300 hover:bg-gray-800">
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact
            </button>
          </div>

          {/* Trainer 2: Jennifer Park */}
          <div className="p-6 bg-yellow-100 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
            {/* Profile Image */}
            <div className="flex justify-center mb-4">
              <div className="overflow-hidden w-20 h-20 bg-gray-200 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
                  alt="Jennifer Park"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Name and Age */}
            <div className="mb-3 text-center">
              <h3 className="text-xl font-bold text-gray-800">Jennifer Park</h3>
              <p className="text-sm text-gray-600">Age: 28</p>
            </div>

            {/* Profession Tag */}
            <div className="flex justify-center mb-3">
              <span className="px-3 py-1 text-sm font-medium text-white bg-black rounded-full">
                Software Engineer
              </span>
            </div>

            {/* Location */}
            <div className="flex justify-center items-center mb-3 text-gray-600">
              <svg
                className="mr-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm">Denver, CO</span>
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-3">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <defs>
                      <linearGradient id="half-star-2">
                        <stop offset="60%" stopColor="#fbbf24" />
                        <stop offset="60%" stopColor="#e5e7eb" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#half-star-2)"
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                    />
                  </svg>
                </div>
                <span className="ml-1 text-sm font-medium text-gray-700">
                  4.6
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mb-4 text-sm leading-relaxed text-center text-gray-600">
              Full-stack developer creating innovative drone control and
              management systems.
            </p>

            {/* Metrics */}
            <div className="flex justify-between mb-4">
              <div className="flex-1 px-3 py-2 mr-2 text-center bg-yellow-400 rounded-lg">
                <p className="text-xs font-medium text-gray-800">5 years</p>
                <p className="text-xs text-gray-700">Experience</p>
              </div>
              <div className="flex-1 px-3 py-2 ml-2 text-center bg-yellow-400 rounded-lg">
                <p className="text-xs font-medium text-gray-800">120</p>
                <p className="text-xs text-gray-700">Projects</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-yellow-300 rounded">
                  Web Development
                </span>
                <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-yellow-300 rounded">
                  Mobile Apps
                </span>
                <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-yellow-300 rounded">
                  +1
                </span>
              </div>
            </div>

            {/* Contact Button */}
            <button className="flex justify-center items-center px-4 py-2 w-full text-white bg-black rounded-lg transition-colors duration-300 hover:bg-gray-800">
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact
            </button>
          </div>

          {/* Trainer 3: Kevin Brown */}
          <div className="p-6 bg-yellow-100 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
            {/* Profile Image */}
            <div className="flex justify-center mb-4">
              <div className="overflow-hidden w-20 h-20 bg-gray-200 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                  alt="Kevin Brown"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Name and Age */}
            <div className="mb-3 text-center">
              <h3 className="text-xl font-bold text-gray-800">Kevin Brown</h3>
              <p className="text-sm text-gray-600">Age: 34</p>
            </div>

            {/* Profession Tag */}
            <div className="flex justify-center mb-3">
              <span className="px-3 py-1 text-sm font-medium text-white bg-black rounded-full">
                Software Engineer
              </span>
            </div>

            {/* Location */}
            <div className="flex justify-center items-center mb-3 text-gray-600">
              <svg
                className="mr-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm">Seattle, WA</span>
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-3">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <defs>
                      <linearGradient id="half-star-3">
                        <stop offset="70%" stopColor="#fbbf24" />
                        <stop offset="70%" stopColor="#e5e7eb" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#half-star-3)"
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                    />
                  </svg>
                </div>
                <span className="ml-1 text-sm font-medium text-gray-700">
                  4.7
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mb-4 text-sm leading-relaxed text-center text-gray-600">
              Backend engineer building scalable drone fleet management and
              control systems.
            </p>

            {/* Metrics */}
            <div className="flex justify-between mb-4">
              <div className="flex-1 px-3 py-2 mr-2 text-center bg-yellow-400 rounded-lg">
                <p className="text-xs font-medium text-gray-800">8 years</p>
                <p className="text-xs text-gray-700">Experience</p>
              </div>
              <div className="flex-1 px-3 py-2 ml-2 text-center bg-yellow-400 rounded-lg">
                <p className="text-xs font-medium text-gray-800">160</p>
                <p className="text-xs text-gray-700">Projects</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-yellow-300 rounded">
                  Backend Development
                </span>
                <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-yellow-300 rounded">
                  Cloud Architecture
                </span>
                <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-yellow-300 rounded">
                  +1
                </span>
              </div>
            </div>

            {/* Contact Button */}
            <button className="flex justify-center items-center px-4 py-2 w-full text-white bg-black rounded-lg transition-colors duration-300 hover:bg-gray-800">
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact
            </button>
          </div>

          {/* Trainer 4: Lisa Wang */}
          <div className="p-6 bg-yellow-100 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
            {/* Profile Image */}
            <div className="flex justify-center mb-4">
              <div className="overflow-hidden w-20 h-20 bg-gray-200 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
                  alt="Lisa Wang"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Name and Age */}
            <div className="mb-3 text-center">
              <h3 className="text-xl font-bold text-gray-800">Lisa Wang</h3>
              <p className="text-sm text-gray-600">Age: 30</p>
            </div>

            {/* Profession Tag */}
            <div className="flex justify-center mb-3">
              <span className="px-3 py-1 text-sm font-medium text-white bg-black rounded-full">
                AI Specialist
              </span>
            </div>

            {/* Location */}
            <div className="flex justify-center items-center mb-3 text-gray-600">
              <svg
                className="mr-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm">San Francisco, CA</span>
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-3">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <defs>
                      <linearGradient id="half-star-4">
                        <stop offset="80%" stopColor="#fbbf24" />
                        <stop offset="80%" stopColor="#e5e7eb" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#half-star-4)"
                      d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                    />
                  </svg>
                </div>
                <span className="ml-1 text-sm font-medium text-gray-700">
                  4.8
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mb-4 text-sm leading-relaxed text-center text-gray-600">
              AI engineer developing autonomous navigation systems for
              commercial drones.
            </p>

            {/* Metrics */}
            <div className="flex justify-between mb-4">
              <div className="flex-1 px-3 py-2 mr-2 text-center bg-yellow-400 rounded-lg">
                <p className="text-xs font-medium text-gray-800">7 years</p>
                <p className="text-xs text-gray-700">Experience</p>
              </div>
              <div className="flex-1 px-3 py-2 ml-2 text-center bg-yellow-400 rounded-lg">
                <p className="text-xs font-medium text-gray-800">110</p>
                <p className="text-xs text-gray-700">Projects</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-yellow-300 rounded">
                  Autonomous Systems
                </span>
                <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-yellow-300 rounded">
                  Path Planning
                </span>
                <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-yellow-300 rounded">
                  +1
                </span>
              </div>
            </div>

            {/* Contact Button */}
            <button className="flex justify-center items-center px-4 py-2 w-full text-white bg-black rounded-lg transition-colors duration-300 hover:bg-gray-800">
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
