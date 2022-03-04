import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import Emoji from "./Emoji.js";
import LoadingSpinner from "./LoadingSpinner.js";
import ProfileCard from "./ProfileCard.js";
import SponsorCard from "./SponsorCard.js";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function GridContainer(props) {
  const queryString = props.queryString;
  //Get profile data from Sanity Studio
  const [postData, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(queryString)
      .then((data) => setPost(data))
      .catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!postData) return <LoadingSpinner></LoadingSpinner>;

  //Render profile collection
  return (
    <main className="bg-white min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl pb-4 flex justify-center cursive text-gray-700 title">
          {props.title}
        </h1>
        <h2 className="text-lg body flex justify-center mb-12">
          {props.subTitle}&nbsp;&nbsp;
          <Emoji symbol={props.symbol} label="hand waving" />
        </h2>
        <div
          className={
            props.type === "profile"
              ? "grid md:grid-cols-3 lg:grid-cols-4 gap-8"
              : "grid md:grid-cols-2 lg:grid-cols-3 gap-24"
          }
        >
          {postData &&
            postData.map((object, index) =>
              props.type === "profile" ? (
                <ProfileCard
                  slug={object.slug.current}
                  imageUrl={urlFor(object.mainImage).url()}
                  imageAlt={object.mainImage.alt}
                  name={object.name}
                  role={object.role}
                  path={props.path}
                  index={index}
                ></ProfileCard>
              ) : (
                <SponsorCard
                  slug={object.slug.current}
                  imageUrl={urlFor(object.mainImage.asset).url()}
                  imageAlt={object.mainImage.alt}
                  index={index}
                  sponsorLevel={object.sponsorLevel}
                  name={object.name}
                ></SponsorCard>
              )
            )}
        </div>
      </section>
    </main>
  );
}
