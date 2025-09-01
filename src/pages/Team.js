import React from "react";
import GridContainer from "../components/GridContainer";
import Footer from "../components/navigation/Footer";
import ActionButton from "../components/ActionButton";

export default function Team() {
  return (
    <>
      <main className="bg-white p-12 md:p-20">
        <GridContainer
          queryString={`*[_type == "profile" && profileType == "executive"] | order(pageOrder asc){
      name,
      role,
      slug,
      mainImage{
        ...,
        asset->{
          _id,
          url,
        },
        alt
      }
    }`}
          path="profile"
          title="Executive Team"
          subTitle="Meet our team of creators, coders, and change-makers."
          type="profile"
        ></GridContainer>

        <div className="align-center">
          <GridContainer
            queryString={`*[_type == "profile" && profileType == "faculty"]{
      name,
      role,
      slug,
      mainImage{
        ...,
        asset->{
          _id,
          url
        },
        alt
      }
    }`}
            title="Faculty Advisors"
            subTitle="Meet our Faculty Advisors!"
            path="profile"
            type="profile"
            center
          />
        </div>

        <div className="m-10 flex justify-center items-center">
          <ActionButton to="/team-archive" text="SEE OUR PAST EXECUTIVE TEAM" />
        </div>
      </main>
      <Footer />
    </>
  );
}
