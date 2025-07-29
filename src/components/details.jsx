import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../common/Header.jsx";
import Footer from "../common/Footer.jsx";

export default function Details() {
  const [trainerData, setTrainerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  let baseUrl = "https://company-todo-api.onrender.com";

  useEffect(() => {
    // Fetch trainer details by ID
    const fetchTrainerDetails = async () => {
      try {
        const response = await axios.post(
          `https://company-todo-api.onrender.com/api/frontend/users/details/${id}`
        );
        if (response.data.status) {
          setTrainerData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching trainer details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainerDetails();
  }, [id]);

  const handleBackToHome = () => {
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex justify-center items-center pt-20 min-h-screen">
          <div className="w-12 h-12 rounded-full border-b-2 border-yellow-400 animate-spin"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!trainerData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex justify-center items-center pt-20 min-h-screen">
          <div className="text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-800">
              Trainer Not Found
            </h2>
            <p className="text-gray-600">
              The requested trainer profile could not be found.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="px-4 pt-20 pb-12">
        <div className="mx-auto max-w-6xl">
          {/* Back to Home Button */}
          <div className="mb-6">
            <button
              onClick={handleBackToHome}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-300 shadow-sm transition-colors duration-300 hover:bg-gray-50"
            >
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </button>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="mb-2 text-4xl font-bold text-gray-800">
              Trainer Profile
            </h1>
            <div className="w-20 h-1 bg-yellow-400"></div>
          </div>

          {/* Main Profile Card */}
          <div className="overflow-hidden bg-white rounded-2xl shadow-xl">
            {/* Hero Section */}
            <div className="relative p-8 bg-gradient-to-r from-yellow-400 to-yellow-500">
              <div className="flex flex-col items-center lg:flex-row">
                {/* Profile Image */}
                <div className="relative mb-6 lg:mb-0 lg:mr-8">
                  <div className="relative">
                    <img
                      src={`${baseUrl}/uploads/Images/${trainerData.profileImage}`}
                      alt={trainerData.name}
                      className="object-cover w-48 h-48 rounded-full border-4 border-white shadow-lg"
                    />
                    {/* Experience Badge */}
                    <div className="absolute -bottom-2 -left-2 px-4 py-2 text-sm font-bold text-black bg-yellow-400 rounded-full shadow-lg">
                      {trainerData.experience}+ Years Experience
                    </div>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="text-center lg:text-left">
                  <h2 className="mb-2 text-3xl font-bold text-white">
                    {trainerData.name}
                  </h2>
                  <p className="mb-3 text-xl text-yellow-100">
                    {trainerData.title}
                  </p>
                  <div className="flex justify-center items-center text-yellow-100 lg:justify-start">
                    <svg
                      className="mr-2 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{trainerData.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-8">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Contact Details */}
                <div>
                  <h3 className="mb-6 text-2xl font-bold text-gray-800">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {/* Email */}
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="flex flex-shrink-0 justify-center items-center mr-4 w-12 h-12 bg-red-500 rounded-full">
                        <svg
                          className="w-6 h-6 text-white"
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
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium text-gray-800">
                          {trainerData.email || "sumit@indiadroneacademy.com"}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="flex flex-shrink-0 justify-center items-center mr-4 w-12 h-12 bg-red-500 rounded-full">
                        <svg
                          className="w-6 h-6 text-white"
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
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-medium text-gray-800">
                          {trainerData.phone || "+91-9580120509"}
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="flex flex-shrink-0 justify-center items-center mr-4 w-12 h-12 bg-red-500 rounded-full">
                        <svg
                          className="w-6 h-6 text-white"
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
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-medium text-gray-800">
                          {trainerData.location || "Hyderabad, Telangana"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Details */}
                <div>
                  <h3 className="mb-6 text-2xl font-bold text-gray-800">
                    Professional Details
                  </h3>
                  <div className="space-y-6">
                    {/* Rating */}
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="mb-2 text-sm text-gray-600">Rating</p>
                      <div className="flex items-center">
                        <div className="flex mr-2 text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <span className="font-bold text-gray-800">
                          {trainerData.rating}/5.0
                        </span>
                      </div>
                    </div>

                    {/* Age */}
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="mb-1 text-sm text-gray-600">Age</p>
                      <p className="font-bold text-gray-800">
                        {trainerData.age} years
                      </p>
                    </div>

                    {/* Projects */}
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="mb-1 text-sm text-gray-600">
                        Projects Completed
                      </p>
                      <p className="font-bold text-gray-800">
                        {trainerData.projects} projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h3 className="mb-4 text-2xl font-bold text-gray-800">About</h3>
                <p className="leading-relaxed text-gray-700">
                  {trainerData.description}
                </p>
              </div>

              {/* Skills */}
              <div className="mt-8">
                <h3 className="mb-4 text-2xl font-bold text-gray-800">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {trainerData.skills &&
                    trainerData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 font-medium text-gray-800 bg-yellow-400 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 mt-8 sm:flex-row">
                <button className="flex flex-1 justify-center items-center px-6 py-3 font-medium text-white bg-black rounded-lg transition-colors duration-300 hover:bg-gray-800">
                  <svg
                    className="mr-2 w-5 h-5"
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
                  Contact Trainer
                </button>
                <button className="flex flex-1 justify-center items-center px-6 py-3 font-medium text-black bg-yellow-400 rounded-lg transition-colors duration-300 hover:bg-yellow-500">
                  <svg
                    className="mr-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
