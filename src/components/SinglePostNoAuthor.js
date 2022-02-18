import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import SocialMedia from "./SocialMedia.js";
import LoadingSpinner from "./LoadingSpinner.js";

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
      id,
      slug,
      mainImage{
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
    <SocialMedia url={singlePost.linkedin} />
  ) : (
    ""
  );

  const myEmail = singlePost.email ? (
    <SocialMedia email="true" url={singlePost.email} />
  ) : (
    ""
  );

  return (
    <main className="bg-white flex justify-center items-center">
      <section className="container rounded-lg mx-auto p-10 md:p-20 transform duration-500">
        <article className="flex rounded-lg flex-wrap md:flex-nowrap shadow-lg mx-auto">
          <img
            className="w-full md:w-52 h-auto object-cover md:rounded-l-lg"
            src={singlePost.mainImage.asset.url}
            alt={singlePost.name}
          />
          <div className="p-10 my-auto">
            <div className="subtitle text-sm">{singlePost.name}</div>
            <div className="title text-sm pt-2">{singlePost.role}</div>
            <p className="mt-2 body">
              <BlockContent
                blocks={singlePost.body}
                projectId="xvhe4elt"
                dataset="production"
              />
            </p>
            <div className=" flex flex-row">
              <div>{linkedIn}</div>
              <div>{myEmail}</div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
