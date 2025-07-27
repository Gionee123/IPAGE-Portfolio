import React from "react";

export default function Blog({ userData }) {
  if (!userData?.blog?.title) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Latest Blog Post
          </h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {userData.blog.title}
            </h3>
            {userData.blog.summary && (
              <p className="text-gray-600 leading-relaxed">
                {userData.blog.summary}
              </p>
            )}
            <div className="mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
