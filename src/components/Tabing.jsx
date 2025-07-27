import React, { useContext, useEffect, useState } from "react";

export default function Tabing() {
  const [activButton, setactivButton] = useState("button1");
  // Logout function

  return (
    <>
      {/* tabs start */}
      <div className="container flex flex-wrap gap-2 justify-center p-3 mx-auto bg-gray-100 rounded-lg shadow-md md:justify-start">
        {[
          { label: " Basic details", id: "button1" },
          { label: "Header & Hero", id: "button2" },
          { label: "About Section", id: "button3" },
          { label: "Services", id: "button4" },
          { label: "Products", id: "button5" },
          { label: "ClientsTestimonials", id: "button6" },
          { label: "Contact", id: "button7" },
          { label: "Footer", id: "button8" },
        ].map(({ label, id }) => (
          <button
            key={id}
            className={`px-3 py-2 text-base sm:text-lg md:text-xl font-bold rounded-md transition-all duration-300 ${
              activButton === id
                ? "text-blue-600 border-b-4 border-black"
                : "text-[#a52a2a] hover:text-gray-800"
            }`}
            onClick={() => setactivButton(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* tabs end */}

      <div className="bg-slate-400">
        {activButton === "button1" ? (
          <Basicdetails />
        ) : activButton === "button2" ? (
          <HeaderHero />
        ) : activButton === "button3" ? (
          <AboutSection />
        ) : activButton === "button4" ? (
          <Services />
        ) : activButton === "button5" ? (
          <Products />
        ) : activButton === "button6" ? (
          <ClientsTestimonials />
        ) : activButton === "button7" ? (
          <Contact />
        ) : activButton === "button8" ? (
          <Footer />
        ) : null}
      </div>
    </>
  );
}

function Basicdetails() {
  return (
    <div className="p-8 mx-auto max-w-2xl bg-white rounded-md shadow-md">
      <h2 className="mb-6 text-2xl font-semibold">Basic Company Details</h2>

      {/* Company Name */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your company name (used in URL)"
          className="p-3 w-full rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Your Name */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Your Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="p-3 w-full rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="p-3 w-full rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Phone Number</label>
        <input
          type="text"
          placeholder="+91 9876543210"
          className="p-3 w-full rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

function HeaderHero() {
  return (
    <header className="text-white bg-gradient-to-r from-blue-600 to-indigo-700">
      {/* Header Navigation */}
      <div className="flex justify-between items-center px-6 py-4 mx-auto max-w-7xl">
        <h1 className="text-2xl font-bold">MyCompany</h1>
        <nav className="hidden space-x-4 md:block">
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#products" className="hover:underline">
            Products
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col gap-10 items-center px-6 py-20 mx-auto max-w-7xl md:flex-row">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Grow Your Business with Us
          </h2>
          <p className="mb-6 text-lg text-gray-100">
            We provide world-class solutions to help your company reach new
            heights.
          </p>
          <button className="px-6 py-3 font-semibold text-blue-700 bg-white rounded-md shadow transition hover:bg-gray-100">
            Get Started
          </button>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/500x350"
            alt="Hero Image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </header>
  );
}
function AboutSection() {
  return (
    <div className="flex flex-col gap-10 items-center p-8 mx-auto max-w-5xl bg-white rounded-md shadow-md md:flex-row">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://via.placeholder.com/400x300"
          alt="About Us"
          className="rounded-lg shadow"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2">
        <h2 className="mb-4 text-3xl font-bold">About Our Company</h2>
        <p className="mb-4 text-gray-600">
          We are a dedicated team of professionals committed to delivering
          high-quality products and services.
        </p>
        <p className="mb-4 text-gray-600">
          Our mission is to empower businesses through innovative solutions and
          unmatched customer service.
        </p>
        <p className="text-gray-600">
          With years of experience and a passion for excellence, we strive to
          exceed expectations and build long-lasting relationships.
        </p>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="p-8 mx-auto max-w-6xl bg-white rounded-md shadow-md">
      <h2 className="mb-8 text-3xl font-bold text-center">Our Services</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Service Card 1 */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-center items-center mb-4 w-12 h-12 text-white bg-blue-600 rounded-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="mb-3 text-xl font-semibold">Web Development</h3>
          <p className="text-gray-600">
            Custom websites and web applications built with modern technologies
            and best practices.
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Service description"
              className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Service Card 2 */}
        <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-center items-center mb-4 w-12 h-12 text-white bg-green-600 rounded-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="mb-3 text-xl font-semibold">Mobile Development</h3>
          <p className="text-gray-600">
            Native and cross-platform mobile applications for iOS and Android
            platforms.
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Service description"
              className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-center items-center mb-4 w-12 h-12 text-white bg-purple-600 rounded-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h3 className="mb-3 text-xl font-semibold">Digital Marketing</h3>
          <p className="text-gray-600">
            Comprehensive digital marketing strategies to boost your online
            presence and reach.
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Service description"
              className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Service Card 4 */}
        <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-center items-center mb-4 w-12 h-12 text-white bg-orange-600 rounded-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
              />
            </svg>
          </div>
          <h3 className="mb-3 text-xl font-semibold">UI/UX Design</h3>
          <p className="text-gray-600">
            Beautiful and intuitive user interfaces designed for optimal user
            experience.
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Service description"
              className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Service Card 5 */}
        <div className="p-6 bg-gradient-to-br from-red-50 to-pink-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-center items-center mb-4 w-12 h-12 text-white bg-red-600 rounded-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="mb-3 text-xl font-semibold">Cybersecurity</h3>
          <p className="text-gray-600">
            Comprehensive security solutions to protect your digital assets and
            data.
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Service description"
              className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Service Card 6 */}
        <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="flex justify-center items-center mb-4 w-12 h-12 text-white bg-teal-600 rounded-lg">
            <svg
              className="w-6 h-6"
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
          <h3 className="mb-3 text-xl font-semibold">Cloud Solutions</h3>
          <p className="text-gray-600">
            Scalable cloud infrastructure and migration services for modern
            businesses.
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Service description"
              className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="p-8 mx-auto max-w-6xl bg-white rounded-md shadow-md">
      <h2 className="mb-8 text-3xl font-bold text-center">Our Products</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Product Card 1 */}
        <div className="overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl">
          <div className="relative">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Product 1"
              className="object-cover w-full h-48"
            />
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
                New
              </span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="mb-2 text-xl font-semibold">E-Commerce Platform</h3>
            <p className="mb-3 text-sm text-gray-600">
              Complete online store solution with payment integration and
              inventory management.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">$299</span>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-sm text-gray-500">(24)</span>
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Product description"
                className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl">
          <div className="relative">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Product 2"
              className="object-cover w-full h-48"
            />
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                Popular
              </span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="mb-2 text-xl font-semibold">CRM System</h3>
            <p className="mb-3 text-sm text-gray-600">
              Customer relationship management software with analytics and
              reporting features.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">$199</span>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-sm text-gray-500">(156)</span>
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Product description"
                className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl">
          <div className="relative">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Product 3"
              className="object-cover w-full h-48"
            />
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
                Best Seller
              </span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="mb-2 text-xl font-semibold">
              Project Management Tool
            </h3>
            <p className="mb-3 text-sm text-gray-600">
              Comprehensive project management solution with team collaboration
              features.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">$149</span>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-sm text-gray-500">(89)</span>
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Product description"
                className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl">
          <div className="relative">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Product 4"
              className="object-cover w-full h-48"
            />
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 text-xs font-semibold text-white bg-purple-500 rounded-full">
                Premium
              </span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="mb-2 text-xl font-semibold">Analytics Dashboard</h3>
            <p className="mb-3 text-sm text-gray-600">
              Advanced analytics and reporting dashboard with real-time data
              visualization.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">$399</span>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-sm text-gray-500">(67)</span>
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Product description"
                className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Product Card 5 */}
        <div className="overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl">
          <div className="relative">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Product 5"
              className="object-cover w-full h-48"
            />
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 text-xs font-semibold text-white bg-orange-500 rounded-full">
                Featured
              </span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="mb-2 text-xl font-semibold">Mobile App Template</h3>
            <p className="mb-3 text-sm text-gray-600">
              Ready-to-use mobile app template with customizable components and
              themes.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">$99</span>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-sm text-gray-500">(203)</span>
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Product description"
                className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Product Card 6 */}
        <div className="overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl">
          <div className="relative">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Product 6"
              className="object-cover w-full h-48"
            />
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 text-xs font-semibold text-white bg-teal-500 rounded-full">
                Trending
              </span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="mb-2 text-xl font-semibold">AI Chatbot Solution</h3>
            <p className="mb-3 text-sm text-gray-600">
              Intelligent chatbot solution with natural language processing
              capabilities.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">$249</span>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-sm text-gray-500">(134)</span>
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Product description"
                className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function ClientsTestimonials() {
  return (
    <div className="p-8 mx-auto max-w-6xl bg-white rounded-md shadow-md">
      <h2 className="mb-8 text-3xl font-bold text-center">
        Client Testimonials
      </h2>

      {/* Testimonials Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Testimonial Card 1 */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/60x60"
              alt="Client 1"
              className="object-cover mr-4 w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-800">Sarah Johnson</h3>
              <p className="text-sm text-gray-600">CEO, TechStart Inc.</p>
            </div>
          </div>
          <div className="flex mb-3 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="mb-4 italic text-gray-700">
            "The team delivered an exceptional e-commerce platform that exceeded
            our expectations. Their attention to detail and professional
            approach made the entire process smooth and enjoyable."
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Client testimonial"
              className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Testimonial Card 2 */}
        <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/60x60"
              alt="Client 2"
              className="object-cover mr-4 w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-800">Michael Chen</h3>
              <p className="text-sm text-gray-600">CTO, InnovateCorp</p>
            </div>
          </div>
          <div className="flex mb-3 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="mb-4 italic text-gray-700">
            "Outstanding mobile app development service! The team was
            responsive, innovative, and delivered our project on time. Highly
            recommended for any tech project."
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Client testimonial"
              className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Testimonial Card 3 */}
        <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/60x60"
              alt="Client 3"
              className="object-cover mr-4 w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-800">Emily Rodriguez</h3>
              <p className="text-sm text-gray-600">
                Marketing Director, GrowthCo
              </p>
            </div>
          </div>
          <div className="flex mb-3 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="mb-4 italic text-gray-700">
            "The digital marketing campaign they created for us resulted in a
            300% increase in leads. Their strategic approach and data-driven
            insights were invaluable."
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Client testimonial"
              className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Testimonial Card 4 */}
        <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/60x60"
              alt="Client 4"
              className="object-cover mr-4 w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-800">David Thompson</h3>
              <p className="text-sm text-gray-600">Founder, StartupXYZ</p>
            </div>
          </div>
          <div className="flex mb-3 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="mb-4 italic text-gray-700">
            "Working with this team was a game-changer for our startup. They
            understood our vision perfectly and delivered a product that our
            users love."
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Client testimonial"
              className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Testimonial Card 5 */}
        <div className="p-6 bg-gradient-to-br from-red-50 to-pink-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/60x60"
              alt="Client 5"
              className="object-cover mr-4 w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-800">Lisa Wang</h3>
              <p className="text-sm text-gray-600">
                Product Manager, FinTech Solutions
              </p>
            </div>
          </div>
          <div className="flex mb-3 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="mb-4 italic text-gray-700">
            "The cybersecurity implementation they provided gave us peace of
            mind. Their expertise in fintech security standards is unmatched."
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Client testimonial"
              className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Testimonial Card 6 */}
        <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-100 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/60x60"
              alt="Client 6"
              className="object-cover mr-4 w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-800">Robert Kim</h3>
              <p className="text-sm text-gray-600">
                Operations Director, CloudFirst
              </p>
            </div>
          </div>
          <div className="flex mb-3 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="mb-4 italic text-gray-700">
            "Their cloud migration services were seamless and efficient. We
            experienced zero downtime and improved performance significantly."
          </p>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Client testimonial"
              className="p-2 w-full text-sm rounded border border-gray-300 outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Client Information Section */}
      <div className="p-6 mt-8 bg-gray-50 rounded-lg">
        <h3 className="mb-4 text-xl font-semibold">Client Information</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Client Name
            </label>
            <input
              type="text"
              placeholder="Enter client name"
              className="p-3 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">
              Company/Position
            </label>
            <input
              type="text"
              placeholder="Enter company or position"
              className="p-3 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">
              Client Photo URL
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="p-3 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">
              Rating (1-5)
            </label>
            <select className="p-3 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500">
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
function Contact() {
  return (
    <div className="p-8 mx-auto max-w-6xl bg-white rounded-md shadow-md">
      <h2 className="mb-8 text-3xl font-bold text-center">
        Contact Information
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="mb-6 text-xl font-semibold">Contact Form</h3>

          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="p-3 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-3 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="p-3 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Subject</label>
              <select className="p-3 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="services">Services Information</option>
                <option value="quote">Request Quote</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Enter your message here..."
                className="p-3 w-full rounded border border-gray-300 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button className="px-6 py-3 w-full text-white bg-blue-600 rounded-lg transition-colors duration-300 hover:bg-blue-700">
              Send Message
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
            <h3 className="mb-4 text-xl font-semibold">Get in Touch</h3>
            <p className="mb-4 text-gray-600">
              Ready to start your next project? We'd love to hear from you. Send
              us a message and we'll respond as soon as possible.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <div className="flex justify-center items-center mr-3 w-10 h-10 text-white bg-blue-600 rounded-full">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex justify-center items-center mr-3 w-10 h-10 text-white bg-green-600 rounded-full">
                  <svg
                    className="w-5 h-5"
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
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@yourcompany.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex justify-center items-center mr-3 w-10 h-10 text-white bg-purple-600 rounded-full">
                  <svg
                    className="w-5 h-5"
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
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">
                    123 Business Street, Suite 100
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
            <h3 className="mb-4 text-xl font-semibold">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
            <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex justify-center items-center w-10 h-10 text-white bg-blue-600 rounded-full transition-colors hover:bg-blue-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex justify-center items-center w-10 h-10 text-white bg-blue-800 rounded-full transition-colors hover:bg-blue-900"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex justify-center items-center w-10 h-10 text-white bg-blue-600 rounded-full transition-colors hover:bg-blue-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex justify-center items-center w-10 h-10 text-white bg-pink-600 rounded-full transition-colors hover:bg-pink-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="p-6 mt-8 bg-gray-50 rounded-lg">
        <h3 className="mb-4 text-xl font-semibold">Our Location</h3>
        <div className="flex justify-center items-center w-full h-64 bg-gray-200 rounded-lg">
          <div className="text-center">
            <svg
              className="mx-auto mb-4 w-16 h-16 text-gray-400"
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
            <p className="text-gray-600">Interactive Map Placeholder</p>
            <p className="text-sm text-gray-500">
              123 Business Street, Suite 100, New York, NY 10001
            </p>
          </div>
        </div>
      </div>

      {/* Quick Contact Actions */}
      <div className="grid gap-4 mt-8 md:grid-cols-3">
        <button className="p-4 text-center text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700">
          <svg
            className="mx-auto mb-2 w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <p className="font-medium">Call Now</p>
          <p className="text-sm opacity-90">+1 (555) 123-4567</p>
        </button>

        <button className="p-4 text-center text-white bg-green-600 rounded-lg transition-colors hover:bg-green-700">
          <svg
            className="mx-auto mb-2 w-8 h-8"
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
          <p className="font-medium">Email Us</p>
          <p className="text-sm opacity-90">info@yourcompany.com</p>
        </button>

        <button className="p-4 text-center text-white bg-purple-600 rounded-lg transition-colors hover:bg-purple-700">
          <svg
            className="mx-auto mb-2 w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <p className="font-medium">Live Chat</p>
          <p className="text-sm opacity-90">Available 24/7</p>
        </button>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="p-8 mx-auto max-w-6xl bg-white rounded-md shadow-md">
      <h2 className="mb-8 text-3xl font-bold text-center">
        Footer Configuration
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Company Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Company Info</h3>
          <div className="space-y-3">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your Company Name"
                className="p-3 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Company Description
              </label>
              <textarea
                rows="3"
                placeholder="Brief description about your company..."
                className="p-3 w-full rounded border border-gray-300 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Logo URL</label>
              <input
                type="url"
                placeholder="https://example.com/logo.png"
                className="p-3 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
          <div className="space-y-3">
            <div>
              <label className="block mb-2 text-sm font-medium">Link 1</label>
              <input
                type="text"
                placeholder="About Us"
                className="p-2 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Link 2</label>
              <input
                type="text"
                placeholder="Services"
                className="p-2 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Link 3</label>
              <input
                type="text"
                placeholder="Portfolio"
                className="p-2 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Link 4</label>
              <input
                type="text"
                placeholder="Contact"
                className="p-2 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Link 5</label>
              <input
                type="text"
                placeholder="Blog"
                className="p-2 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Contact Details
          </h3>
          <div className="space-y-3">
            <div>
              <label className="block mb-2 text-sm font-medium">Address</label>
              <textarea
                rows="2"
                placeholder="123 Business Street, Suite 100&#10;New York, NY 10001"
                className="p-2 w-full rounded border border-gray-300 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Phone</label>
              <input
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="p-2 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="info@yourcompany.com"
                className="p-2 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Website</label>
              <input
                type="url"
                placeholder="https://yourcompany.com"
                className="p-2 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Social Media</h3>
          <div className="space-y-3">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Facebook URL
              </label>
              <input
                type="url"
                placeholder="https://facebook.com/yourcompany"
                className="p-2 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Twitter/X URL
              </label>
              <input
                type="url"
                placeholder="https://twitter.com/yourcompany"
                className="p-2 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                LinkedIn URL
              </label>
              <input
                type="url"
                placeholder="https://linkedin.com/company/yourcompany"
                className="p-2 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Instagram URL
              </label>
              <input
                type="url"
                placeholder="https://instagram.com/yourcompany"
                className="p-2 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                YouTube URL
              </label>
              <input
                type="url"
                placeholder="https://youtube.com/yourcompany"
                className="p-2 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Preview */}
      <div className="p-6 mt-8 bg-gray-50 rounded-lg">
        <h3 className="mb-4 text-xl font-semibold">Footer Preview</h3>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="grid gap-6 md:grid-cols-4">
            {/* Company Info Preview */}
            <div>
              <h4 className="mb-3 font-semibold text-gray-800">
                Your Company Name
              </h4>
              <p className="mb-3 text-sm text-gray-600">
                Brief description about your company and what you do. This helps
                visitors understand your business better.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links Preview */}
            <div>
              <h4 className="mb-3 font-semibold text-gray-800">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info Preview */}
            <div>
              <h4 className="mb-3 font-semibold text-gray-800">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  123 Business Street, Suite 100
                  <br />
                  New York, NY 10001
                </p>
                <p>+1 (555) 123-4567</p>
                <p>info@yourcompany.com</p>
                <p>https://yourcompany.com</p>
              </div>
            </div>

            {/* Newsletter Preview */}
            <div>
              <h4 className="mb-3 font-semibold text-gray-800">Newsletter</h4>
              <p className="mb-3 text-sm text-gray-600">
                Subscribe to our newsletter for updates and insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-2 text-sm rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-r hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright Preview */}
          <div className="pt-4 mt-6 text-center border-t border-gray-200">
            <p className="text-sm text-gray-600">
              © 2024 Your Company Name. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
          </div>
        </div>
      </div>

      {/* Additional Footer Settings */}
      <div className="grid gap-6 mt-8 md:grid-cols-2">
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="mb-4 text-lg font-semibold">Footer Settings</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <input type="checkbox" id="showNewsletter" className="mr-2" />
              <label htmlFor="showNewsletter" className="text-sm">
                Show Newsletter Signup
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="showSocialMedia" className="mr-2" />
              <label htmlFor="showSocialMedia" className="text-sm">
                Show Social Media Links
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="showContactInfo" className="mr-2" />
              <label htmlFor="showContactInfo" className="text-sm">
                Show Contact Information
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="showQuickLinks" className="mr-2" />
              <label htmlFor="showQuickLinks" className="text-sm">
                Show Quick Links
              </label>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="mb-4 text-lg font-semibold">Copyright Information</h3>
          <div className="space-y-3">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Copyright Text
              </label>
              <input
                type="text"
                placeholder="© 2024 Your Company Name. All rights reserved."
                className="p-3 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Privacy Policy URL
              </label>
              <input
                type="url"
                placeholder="https://yourcompany.com/privacy"
                className="p-3 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Terms of Service URL
              </label>
              <input
                type="url"
                placeholder="https://yourcompany.com/terms"
                className="p-3 w-full rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
    </div>
  );
}
