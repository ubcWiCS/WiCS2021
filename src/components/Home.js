import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import Logo from "../img/WiCSLogo.png";
import TwoUpContent from "./TwoUpContent";
import Footer from "./Footer";

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
    <main className="flex flex-col">
      <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-br from-pink-200 via-indigo-100 to-indigo-400">
        <div className="justify-center items-center h-500 w-200 px-12">
          <img
            className="flex max-h-60 max-w-80 object-fill box-border"
            src={Logo}
            alt="WiCS logo"
          />
        </div>
      </div>
      {postData &&
        postData.map((twoUp) => (
          <section>
            <TwoUpContent
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
      <Footer></Footer>
    </main>
  );
}
