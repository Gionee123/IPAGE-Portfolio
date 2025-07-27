import React from "react";

export default function Testimonials() {
  const defaultTestimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      quote:
        "John delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and enjoyable.",
      initial: "S",
      color: "purple",
    },
    {
      name: "Mike Chen",
      position: "Product Manager, DataCorp",
      quote:
        "The analytics dashboard John built for us has transformed how we make business decisions. The real-time insights are invaluable to our operations.",
      initial: "M",
      color: "blue",
    },
    {
      name: "Lisa Rodriguez",
      position: "Founder, FitLife",
      quote:
        "Working with John on our fitness app was a game-changer. His React Native expertise helped us launch on both platforms simultaneously with outstanding performance.",
      initial: "L",
      color: "green",
    },
  ];

  const testimonials = defaultTestimonials;

  const getColorClasses = (color) => {
    const colorMap = {
      purple: "bg-purple-100 text-purple-600",
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
    };
    return colorMap[color] || "bg-purple-100 text-purple-600";
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Client Testimonials
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 ${getColorClasses(
                    testimonial.color
                  )} rounded-full flex items-center justify-center mr-4`}
                >
                  <span className="font-semibold">{testimonial.initial}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
