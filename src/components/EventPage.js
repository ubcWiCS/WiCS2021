import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

import Footer from "./Footer.js";
import EventContent from "./EventContent";

export default function EventPage() {
    const [postData, setPost] = useState(null);
    useEffect(() => {
      sanityClient
        .fetch(
          `*[_type == "events"] | order(pageOrder desc){
        title,
        date,
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
         <h1 className="text-5xl flex justify-center cursive text-gray-700 title">
         Past Events
        </h1>
          {postData &&
          postData.map((event) => (
            <section key={event.pageOrder}>
              <EventContent
                title={event.title}
                body={
                  <BlockContent
                    blocks={event.body}
                    projectId="xvhe4elt"
                    dataset="production"
                  />
                }
                date={event.date}
                imageSrc={event.mainImage.asset.url}
                imageAlt={event.mainImage.alt}
                direction={event.direction}
             />
            </section>
          ))}
        <Footer></Footer>
    </main>
  );
}

