import React from "react";
import tourVideo from "../components/img/City Travel Vedio Intro Youtube.mp4";
import TourPackageSelect from "./Shortly";
import OurMemories from "./Aboutus";
import { Link } from "react-router-dom";
import AboutUs from "./Gallery";
import '../CSS/About.css';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <section className="relative text-white min-h-screen flex items-center justify-center px-6 sm:px-10 py-20">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={tourVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-7xl mx-auto relative z-10 mt-7 text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up delay-100">
            Discover New Horizons <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
              Your Adventure Awaits
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto animate-slide-up delay-200">
            Journey beyond the ordinary. Experience world-class destinations,
            immerse yourself in vibrant cultures, and create stories worth
            sharing for generations to come.
          </p>
          <Link
            to="/Book"
            className="inline-block bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-sky-500/20 animate-fade-in delay-300"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      <section>
        <TourPackageSelect />
      </section>
      <section>
        <OurMemories />
      </section>
      <section>
        <AboutUs />
      </section>
    </div>
  );
};

export default HomePage;
