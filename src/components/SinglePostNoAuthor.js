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
    const query = `*[slug.current == $slug][0]{
      title,
      name,
      role,
      linkedin,
      email,
      profileType,
      id,
      slug,
      mainImage{
        asset->{_id, url}
      },
      body
    }`;
    sanityClient
      .fetch(query, { slug })
      .then((data) => setSinglePost(data))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <LoadingSpinner />;

  const linkedIn = singlePost.linkedin ? (
    <SocialMedia
      color="#060508D4"
      url={singlePost.linkedin}
      width="40px"
      height="40px"
    />
  ) : null;

  const myEmail = singlePost.email ? (
    <SocialMedia
      color="#060508D4"
      email="true"
      url={singlePost.email}
      width="40px"
      height="40px"
    />
  ) : null;

  return (
    <main className="bg-white flex flex-col min-h-screen">
      <section className="w-full px-6 py-10 md:px-10 md:py-16">
        <article className="mx-auto w-full max-w-5xl shadow-lg overflow-hidden bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 p-6 md:p-12">
            {/* Image */}
            {singlePost.mainImage?.asset?.url && (
              <div className="flex justify-center md:justify-start">
                <img
                  className="w-full max-w-xs md:max-w-md h-auto object-cover rounded-lg"
                  src={singlePost.mainImage.asset.url}
                  alt={singlePost.name || "Profile photo"}
                />
              </div>
            )}

            {/* Content */}
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-poppins font-bold">
                {singlePost.name}
              </h1>
              <p className="mt-1 text-sm md:text-base font-semibold font-poppins">
                {singlePost.role}
              </p>

              {singlePost.body && (
                <div className="mt-4 md:prose-base font-poppins leading-relaxed max-w-none">
                  <BlockContent
                    blocks={singlePost.body}
                    projectId="xvhe4elt"
                    dataset="production"
                  />
                </div>
              )}

              {/* Social Media */}
              <div className="mt-4 flex space-x-4">
                {linkedIn}
                {myEmail}
              </div>

              {/* Action Button */}
              <div className="mt-4">
                {singlePost.profileType === "executive" ? (
                  <ActionButton to="/committee" text="BACK TO TEAM" />
                ) : (
                  <ActionButton
                    to="/committee"
                    text="BACK TO FACULTY ADVISORS"
                  />
                )}
              </div>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
}
