import React from 'react';
import { FaFacebookF, FaTwitter, FaGithub, FaInstagram , FaLinkedin } from 'react-icons/fa';
import { BsCart4 } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
            <BsCart4 className=' text-4xl md:text-5xl lg:text-6xl' />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Ecom</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Top seller</h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline">Mens Shirts</a>
                </li>
                <li>
                  <a href="" className="hover:underline">Laptops</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Follow us</h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="https://github.com/JatinJaglan347" className="hover:underline">Github</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jatinjaglan/" className="hover:underline">Linkedin</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">© 2023 <a href="https://github.com/JatinJaglan347" className="hover:underline">Ecom™</a>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 ">
              <FaFacebookF className="w-4 h-4" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="https://www.linkedin.com/in/jatinjaglan/" className="text-gray-500 hover:text-gray-900  ml-5">
              <FaLinkedin  className="w-4 h-4" />
              <span className="sr-only">Linkedin account</span>
            </a>
            <a href="https://x.com/Jatin_Jaglan347" className="text-gray-500 hover:text-gray-900 ml-5">
              <FaTwitter className="w-4 h-4" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="https://github.com/JatinJaglan347" className="text-gray-500 hover:text-gray-900 ml-5">
              <FaGithub className="w-4 h-4" />
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="https://www.instagram.com/jatinjaglan347/" className="text-gray-500 hover:text-gray-900  ml-5">
              <FaInstagram  className="w-4 h-4" />
              <span className="sr-only">Instagram account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
