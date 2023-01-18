import React from "react";

import TableContainer from "../components/TableContainer";
import Footer from "../components/navigation/Footer";

export default function TeamArchive() {

  return (
    <>
      <main className="bg-white p-12 md:p-20">
        <p className="text-5xl flex justify-center cursive text-gray-700 title">
          Past Executive Teams
        </p>
        <br />
        <p className="text-3xl flex justify-center cursive text-gray-700 title">
          2021
        </p>
        <TableContainer
          queryString={`*[_type == "teamArchive" && year == "2021" ] | order(pageOrder asc){
      name,
      role,
      year
    }`}
        ></TableContainer>
        <p className="text-3xl flex justify-center cursive text-gray-700 title">
          2020
        </p>
        <TableContainer
          queryString={`*[_type == "teamArchive" && year == "2020" ] | order(pageOrder asc){
      name,
      role,
      year
    }`}
          path="teamArchive"
        ></TableContainer>
        <p className="text-3xl flex justify-center cursive text-gray-700 title">
          2019
        </p>
        <TableContainer
          queryString={`*[_type == "teamArchive" && year == "2019" ] | order(pageOrder asc){
      name,
      role,
      year
    }`}
          path="teamArchive"
        ></TableContainer>
      </main>
      <Footer></Footer>
    </>
  );
}
