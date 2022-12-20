import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import LoadingSpinner from "../components/LoadingSpinner.js";
import Button from "../components/Button.js";
import Footer from "../components/navigation/Footer";

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
      id,
      sponsorLevel,
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

  return (
    <main className="bg-white flex flex-col justify-start items-center min-h-screen pt-20">
      <section className="container rounded-lg mx-auto p-10 md:p-20 transform duration-500 min-h-screen">
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
              {"Sponsor level: " + singlePost.sponsorLevel}
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
        <div className="m-10 flex justify-center items-center">
          <Button
            type="local"
            link="/sponsors"
            text="Back to Sponsors"
          ></Button>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
