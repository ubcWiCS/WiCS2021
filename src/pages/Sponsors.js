import React from "react";
import GridContainer from "../components/GridContainer.js";
import Footer from "../components/navigation/Footer";

export default function Sponsors() {
  //Get profile data from Sanity Studio

  //Render profile collection
  return (
    <>
      <main className="bg-white p-12 md:p-20">
      <h1 className="text-4xl flex justify-center cursive text-gray-500 font-semibold">
            Platinum Sponsors
          </h1>
        <GridContainer
          queryString={`*[_type == "sponsor" && sponsorLevel == "Platinum"] | order(pageOrder asc){
      name,
      slug,
      sponsorLevel,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`}
          title="Sponsors"
          type="sponsor"
        ></GridContainer>
             <h1 className="text-4xl flex justify-center cursive text-gray-500 font-semibold">
             Gold Sponsors
          </h1>
        <GridContainer
          queryString={`*[_type == "sponsor" && sponsorLevel == "Gold"] | order(pageOrder asc){
      name,
      slug,
      sponsorLevel,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`}
          type="sponsor"
        ></GridContainer>
      </main>
      <Footer />
    </>
  );
}
