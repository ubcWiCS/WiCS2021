import React from "react";
import GridContainer from "./GridContainer.js";
import Footer from "./Footer";

export default function Sponsors() {
  //Get profile data from Sanity Studio

  //Render profile collection
  return (
    <main>
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
        subTitle="Say hello to our sponsors!"
        type="sponsor"
        symbol="🥰"
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
        type="sponsor"
      ></GridContainer>
      <GridContainer
        queryString={`*[_type == "sponsor" && sponsorLevel == "Silver"] | order(pageOrder asc){
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
      <Footer></Footer>
    </main>
  );
}
