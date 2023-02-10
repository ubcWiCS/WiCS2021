import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import Footer from "../components/navigation/Footer.js";
import TwoUpContent from "../components/TwoUpContent";


export default function Contact() {
  const [postData, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contactUs"] | order(pageOrder asc){
          title,
          direction,
          body,
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
    <>
      <main className="bg-white p-12 md:p-20">
        <h1 className="text-5xl flex justify-center cursive text-gray-700 title">
          Contact Us
        </h1>
        {postData &&
          postData.map((post, index) => (
            <section key={index}>
              <TwoUpContent
                title={post.title}
                body={
                  <BlockContent
                    blocks={post.body}
                    projectId="xvhe4elt"
                    dataset="production"
                  />
                }
                imageSrc={post.mainImage.asset.url}
                imageAlt={post.mainImage.alt}
                direction={post.direction}
              ></TwoUpContent>
            </section>
          ))}
      </main>
      <Footer />
    </>
  );
}
