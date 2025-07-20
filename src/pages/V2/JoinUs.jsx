import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import ProgramCard from "../../components/ProgramCard";
import ImageCarousel from "../../components/ImageCarousel";
import ValueList from "../../components/ValueList.js";
import bgTop from "../../img/bgTop.svg";
import bgBottom from "../../img/bgBottom.svg";

export default function JoinUs() {
  const [programs, setPrograms] = useState([]);

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
  }, []);

  return (
    <div className="JoinUs font-poppins w-full">
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
      >
      </div>

      {/* Purple Background */}
      <div
        className="px-6 py-20 text-center"
        style={{ backgroundColor: "#F6F0FF" }}
      >
        {/* Purple Card */}
        <div className="w-full max-w-7xl flex justify-end mx-auto mb-20">
          <div
            className="w-1/2 rounded-lg p-10 shadow-lg"
            style={{
              backgroundColor: "#E1E0FF",
              color: "#805DC1",
              marginRight: "-3rem",
            }}
          >
            <p className="text-sm font-light leading-relaxed text-center">
              * UBC WiCS recognizes that gender is not binary, and that "women"
              may not reflect everyone's identity. We welcome anyone who feels
              comfortable in a space that celebrates and supports the
              experiences of women in computing.
            </p>
          </div>
        </div>

        {/* Why Join Us */}
        <div className="max-w-5xl mx-auto py-15 px-6 md:px-12 flex flex-col">
          <h2
            className="text-5xl font-bold mb-4 text-left"
            style={{ color: "#B089DD" }}
          >
            Why Join Us?
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

        {/* Stories and Support */}
        <div className="max-w-5xl text-left py-20 mx-auto">
          <h2
            className="text-5xl font-bold mb-4 px-6 md:px-12"
            style={{ color: "#B089DD" }}
          >
            Stories and Support
          </h2>
          <p className="mb-8 text-xl font-light leading-relaxed px-6 md:px-12">
            We believe growth comes from both guidance and shared experiences.
            Listen to inspiring voices on our podcast or take part in our
            mentorship program to build connections that matter.
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
