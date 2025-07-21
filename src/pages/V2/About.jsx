import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import ImageCarousel from "../../components/ImageCarousel";
import vector from "../../img/line1.svg";
import bg from "../../img/aboutBg.svg";

function About() {
  const [section, setSection] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "landingPage" && sectionId == "about-wics"][0]{
          subheading,
          heading,
          description
        }`
      )
      .then((data) => {
        setSection(data);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
      });
  }, []);

  return (
    <div className="About">
      <img
        src={vector}
        alt="Vector"
        className="w-full"
        style={{ marginBottom: "-60px" }}
      />
      <div
        className="w-screen relative flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 text-center bg-cover bg-top min-h-[800px] py-16 md:py-24 font-poppins"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-6xl w-full text-left pt-10">
          {section?.subheading && (
            <h2 className="text-lg md:text-xl font-light mb-4">
              {section.subheading}
            </h2>
          )}
          {section?.heading && (
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ color: "#B089DD" }}
            >
              {section.heading}
            </h2>
          )}
          {section?.description && (
            <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed mb-10">
              {section.description}
            </p>
          )}
          <div className="w-full">
            <ImageCarousel type="aboutImages" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
