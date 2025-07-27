import React from "react";

export default function HeroSection() {
  const userData = {
    name: "John Doe",
    title: "Full Stack Developer",
    tagline: "Creating beautiful, functional, and user-friendly web experiences",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  };

  return (
    <section id="home" className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20 pt-32">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={userData.profileImage}
              alt={userData.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4">{userData.name}</h1>
          <h2 className="text-2xl font-semibold mb-4">
            {userData.title}
          </h2>
          <p className="text-xl opacity-90">
            {userData.tagline}
          </p>
        </div>
      </div>
    </section>
  );
} 