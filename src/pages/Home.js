import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import Logo from "../img/WiCSBackGround.png";
import Footer from "../components/navigation/Footer";
import SocialMedia from "../components/SocialMedia";
import NewsletterSignup from "../components/NewsletterSignupTailwind.jsx";
import ExploreEvents from "../components/ExploreEvents.jsx";
import About from "./V2/About.jsx";
import JoinUs from "./V2/JoinUs.jsx";

export default function Home() {
  const [postData, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "twoUp"] | order(pageOrder asc){
      title,
      direction,
      body,
      pageOrder,
      page,
      orderOnPage,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  // TODO: get rid of mock data and replace with real data later 
  const mockEvents = [
    {
      title: "YouCode 2026 Hackathon",
      date: "April 2 - April 3",
      dueDate: "Application due March 21"
    },
    {
      title: "Tri Mentorship Program 2025/26",
      date: "September 7 - March 29"
    },
    {
      title: "TechForward 2026",
      date: "October 5"
    }
  ];
  

  return (
    <main className="flex flex-col w-full">
      <div className="flex flex-col justify-center items-center w-screen  bg-gradient-to-b from-wicsPink  to-wicsIndigo mb-40 sm:mb-0">
      <div className="relative flex flex-col items-center justify-center">
      <img className="p-20" src={Logo} alt="WiCS logo" />
      <div className="absolute flex flex-col items-center">
      <h1 className="!font-poppins sm:text-5xl text-center" style={{
    textShadow: `
      0 0 30px rgba(255,255,255,1),
      0 0 50px rgba(255,255,255,0.9),
      0 0 90px rgba(255,255,255,0.8)
    `
  }}>
  <span className="font-extrabold">UBC’s</span> <span className="font-semibold">network for</span> <br /> <span className="font-extralight text-gray-700">*</span><span className="font-semibold">women in</span> <span className="text-wicsPurple font-bold">computing</span>
</h1>
        <div className="flex flex-row justify-center mt-3">
          <SocialMedia url="https://www.linkedin.com/company/ubcwics/" width="48px" height="48px" color="#FAEAFF" />
          <SocialMedia url="https://www.instagram.com/ubcwics/" width="48px" height="48px"color="#FAEAFF" />
          <SocialMedia url="https://www.facebook.com/ubcwics/" width="48px" height="48px" color="#FAEAFF"/>
          <SocialMedia url="https://discord.gg/jvqdhrCk3z" width="48px" height="48px" color="#FAEAFF" />
        </div>
      </div>

    </div>

      </div>
      <div className="flex flex-col items-center text-center bg-[#fdfdfb] py-10 my-10">
      <h2 className="text-2xl font-bold mb-2">Don’t Miss Out!</h2>
      <p className="text-gray-700 mb-6">
        Sign up for our newsletter to get latest resources, tips and upcoming events
      </p>
    <NewsletterSignup/>
    </div>
    
      <About />
      <ExploreEvents events={mockEvents} />
      <JoinUs/>
      <Footer />
    </main>
  );
}
