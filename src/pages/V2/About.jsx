import React from "react";
import ImageCarousel from "../../components/ImageCarousel";
import vector from "../../img/line1.svg"
import bg from "../../img/aboutBg.svg";

function About() {
  return (
    <div className="About">
      <img
        src={vector}
        alt="Vector"
        style={{ height: "120px", marginBottom: "-60px" }}
      />
      <div
        className="w-screen relative flex flex-col items-center justify-center px-6 text-center bg-cover bg-top min-h-[800px] py-20 font-poppins"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-5xl text-left pt-10">
          <h2 className="text-xl font-light mb-4">About WiCS</h2>
          <h2 className="text-5xl font-bold mb-4" style={{ color: "#B089DD" }}>
            Where Women in CS Connect and Grow
          </h2>
          <p className="mb-8 text-xl font-light leading-relaxed">
            We aim to build a strong community of women in Computer Science at
            UBC. We seek to empower women by providing opportunities to build
            lasting connections with other women in tech, and supporting each
            other as we progress through our time at UBC!
          </p>
          <div className="w-full">
            <ImageCarousel type="aboutImages" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;