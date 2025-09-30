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
        className="w-screen relative flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 text-center bg-cover bg-top min-h-[600px] py-10 md:py-16 font-poppins"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-3xl w-full text-left pt-6">
          {section?.subheading && (
            <h2 className="text-xs md:text-sm font-light mb-3">
              {section.subheading}
            </h2>
          )}
          {section?.heading && (
            <h2
              className="font-bold mb-4"
              style={{
                color: "#B089DD",
                fontSize: "clamp(1.25rem, 5vw, 2rem)",
                lineHeight: "1.2",
              }}
            >
              {section.heading}
            </h2>
          )}

          {section?.description && (
            <p
              className="font-light leading-relaxed mb-6"
              style={{
                fontSize: "clamp(0.9rem, 3vw, 1rem)",
              }}
            >
              {section.description}
            </p>
          )}

          <div className="mx-auto">
            <ImageCarousel type="aboutImages" height="350px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
