import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

import Footer from "./Footer.js";
import GridContainer from "./GridContainer.js";
import TwoUpContent from "./TwoUpContent";

export default function EventPage() {
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
    <main>

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
   
    </main>
  );
}
