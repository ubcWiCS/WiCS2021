import React from "react";
import GridContainer from "../components/GridContainer.js";
import Footer from "../components/navigation/Footer";

export default function Sponsors() {
  //Get profile data from Sanity Studio

  //Render profile collection
  return (
    <>
      <main className="bg-white p-12 md:p-20">
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
          title="Platinum Sponsors"
          type="sponsor"
        ></GridContainer>
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
          title="Gold Sponsors"
          type="sponsor"
        ></GridContainer>
      </main>
      <Footer />
    </>
  );
}
