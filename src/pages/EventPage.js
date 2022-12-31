import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

import Footer from "../components/navigation/Footer.js";
import EventContent from "../components/EventContent";

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
        images[]{
          asset->{url}
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
                direction={event.direction}
                images={event.images}
             />
            </section>
          ))}
        <Footer></Footer>
    </main>
  );
}

