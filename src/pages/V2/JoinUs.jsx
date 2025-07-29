import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import ProgramCard from "../../components/ProgramCard";
import ImageCarousel from "../../components/ImageCarousel";
import ValueList from "../../components/ValueList.js";
import bgTop from "../../img/bgTop.svg";
import bgBottom from "../../img/bgBottom.svg";

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
    <div className="JoinUs font-poppins w-screen">
      {/* Top Background */}
      <div
        className="bg-no-repeat bg-top bg-contain w-full flex flex-col items-center justify-center px-6 text-center"
        style={{
          backgroundImage: `url(${bgTop})`,
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          paddingTop: "4rem",
        }}
      ></div>

      {/* Purple Background */}
      <div
        className="px-6 py-20 text-center"
        style={{ backgroundColor: "#F6F0FF" }}
      >
        {whyJoinUsSection && (
          <>
            <div
              className="w-screen max-w-none flex justify-end mb-20 px-6"
              style={{ position: "relative" }}
            >
              <div
                className="w-5/12 rounded-lg p-10 shadow-lg"
                style={{
                  backgroundColor: "#E1E0FF",
                  color: "#805DC1",
                  position: "relative",
                  right: 0,
                }}
              >
                <p className="text-sm font-light leading-relaxed text-center">
                  {whyJoinUsSection.description}
                </p>
              </div>
            </div>

            <div className="max-w-5xl mx-auto py-15 px-6 md:px-12 flex flex-col">
              <h2
                className="text-5xl font-bold mb-4 text-left"
                style={{ color: "#B089DD" }}
              >
                {whyJoinUsSection.heading}
              </h2>

              <div className="w-full flex justify-between pt-10">
                <div style={{ width: "42%" }}>
                  <ImageCarousel type="whyJoinUsImages" />
                </div>
                <div className="w-2/5">
                  <ValueList />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Stories and Support Section */}
        {storiesSection && (
          <div className="max-w-5xl text-left py-20 mx-auto">
            <h2
              className="text-5xl font-bold mb-4 px-6 md:px-12"
              style={{ color: "#B089DD" }}
            >
              {storiesSection.heading}
            </h2>
            <p className="mb-8 text-xl font-light leading-relaxed px-6 md:px-12">
              {storiesSection.description}
            </p>

            <div className="flex flex-wrap gap-8 justify-center">
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
        )}
      </div>

      {/* Bottom Background */}
      <div
        className="w-full bg-no-repeat bg-bottom bg-contain"
        style={{
          backgroundImage: `url(${bgBottom})`,
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          height: "50px",
        }}
      />
    </div>
  );
}
