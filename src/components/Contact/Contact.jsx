import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { BsCart4 } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <div className="flex justify-center mb-6">
          <BsCart4 className="text-4xl md:text-5xl lg:text-6xl text-[#01D7E2]" />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center text-[#01D7E2]">Contact Us</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#01D7E2] focus:border-[#01D7E2]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#01D7E2] focus:border-[#01D7E2]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#01D7E2] focus:border-[#01D7E2]"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-[#01D7E2] text-white px-4 py-2 rounded-md shadow-sm hover:bg-[#01A5B5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#01D7E2]"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-8 border-t pt-8">
          <h2 className="text-xl font-bold mb-4 text-[#01D7E2]">Other Ways to Contact Us</h2>
          <div className="flex items-center mb-4">
            <FaPhone className="h-6 w-6 text-[#01D7E2] mr-2" />
            <span className="text-gray-700">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="h-6 w-6 text-[#01D7E2] mr-2" />
            <span className="text-gray-700">contact@ecomwebsite.com</span>
          </div>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="h-6 w-6 text-[#01D7E2] mr-2" />
            <span className="text-gray-700">123 Ecom Street, City, Country</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
