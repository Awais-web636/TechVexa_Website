import React from "react";
import Image1 from "../assets/blogs/1.jpg";
import Image2 from "../assets/blogs/2.jpg";
import Image3 from "../assets/blogs/3.jpg";

const blogs = [
  {
    id: 1,
    date: "September 25, 2024",
    title: "A Digital Prescription For Business",
    description:
      "Presentations play a crucial role in digital marketing as they help businesses share their marketing ideas, strategies, goals, and achievements with a specific audience.",
    image: Image1,
  },
  {
    id: 2,
    date: "September 25, 2024",
    title: "Presentations Play Role In Market",
    description:
      "Presentations play a crucial role in digital marketing as they help businesses share their marketing ideas, strategies, goals, and achievements with a specific audience.",
    image: Image2,
  },
  {
    id: 3,
    date: "September 25, 2024",
    title: "The Most Popular Page Builder Included",
    description:
      "Presentations play a crucial role in digital marketing as they help businesses share their marketing ideas, strategies, goals, and achievements with a specific audience.",
    image: Image3,
  },
];

const BlogSection = () => {
  return (
    <section className="bg-gray-50 py-4 px-6 mb-16" id="blog">
      <div className="max-w-7xl mx-auto">
        {/* Small Horizontal Line and 'Our Blog' Text */}
        <div className="flex items-center justify-center mb-6 mt-6">
          <div className="w-12 h-1 bg-[#F77F00] mr-4"></div>
          <p className="text-[#F77F00] text-sm uppercase font-semibold tracking-wide">
            Our Blog
          </p>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-customBlue text-center mb-12">
          Discover Our Blogs
        </h2>

        {/* Blog Cards */}
        <div className=" relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Blog Image */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-t-3xl"
                />
                {/* Date on the top-right corner */}
                <span className="absolute top-0 right-0 bg-[#F77F00] text-white text-sm font-medium px-3 py-3 rounded-lg">
                  {blog.date}
                </span>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-customBlue mb-2">
                  {blog.title}
                </h3>
                <p className="text-md text-gray-600 mb-4">{blog.description}</p>
                <a
                  href="#"
                  className="text-[#D62828] font-medium hover:underline"
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
