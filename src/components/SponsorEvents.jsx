import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import LoadingSpinner from "./LoadingSpinner.js";
import Footer from "./navigation/Footer";
import ActionButton from "./ActionButton.js";

import EventContent from "../components/EventContent";

export default function SponsorEvents() {
  const [postData, setPost] = useState(null);
 const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "events" && eventSponsor == "${slug}" ] | order(pageOrder desc){
            title,
            date,
            direction,
            body,
            page,
            orderOnPage,
            eventSponsor,
            images[]{
              asset->{url}
            }
          }`
      )
      .then((data) => {
        setPost(data)
      })
      .catch(console.error);
  }, [slug]);

  if (!postData) return <LoadingSpinner></LoadingSpinner>;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
    <main className="bg-white p-12 md:p-20">
     <h1 className="text-5xl flex justify-center cursive text-gray-700 title">
         Past {capitalizeFirstLetter(slug)} Events
        </h1>
        <br />
        {postData.length === 0 ? 
        <p className="text-2xl flex justify-center cursive text-gray-700 title">No events yet!</p> 
        : null}
          {postData &&
          postData.map((event, index) => (
            <section key={index}>
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
        <div className="m-10 flex justify-center items-center">
          <ActionButton to="/sponsors" text="BACK TO SPONSORS" />
        </div>
        </main>
      <Footer></Footer>
    </>
  );
}
