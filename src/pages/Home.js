import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

import Events from "../img/WicsEventBlob.png";
import Logo from "../img/WiCSBackGround.png";

import Button from "../components/Button.js";
import Calendar from "../components/CalendarComponent";
import Emoji from "../components/Emoji.js";
import Footer from "../components/navigation/Footer";
import SocialMedia from "../components/SocialMedia";
import TwoUpContent from "../components/TwoUpContent";

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
  <span className="font-extrabold">UBC’s</span> <span className="font-semibold">network for</span> <br /> <span className="font-extralight text-gray">*</span><span className="font-semibold">women in</span> <span className="text-wicsPurple font-bold">computing</span>
</h1>


        <div className="flex flex-row justify-center mt-3">
          <SocialMedia url="https://www.linkedin.com/company/ubcwics/" width="48px" height="48px" />
          <SocialMedia url="https://www.instagram.com/ubcwics/" width="48px" height="48px" />
          <SocialMedia url="https://www.facebook.com/ubcwics/" width="48px" height="48px" />
          <SocialMedia url="https://discord.gg/jvqdhrCk3z" width="48px" height="48px" />
        </div>
      </div>
    </div>

      </div>
      <TwoUpContent
        title="Events"
        body={
          <div className="flex flex-col">
            <p className="pb-2 body">
              Want to stay up to date? Follow us on socials above!&nbsp;&nbsp;
              <Emoji symbol="🎉" label="search" />
            </p>
            
            <p className="pb-4 pt-6 body">
              Or sign up for one of our events here: &nbsp;&nbsp;
            </p>
            <div className="flex items-center">
              <Button
                link="https://linktr.ee/UBCWiCS"
                text="Sign Up!"
                type="external"
                width="w-2/4"
              ></Button>
            </div>
          </div>
        }
        imageSrc={Events}
        imageAlt="Image of women chatting"
        direction="textLeft"
      ></TwoUpContent>
      <Calendar />
      {postData &&
        postData.map((twoUp, index) => (
          <section key={index}>
            <TwoUpContent
              key={index}
              title={twoUp.title}
              body={
                <BlockContent
                  blocks={twoUp.body}
                  projectId="xvhe4elt"
                  dataset="production"
                />
              }
              imageSrc={twoUp.mainImage.asset.url}
              imageAlt={twoUp.mainImage.alt}
              direction={twoUp.direction}
            ></TwoUpContent>
          </section>
        ))}
      <Footer />
    </main>
  );
}
