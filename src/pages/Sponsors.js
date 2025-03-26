import React from "react";
import GridContainer from "../components/GridContainer.js";
import Footer from "../components/navigation/Footer";

export default function Sponsors() {
  //Get profile data from Sanity Studio

  //Render profile collection
  return (
    <>
      <main className="bg-white p-12 md:p-20 flex flex-col gap-24">
        <GridContainer
          queryString={`*[_type == "sponsor" && sponsorLevel == "platinum"] | order(pageOrder asc){
      name,
      slug,
      sponsorLevel,
      pageOrder,
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
          queryString={`*[_type == "sponsor" && sponsorLevel == "gold"] | order(pageOrder asc){
      name,
      slug,
      sponsorLevel,
      pageOrder,
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
         <GridContainer 
              queryString={`*[_type == "sponsor" && sponsorLevel == "silver"] | order(pageOrder asc){
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
          title="Silver Sponsors"
          type="sponsor"
        ></GridContainer> 
        <GridContainer 
          queryString={`*[_type == "partner"] | order(pageOrder asc){
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
          title="Partners"
          type="partner"
          >
        </GridContainer>
        <GridContainer
          queryString={`*[_type == "sponsor" && sponsorLevel == "past"] | order(pageOrder asc){
            name,
            slug,
            sponsorLevel,
            pageOrder,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
            }
          }`}
        title="Past Sponsors"
        type="sponsor"
      ></GridContainer>
      </main>
      <Footer />
    </>
  );
}
