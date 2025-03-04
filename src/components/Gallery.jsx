import React from "react";
import CountUp from "react-countup";
import user from '../components/img/user.png'
import { use } from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">
            About Our Journey
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-sky-400">MST Travels</span>,
            we craft extraordinary journeys that blend adventure with authenticity.
            Our mission is to transform how you experience the world through
            meticulously designed travel experiences.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-sky-500/30 transition-all">
            <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              <CountUp start={0} end={3} duration={2} suffix="+" />
            </h3>
            <p className="text-slate-400 font-medium">Years of Excellence</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-sky-500/30 transition-all">
            <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              <CountUp start={0} end={129} duration={2.5} suffix="+" />
            </h3>
            <p className="text-slate-400 font-medium">Curated Expeditions</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-sky-500/30 transition-all">
            <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              <CountUp start={0} end={12000} duration={3} separator="," suffix="+" />
            </h3>
            <p className="text-slate-400 font-medium">Satisfied Travelers</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-sky-500/30 transition-all">
            <div className="relative w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-2 border-sky-500/20 group-hover:border-sky-500/50 transition-all">
              <img
                src={user}
                alt="Team Member"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-all"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-200 text-center mb-1">Alex Johnson</h3>
            <p className="text-sky-400 text-sm text-center mb-4">CEO & Founder</p>
            <p className="text-slate-400 text-center text-sm leading-relaxed">
              Visionary leader passionate about creating transformative travel experiences
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-sky-500/30 transition-all">
            <div className="relative w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-2 border-sky-500/20 group-hover:border-sky-500/50 transition-all">
              <img
                src={user}
                alt="Team Member"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-all"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-200 text-center mb-1">Sarah Chen</h3>
            <p className="text-sky-400 text-sm text-center mb-4">Operations Director</p>
            <p className="text-slate-400 text-center text-sm leading-relaxed">
              Ensures seamless execution of every journey detail
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-sky-500/30 transition-all">
            <div className="relative w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-2 border-sky-500/20 group-hover:border-sky-500/50 transition-all">
              <img
                src={user}
                alt="Team Member"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-all"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-200 text-center mb-1">Michael Ruiz</h3>
            <p className="text-sky-400 text-sm text-center mb-4">Experience Architect</p>
            <p className="text-slate-400 text-center text-sm leading-relaxed">
              Designs immersive cultural encounters and unique itineraries
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center border-t border-slate-700/50 pt-16">
          <h3 className="text-3xl font-bold text-slate-200 mb-6">
            Our Commitment
          </h3>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed text-lg">
            We're dedicated to sustainable travel practices and creating meaningful
            connections between travelers and local communities. Every journey
            is carefully crafted to leave lasting memories while preserving
            the beauty of our destinations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;