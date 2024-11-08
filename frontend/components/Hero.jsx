"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/heroes?populate=*"
        ); // Használj megfelelő API URL-t
        const data = await response.json();
        console.log(data.data);
        setHeroData(data.data);
      } catch (err) {
        // console.error(err);
      }
    };
    fetchHeroData();
  }, []);

  console.log(heroData);
  if (!heroData) {
    return <div>Loading...</div>;
  }
  return (
    <section className="absolute top-0 left-0 w-full h-96 font-sans z-0">
      <div className="relative h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="http://localhost:1337/uploads/IMG_20240919_171359_edit_92083765496851_e196eaf9bd_a5bc3b96ac.jpg"
            alt="Background Image"
            className="object-cover object-center w-full h-full z-0"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            {heroData.title || "Köszöntelek az oldalamon!"}
          </h1>
          <p className="text-lg text-white mb-8">
            {heroData.description ||
              "Fedezd fel az amigurumi világát, ahol álmaid minden öltéssel életre kelnek!"}
          </p>
          <a
            href="#"
            className="bg-primary text-gray-900 hover:bg-background py-2 px-6 rounded-md text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg border-4 border-background"
          >
            {heroData.button || "Minták"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
