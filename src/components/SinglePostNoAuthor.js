import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import SocialMedia from "./SocialMedia.js";
import LoadingSpinner from "./LoadingSpinner.js";
import ActionButton from "./ActionButton.js";
import Footer from "./navigation/Footer";

export default function SinglePostNoAuthor() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      name,
      role,
      linkedin,
      email,
      profileType,
      id,
      slug,
      mainImage{
        ...,
        asset->{
          _id,
          url
        }
      },
      body,
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <LoadingSpinner></LoadingSpinner>;

  const linkedIn = singlePost.linkedin ? (
    <SocialMedia url={singlePost.linkedin} width="35px" height="35px" />
  ) : (
    ""
  );

  const myEmail = singlePost.email ? (
    <SocialMedia
      email="true"
      url={singlePost.email}
      width="35px"
      height="35px"
    />
  ) : (
    ""
  );

  return (
    <main className="bg-white flex flex-col justify-start items-center min-h-screen md:pt-20">
      <section className="container rounded-lg mx-auto p-10 md:p-20 transform duration-500 min-h-screen">
        <article className="flex flex-col md:flex-row rounded-lg shadow-lg mx-auto overflow-hidden">
          <img
            className="w-full md:w-7/12 h-auto object-cover"
            src={singlePost.mainImage.asset.url}
            alt={singlePost.name}
          />
          <div className="p-10 flex flex-col justify-center w-full md:w-5/12">
            <div className="subtitle text-sm">{singlePost.name}</div>
            <div className="title text-sm pt-2">{singlePost.role}</div>
            <div className="mt-2 body">
              <BlockContent
                blocks={singlePost.body}
                projectId="xvhe4elt"
                dataset="production"
              />
            </div>
            <div className="flex flex-row">
              <div>{linkedIn}</div>
              <div>{myEmail}</div>
            </div>
          </div>
        </article>
        <div className="m-10 flex justify-center items-center">
          {singlePost.profileType === "executive" ? (
            <ActionButton to="/committee" text="BACK TO TEAM" />
          ) : (
            <ActionButton to="/committee" text="BACK TO FACULTY ADVISORS" />
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
