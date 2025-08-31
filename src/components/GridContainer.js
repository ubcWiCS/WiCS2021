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
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(queryString)
      .then((data) => setPost(data))
      .catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!postData) return <LoadingSpinner />;
  if (postData.length === 0) return null;

  return (
    <main className="mb-2 pb-10">
      <section className="container mx-auto">
        {props.title && (
          <h1 className="text-5xl flex justify-center text-wicsPurple font-poppins font-semibold">
            {props.title}
          </h1>
        )}
        <h2 className="text-lg font-poppins justify-center flex mb-12 mt-2">
          {props.subTitle}&nbsp;&nbsp;
          <Emoji symbol={props.symbol} label="hand waving" />
        </h2>

        <div
          className={
            props.type === "profile"
              ? props.title === "Faculty Advisors"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center" // faculty: 1 → 2 → 3 cols, centered
                : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" // others: 2 → 3 → 4 cols
              : "flex flex-wrap justify-center gap-10" // sponsors: flexbox, centered
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
                  key={index}
                />
              ) : (
                <div key={index} className="w-60">
                  <SponsorCard
                    slug={object.slug.current}
                    imageUrl={urlFor(object.mainImage.asset).url()}
                    imageAlt={object.mainImage.alt}
                    sponsorLevel={object.sponsorLevel}
                    name={object.name}
                    hasEvent={object.hasEvent}
                    color={props.cardColor}
                  />
                </div>
              )
            )}
        </div>
      </section>
    </main>
  );
}
