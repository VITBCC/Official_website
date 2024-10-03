"use client";
import React from "react";

export default function EventPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="p-6 text-center">
        <h1 className="text-5xl font-bold text-yellow-400">My Event 2024</h1>
        <p className="mt-2 text-lg">Join the leading innovators in Web3</p>
      </header>

      <section className="py-12 bg-gray-900 text-center">
        <h2 className="text-4xl font-semibold text-white">Event Highlights</h2>
        <p className="mt-4 text-lg text-gray-300">
          Connect with top blockchain leaders, developers, and innovators.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-300">Speakers</h3>
            <p className="mt-2 text-gray-400">Top Web3 visionaries.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-300">Sponsors</h3>
            <p className="mt-2 text-gray-400">Leading blockchain companies.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold text-yellow-300">Networking</h3>
            <p className="mt-2 text-gray-400">Exclusive networking sessions.</p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <h2 className="text-4xl font-semibold text-yellow-400">Register Now</h2>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded-lg">
          Register
        </button>
      </section>

      <footer className="p-6 text-center text-gray-500">
        © 2024 My Event | All Rights Reserved
      </footer>
    </div>
  );
}
