import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import ProgramCard from "../../components/ProgramCard";
import ImageCarousel from "../../components/ImageCarousel";
import ValueList from "../../components/ValueList.js";
import bg from "../../img/joinUsBg.svg";

export default function JoinUs() {
  const [programs, setPrograms] = useState([]);
  const [storiesSection, setStoriesSection] = useState(null);
  const [whyJoinUsSection, setWhyJoinUsSection] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "programCard"] | order(pageOrder asc){
          _id, title, description, buttonText,
          "logo": logo.asset->url,
          "buttonIcon": buttonIcon.asset->url,
          buttonLink
        }`
      )
      .then(setPrograms)
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "landingPage" && sectionId in ["stories-and-support","why-join-us"]]{
          sectionId, heading, description
        }`
      )
      .then((sections) => {
        sections.forEach((s) => {
          if (s.sectionId === "stories-and-support") setStoriesSection(s);
          if (s.sectionId === "why-join-us") setWhyJoinUsSection(s);
        });
      })
      .catch(console.error);
  }, []);

  return (
    <div
    className="JoinUs font-poppins w-full"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center",
      // responsive background sizes prevent cropping
      backgroundSize: "1200px auto",        // base
    }}
  >
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {whyJoinUsSection && (
          <>
            {/* Top highlight card (colors unchanged) */}
            <div className="w-full max-w-5xl mx-auto flex justify-center md:justify-end mb-6 md:mb-10">
              <div
                className="w-full md:w-7/12 lg:w-5/12 rounded-lg p-5 sm:p-6 shadow-lg mt-6 md:mt-12"
                style={{ backgroundColor: "#E1E0FF", color: "#805DC1" }}
              >
                <p className="text-sm sm:text-base font-light leading-relaxed text-center">
                  {whyJoinUsSection.description}
                </p>
              </div>
            </div>

            {/* WHY JOIN US */}
            <section className="max-w-5xl mx-auto isolate">
              <h2 className="font-bold text-left" style={{ color: "#B089DD" }}>
                <span className="text-2xl sm:text-3xl lg:text-4xl">
                  {whyJoinUsSection.heading}
                </span>
              </h2>

              {/* Grid: carousel + values */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-12 items-start">
                {/* --- CAROUSEL WRAPPER (no clipping, no overlap) --- */}
                <div className="w-full">
                  <div
                    className="
                      relative z-0
                      min-h-[360px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px]
                      pb-12   /* reserve room for dots/arrows */
                      mb-6   /* space below the image */
                      overflow-visible
                      rounded-xl
                    "
                  >
                    {/* Let the carousel fill its container; no fixed height prop */}
                    <ImageCarousel type="whyJoinUsImages" />
                  </div>
                </div>

                {/* Values list stays above if anything tries to overlap */}
                <div className="w-full relative z-10 pt-1 sm:pt-2">
                  <ValueList />
                </div>
              </div>
            </section>
          </>
        )}

{storiesSection && (
  <section className="max-w-5xl mx-auto pt-12 sm:pt-16 isolate">
    <h2 className="font-bold mb-3 sm:mb-4" style={{ color: "#B089DD" }}>
      <span className="text-2xl sm:text-3xl">{storiesSection.heading}</span>
    </h2>

    <p className="mb-6 sm:mb-8 text-base sm:text-lg font-light leading-relaxed">
      {storiesSection.description}
    </p>

    {/* Programs grid */}
    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
      {programs.map(
        ({ _id, title, description, buttonText, logo, buttonIcon, buttonLink }) => (
          <ProgramCard
            key={_id}
            logo={logo}
            title={title}
            description={description}
            buttonText={buttonText}
            buttonIcon={buttonIcon}
            logoSize={!title ? 160 : 100}
            onButtonClick={() => window.open(buttonLink, "_blank")}
          />
        )
      )}
    </div>
  </section>
)}
      </div>
    </div>
  );
}
