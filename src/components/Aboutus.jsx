import React from "react";

const OurMemories = () => {
  const photos = [
    {
      id: 1,
      src: "https://img.freepik.com/premium-photo/professional-mountain-nature-photographer-takes-photos-with-mirror-camera-peak-rock-dreamy-fogy-landscape-spring-orange-misty-sunrise-beautiful-valley_221513-4303.jpg?w=996",
      alt: "Mountain Adventure",
      description: "Capturing golden hour at Everest Base Camp",
    },
    {
      id: 2,
      src: "https://img.freepik.com/premium-photo/hiking-travellers-group-colorful-shirts-standing-middle-golden-meadow-mountain-biew-pointing-your-finger-their-own-destination-mulayit-taung-myanmar_38882-219.jpg?w=900",
      description: "Team expedition through Himalayan trails",
    },
    {
      id: 3,
      src: 'https://img.freepik.com/free-photo/young-couple-hugging-sea-shore-evening_23-2148020113.jpg?t=st=1741148527~exp=1741152127~hmac=8211e3134a14686fa2d9896452dd706bc1560fa7a62812bb0f1761217e677cc1&w=1800',
      alt: "Beach Paradise",
      description: "Sunset moments in Maldives",
    },

  ];

  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Journey Chronicles
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Relive the magic of unforgettable moments captured across our global expeditions.
            Each image tells a story of discovery, connection, and awe-inspiring beauty that
            fuels our passion for creating extraordinary travel experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-slate-200 font-medium group-hover:text-sky-400 transition-colors">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105">
            View More Memories
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurMemories;