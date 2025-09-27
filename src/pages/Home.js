import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import Logo from "../img/WiCSBackGround.png";
import Footer from "../components/navigation/Footer";
import SocialMedia from "../components/SocialMedia";
import NewsletterSignup from "../components/NewsletterSignupTailwind.jsx";
import ExploreEvents from "../components/ExploreEvents.jsx";
import About from "./V2/About.jsx";
import JoinUs from "./V2/JoinUs.jsx";
import useGoogleCalendarEvents from "../hooks/useGoogleCalendarEvents";

export default function Home() {
  const CALENDAR_ID = "18qb8b2du4h0brqc9i7tv4v8ok@group.calendar.google.com";
  const GCAL_API_KEY = process.env.REACT_APP_GCAL_API_KEY;

  const [postData, setPost] = useState(null);

  const { events, loading, error } = useGoogleCalendarEvents({
    apiKey: GCAL_API_KEY,
    calendarId: CALENDAR_ID,
    maxResults: 4, // For future devs: you can change this if you want!
    monthsAhead: 12
  });

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
            asset->{ _id, url },
            alt
          }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="flex flex-col w-full">
      {/* Banner */}
      {/* Banner */}
      <section className="relative w-full bg-gradient-to-b from-wicsPink to-wicsIndigo">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="relative flex flex-col items-center justify-center
                    text-center
                    py-12 sm:py-16 lg:py-20
                    min-h-[380px] sm:min-h-[460px] lg:min-h-[560px]">
      
      {/* Logo image stays fully visible */}
      <img
        src={Logo}
        alt="WiCS logo"
        className="w-full max-w-[1000px] h-auto object-contain select-none
                   px-6 sm:px-10 lg:px-16 max-h-[80vh]"
      />

      {/* Overlay content centered on top */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6">
        <h1
          className="font-poppins text-center leading-tight
                     text-2xl sm:text-2xl md:text-4xl lg:text-5xl"
          style={{
            textShadow: `
              0 0 30px rgba(255,255,255,1),
              0 0 50px rgba(255,255,255,0.9),
              0 0 90px rgba(255,255,255,0.8)
            `,
            fontWeight: 600
          }}
        >
          <span className="font-extrabold">UBC’s</span>{" "}
          <span className="font-semibold">network for</span>
          <br />
          <span className="font-extralight text-gray-700">*</span>
          <span className="font-semibold">women in</span>{" "}
          <span className="text-wicsPurple font-bold">computing</span>
        </h1>
<div className="flex flex-row justify-center lg:mt-3 mb:mt-3 sb:mt-1">
          <SocialMedia url="https://www.linkedin.com/company/ubcwics/" width="48px" height="48px" color="#FAEAFF" />
          <SocialMedia url="https://www.instagram.com/ubcwics/" width="48px" height="48px"color="#FAEAFF" />
          <SocialMedia url="https://www.facebook.com/ubcwics/" width="48px" height="48px" color="#FAEAFF"/>
          <SocialMedia url="https://discord.gg/jvqdhrCk3z" width="48px" height="48px" color="#FAEAFF" />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Newsletter section */}
      <div className="flex flex-col items-center text-center bg-[#fdfdfb] py-10 my-10 px-4">
        <h2 className="text-2xl font-bold mb-2">Don’t Miss Out!</h2>
        <p className="text-gray-700 mb-6 max-w-2xl">
          Sign up for our newsletter to get the latest resources, tips, and upcoming events.
        </p>
        <NewsletterSignup />
      </div>

      <About />

      {error && <p className="text-red-600">Failed to load events: {error}</p>}
      <ExploreEvents events={loading ? [] : events} />

      <JoinUs />
      <Footer />
    </main>
  );
}
