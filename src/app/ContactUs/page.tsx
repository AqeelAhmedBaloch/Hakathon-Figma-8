import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10 mt-10">
        <h1 className="text-3xl font-semibold">Get In Touch With Us</h1>
        <p className="text-gray-500 mt-3">
          For More Information About Our Products & Services, Please Feel Free To Drop Us <br />
          An Email. Our Staff Is Always Here To Help You Out.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="flex flex-col md:flex-row justify-between mt-10">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h3 className="font-bold ml-36"><FaMapMarkerAlt />Address</h3>
            <p className="text-gray-600 ml-36">289 8th Ave, New York NY 10002, United States</p>
          </div>
          <div>
            <h3 className="font-bold ml-36"><FaPhoneAlt /> Phone</h3>
            <p className="text-gray-600 ml-36">Mobile: +1 646 987 8768</p>
            <p className="text-gray-600 ml-36">Hotline: +1 646 432 3750</p>
          </div>
          <div>
            <h3 className="font-bold ml-36"><MdAccessTimeFilled /> Working Time</h3>
            <p className="text-gray-600 ml-36">Monday-Friday: 8:00-21:00</p>
            <p className="text-gray-600 ml-36">Saturday-Sunday: 9:00-21:00</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="w-full md:w-1/2 space-y-6">
          <div>
            <label className="block text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Alice"
              className="mt-1 block w-[520px] border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-teal-300"
            />
          </div>

          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="alice@gmail.com"
              className="mt-1 block w-[520px] border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-teal-300"
            />
          </div>

          <div>
            <label className="block text-gray-700">Subject</label>
            <input
              type="text"
              placeholder="This is an optional"
              className="mt-1 block w-[520px] border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-teal-300"
            />
          </div>

          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              rows={4}
              placeholder="Hi, Id like to ask about..."
              className="mt-1 block w-[520px] border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-teal-300"
            ></textarea>
          </div>

          <button
            type="submit" className="w-[520px] bg-teal-500 text-white font-medium py-2 rounded-md hover:bg-teal-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 ml-24 w-[1050px] gap-8 text-center mt-16 bg-gray-200 p-6 rounded-md">
        <div>
          <span className="text-3xl">🏆</span>
          <h3 className="font-semibold mt-2">High Quality</h3>
          <p className="text-gray-500 text-sm">Crafted from top materials</p>
        </div>
        <div>
          <span className="text-3xl">🛡️</span>
          <h3 className="font-semibold mt-2">Warranty Protection</h3>
          <p className="text-gray-500 text-sm">Over 2 years</p>
        </div>
        <div>
          <span className="text-3xl">⏱️</span>
          <h3 className="font-semibold mt-2">24 / 7 Support</h3>
          <p className="text-gray-500 text-sm">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
