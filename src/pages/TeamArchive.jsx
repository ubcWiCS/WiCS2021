import React from "react";
import { NavLink } from "react-router-dom";

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
          2021 - 2022
        </p>
        <TableContainer
          queryString={`*[_type == "teamArchive" && year == "2021" ] | order(pageOrder asc){
      name,
      role,
      year
    }`}
        ></TableContainer>
        <p className="text-3xl flex justify-center cursive text-gray-700 title">
          2020 - 2021
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
          2019 - 2020
        </p>
        <TableContainer
          queryString={`*[_type == "teamArchive" && year == "2019" ] | order(pageOrder asc){
      name,
      role,
      year
    }`}
          path="teamArchive"
        ></TableContainer>
        <NavLink to="/committee" className="flex justify-center ">
          <p className="max-w-sm text-2xl px-3 py-2 rounded-md cursive text-gray-700 title bg-gradient-to-br hover:from-pink-200 hover:via-indigo-200 hover:to-indigo-400 text-gray-600">
          Back to the current team
          </p>
        </NavLink>
      </main>
      <Footer></Footer>
    </>
  );
}
