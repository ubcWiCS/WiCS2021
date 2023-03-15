import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

import downArrow from "../img/downarrow.png";
import Events from "../img/WicsEventBlob.png";
import Logo from "../img/WiCSLogo.png";

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
      <div className="flex flex-col justify-center items-center w-screen  bg-gradient-to-br from-pink-200 via-indigo-200 to-indigo-400">
        <div className="justify-center items-center h-500 w-200 px-12 py-20">
          <h1 className="sm:text-4xl flex justify-center cursive text-gray-500 font-semibold">
            University of British Columbia
          </h1>
          <br />
          <img
            className="p-10"
            src={Logo}
            alt="WiCS logo"
          />
          <br />
          <h1 className="sm:text-4xl flex justify-center cursive text-gray-500 font-semibold">
            Women in Computer Science
          </h1>
          <div className="flex flex-row items center justify-center sm:flex-col">
              <SocialMedia
                url="https://www.linkedin.com/company/ubcwics/"
                width="35px"
                height="35px"
              ></SocialMedia>
              <SocialMedia
                url="https://www.instagram.com/ubcwics/"
                width="35px"
                height="35px"
              ></SocialMedia>
              <SocialMedia
                url="https://www.facebook.com/ubcwics/"
                width="35px"
                height="35px"
              ></SocialMedia>
              <SocialMedia
                url="https://discord.gg/UBURmZgF"
                width="35px"
                height="35px"
              ></SocialMedia>
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
