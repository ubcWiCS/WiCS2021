import React from "react";
import { NavLink } from "react-router-dom";

import GridContainer from "../components/GridContainer.js";
import Footer from "../components/navigation/Footer.js";

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
          subTitle="Meet our executive team!"
          type="profile"
          symbol="👋"
        ></GridContainer>
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
          symbol="🎓"
        ></GridContainer>
        <NavLink to="/team-archive" className="flex justify-center ">
          <p className="max-w-sm text-2xl px-3 py-2 rounded-md cursive text-gray-700 title bg-gradient-to-br hover:from-pink-200 hover:via-indigo-200 hover:to-indigo-400 text-gray-600">
            See our past executive teams
          </p>
        </NavLink>
      </main>
      <Footer></Footer>
    </>
  );
}
