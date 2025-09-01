import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import SocialMedia from "./SocialMedia.js";
import LoadingSpinner from "./LoadingSpinner.js";
import ActionButton from "./ActionButton.js";
import Footer from "./navigation/Footer";
import { Link } from "react-router-dom";

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
    <SocialMedia color = "#060508D4" url={singlePost.linkedin} width="40px" height="40px" />
  ) : null;

  const myEmail = singlePost.email ? (
    <SocialMedia color = "#060508D4" email="true" url={singlePost.email} width="40px" height="40px" />
  ) : null;

  return (
    <main className="bg-white flex flex-col items-center min-h-screen md:pt-20">
      <section className="container mx-auto px-6 md:px-10 py-10 md:py-16 w-full">
        <article className="mx-auto max-w-5xl shadow-lg overflow-hidden bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 p-8 md:p-12">
            <div className="flex items-start justify-center">
              <img
                className="w-full max-w-md h-auto object-cover rounded-lg"
                src={singlePost.mainImage?.asset?.url}
                alt={singlePost.name || "Profile photo"}
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-poppins font-bold">{singlePost.name}</h1>
              <p className="mt-1 text-sm md:text-base font-semibold font-poppins">{singlePost.role}</p>

              <div className="mt-4 md:prose-base font-poppins leading-relaxed max-w-none">
                <BlockContent
                  blocks={singlePost.body}
                  projectId="xvhe4elt"
                  dataset="production"
                />
              </div>

              <div className="mt-4 flex items-center">
                {linkedIn}
                {myEmail}
              </div>

             
            </div>
            <div className="md:col-span-2 flex justify-center mt-8">
  {singlePost.profileType === "executive" ? (
    <Link
      to="/committee"
      className="inline-flex items-center justify-center rounded-full
      bg-wicsPurple text-white px-10 py-3 font-poppins shadow-md
      hover:opacity-90 hover:shadow-lg focus:outline-none
      focus:ring-2 focus:ring-wicsPurple/40 transition w-full sm:w-auto"
    >
      Back To Team
    </Link>
  ) : (
    <Link
      to="/committee"
      className="inline-flex items-center justify-center rounded-full
      bg-wicsPurple text-white px-10 py-3 font-poppins shadow-md
      hover:opacity-90 hover:shadow-lg focus:outline-none
      focus:ring-2 focus:ring-wicsPurple/40 transition w-full sm:w-auto"
    >
      Back To Faculty Advisors
    </Link>
  )}
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
