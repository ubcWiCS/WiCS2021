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
    <div
      className="JoinUs font-poppins w-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "1730px", 
      }}
    >
      <div className="px-6 py-2 text-center">
        {whyJoinUsSection && (
          <>
            <div
              className="w-screen max-w-none flex justify-end mb-5 px-6"
              style={{ position: "relative" }}
            >
              <div
                className="w-5/12 rounded-lg p-10 shadow-lg mt-20 md:mt-35"
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
            <div className="max-w-5xl mx-auto py-15 px-6 md:px-12 flex flex-col">
            <div className="max-w-5xl mx-auto py-15 px-6 md:px-12 flex flex-col items-center">
  
  <div className="flex flex-col items-start" style={{ width: "95%" }}>
    <h2
      className="text-4xl font-bold"
      style={{ color: "#B089DD", marginTop: "-70px" }}
    >
      {whyJoinUsSection.heading}
    </h2>

    <div className="flex justify-start items-center gap-12 pt-10 w-full">
      <div style={{ width: "40%" }}>
        <ImageCarousel type="whyJoinUsImages" height="80vh" />
      </div>
      <div className="w-1/3">
        <ValueList />
      </div>
    </div>
  </div>

</div>
</div>
</div>
          </>
        )}

        {storiesSection && (
          <div className="max-w-5xl text-left py-20 mx-auto">
            <h2
              className="text-3xl font-bold mb-4 px-6 md:px-12"
              style={{ color: "#B089DD", marginTop: "-25px" }}
            >
              {storiesSection.heading}
            </h2>
            <p className="mb-8 text-lg font-light leading-relaxed px-6 md:px-12">
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
    </div>
  );
}
