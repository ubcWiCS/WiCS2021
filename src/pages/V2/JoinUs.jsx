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
          _id,
          title,
          description,
          buttonText,
          "logo": logo.asset->url,
          "buttonIcon": buttonIcon.asset->url,
          buttonLink
        }`
      )
      .then(setPrograms)
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "landingPage" && sectionId in ["stories-and-support", "why-join-us"]]{
          sectionId,
          heading,
          description
        }`
      )
      .then((sections) => {
        sections.forEach((section) => {
          if (section.sectionId === "stories-and-support") {
            setStoriesSection(section);
          } else if (section.sectionId === "why-join-us") {
            setWhyJoinUsSection(section);
          }
        });
      })
      .catch(console.error);
  }, []);

  return (
    <div className="JoinUs w-full font-poppins relative">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          zIndex: -1,
        }}
      />

      {/* WHY JOIN US section */}
      <div className="px-4 sm:px-6 py-8 relative">
        {whyJoinUsSection && (
          <>
            <div className="flex justify-center md:justify-end mb-5">
              <div
                className="w-full md:w-5/12 rounded-lg p-6 md:p-10 shadow-lg mt-56 md:mt-20"
                style={{ backgroundColor: "#E1E0FF", color: "#805DC1" }}
              >
                <p className="text-sm font-light leading-relaxed text-center">
                  {whyJoinUsSection.description}
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto py-12 px-15 sm:px-6 md:px-12">
              <h2
                style={{ color: "#B089DD" }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10"
              >
                {whyJoinUsSection.heading}
              </h2>

              <div className="flex flex-col md:flex-row md:items-start md:gap-40">
                <div className="w-full md:w-2/5">
                  <div className="aspect-w-3 aspect-h-2 w-full">
                    <ImageCarousel
                      type="whyJoinUsImages"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-2/5 mt-10 md:mt-0 flex flex-col justify-start">
                  <ValueList />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* STORIES AND SUPPORT section */}
      {storiesSection && (
        <div className="relative w-screen py-12">
          {/* Add purple background as a workaround */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#F6F0FF", zIndex: -1 }}
          />
          <div className="max-w-5xl mx-auto text-left relative px-4 sm:px-6 md:px-12">
            <h2
              style={{ color: "#B089DD" }}
              className="text-2xl sm:text-3xl font-bold mb-4 text-[#B089DD]"
            >
              {storiesSection.heading}
            </h2>
            <p className="mb-8 text-base sm:text-lg font-light leading-relaxed">
              {storiesSection.description}
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              {programs.map(
                ({
                  _id,
                  title,
                  description,
                  buttonText,
                  logo,
                  buttonIcon,
                  buttonLink,
                }) => (
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
          </div>
        </div>
      )}
    </div>
  );
}
