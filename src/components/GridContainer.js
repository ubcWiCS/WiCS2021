// GridContainer.jsx — mobile-first responsive tweaks
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
  const { queryString } = props;
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

  // Utility: choose a layout class that is mobile-first
  const layoutClass = (() => {
    // Force committees to use a grid that stacks to 1 column on mobile
    const isCommittee = /committee/i.test(props?.title || "") || props?.type === "committee";

    if (props.type === "profile" || isCommittee) {
      if (props.title === "Faculty Advisors") {
        // 1 → 2 → 3 cols, centered
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center";
      }
      // default profiles (including Committees): 1 → 2 → 3 → 4 cols
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8";
    }
    if (props.type === "sponsor") {
      // Keep sponsors simple flex layout for now
      return "flex flex-wrap justify-center gap-10";
      }
    // Fallback layout
    return "flex flex-wrap justify-center gap-6 sm:gap-10";
  })();

  return (
    <main className="mb-2 pb-10">
      {/* container paddings so content doesn’t hug the screen edges on mobile */}
      <section className="mx-auto max-w-screen-xl px-4 sm:px-6">
        {props.title && (
          <h1 className=" justify-center flex text-3xl sm:text-4xl md:text-5xl text-center text-wicsPurple font-poppins font-semibold">
            {props.title}
          </h1>
        )}
        <h2 className="text-base sm:text-lg font-poppins justify-center flex mb-8 sm:mb-12 mt-2 text-center">
          {props.subTitle}&nbsp;&nbsp;
          <Emoji symbol={props.symbol} label="hand waving" />
        </h2>

        <div className={layoutClass}>
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

