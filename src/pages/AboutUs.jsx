import { useState, useEffect } from "react";
import sanityClient from "../client.js";
import aboutUsBanner from "../img/aboutUsBanner.png";
import ColorBgFooter from "../components/navigation/ColorBgFooter";
import ActionButton from "../components/ActionButton";
import BlockContent from "@sanity/block-content-to-react";

export default function AboutUs() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"] | order(pageOrder asc){
      _id,
      title,
      body,
      pageOrder
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  if (!postData) return <div>Loading...</div>;

  return (
    <>
      <main className="bg-white">
        <div className="relative w-full">
          <img
            src={aboutUsBanner}
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-5xl md:text-5xl font-poppins text-wicsPurple font-bold transform -translate-y-6 md:-translate-y-10">
            About Us
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 font-poppins">
          {postData.map((post) => (
            <article key={post._id} className="mb-16">
              <h2 className="text-3xl font-bold text-wicsPurple mb-4">
                {post.title}
              </h2>

              <div className="prose max-w-none">
                <BlockContent blocks={post.body} />
              </div>
            </article>
          ))}
        </div>

        {/* Contact Button */}
        <div className="m-10 flex justify-center items-center">
          <ActionButton to="/contact" text="CONTACT US" />
        </div>
      </main>
      <ColorBgFooter />
    </>
  );
}
