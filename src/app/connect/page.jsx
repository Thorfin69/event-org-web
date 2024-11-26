"use client";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ConnectUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Connect With Us</h1>

      <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8">
        {/* Contact Info */}
        <div className="flex-1 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl text-gray-800 font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-4">
            Feel free to reach out via email or follow us on social media.
          </p>
          <ul>
            <li className="text-gray-700 mb-2">
              <strong>Email:</strong> contact@yourdomain.com
            </li>
            <li className="text-gray-700 mb-2">
              <strong>Phone:</strong> +123 456 7890
            </li>
            <li className="text-gray-700 mb-4">
              <strong>Address:</strong> 1234 Street Name, City, Country
            </li>
          </ul>
          <div className="flex gap-4 text-gray-600">
            <FaFacebook className="text-2xl hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-blue-400 cursor-pointer" />
            <FaLinkedin className="text-2xl hover:text-blue-700 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-pink-500 cursor-pointer" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl text-gray-900 font-semibold mb-4">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full text-gray-700 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 text-gray-700 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="w-full p-3 border rounded-lg text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
