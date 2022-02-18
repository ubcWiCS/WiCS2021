import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import SocialMedia from "./SocialMedia.js";
import LoadingSpinner from "./LoadingSpinner.js";

export default function SinglePostSponsor() {
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
        <article className="flex rounded-lg flex-wrap shadow-lg mx-auto">
          <img
            className="w-full md:w-52 p-6 h-auto object-cover md:rounded-l-lg"
            src={singlePost.mainImage.asset.url}
            alt={singlePost.name}
          />
          <div className="px-10 pb-10 pt-4 my-auto">
            <div className="uppercase text-sm text-indigo-500 font-semibold">
              {singlePost.name}
            </div>
            <div className="text-gray-600 text-sm font-semibold pt-2">
              {"Sponsor level: " + singlePost.role}
            </div>
            <p className="mt-2 text-slate-500">
              <BlockContent
                blocks={singlePost.body}
                projectId="xvhe4elt"
                dataset="production"
              />
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
