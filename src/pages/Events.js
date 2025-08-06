import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

import Footer from "../components/navigation/Footer.js";
import EventContent from "../components/EventContent";

import { debounce } from "../utils/debounce.js";

export default function Events() {
  const [postData, setPost] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showNoEvents, setShowNoEvents] = useState(false);
  const [selectedYear, setSelectedYear] = useState("All");
  const [years, setYears] = useState([]);



  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "events" ] | order(pageOrder desc){
          _id,  
          title,
          date,
          direction,
          body,
          pageOrder,
          page,
          orderOnPage,
          eventSponsor,
          images[]{
            asset->{url}
          }
        }`
      )
      .then((data) => {
        setPost(data || []);
        setFilteredData(data || []);
        const extractedYears = Array.from(
          new Set(
            data
              .map((event) => {
                const match = event.date?.match(/\b\d{4}\b/); // grabs "2023"
                return match ? match[0] : null;
              })
              .filter((year) => year !== null)
          )
        ).sort((a, b) => b - a);
        
        setYears(["All", ...extractedYears]);

        
      })
      .catch(console.error);
  }, []);


  const debouncedSearch = debounce((searchQuery) => {
    const filtered = postData.filter((event) => {
      const matchQuery = event.title.toLowerCase().includes(searchQuery);
      const matchYear =
        selectedYear === "All" ||
        event.date?.includes(selectedYear)
      return matchQuery && matchYear;
    });
    setFilteredData(filtered);
  }, 500);

  
  useEffect(() => {
    debouncedSearch(query);
  }, [selectedYear]); 

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
    debouncedSearch(searchQuery);
  };

  useEffect(() => {
    let timeoutId;

    if (query && filteredData.length === 0) {
      timeoutId = setTimeout(() => {
        setShowNoEvents(true);
      }, 100);
    } else {
      setShowNoEvents(false);
      if (timeoutId) clearTimeout(timeoutId);
    }
    return () => clearTimeout(timeoutId);
  }, [filteredData, query]);

  return (
    <div className="font-poppins w-screen">
      <main className="bg-white p-12 md:p-20">
      <div className="max-w-xl">
      <h1 className="text-4xl font-bold text-wicsPurple">
            Past Events
          </h1>
          <p className="text-base font-poppins mt-4">
            Explore what’s coming up at WiCS. Our calendar includes technical
            workshops, networking nights, community socials, and more!
          </p>
          </div>
          <div className="flex justify-between items-center mt-4 w-full">
          <input
            type="text"
            placeholder="Search events..."
            value={query}
            onChange={handleSearch}
            className="w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          />

           {years.length > 0 && (
  <div className="flex items-center justify-between  gap-4 mt-4 mb-4">
    <button
      onClick={() => {
        const currentIndex = years.indexOf(selectedYear);
        if (currentIndex < years.length - 1) {
          setSelectedYear(years[currentIndex + 1]);
        }
      }}
      className="bg-wics-lightPurple text-black rounded-md px-2 py-1 text-lg"
    >
     {"<"}
    </button>

    <span className="text-2xl font-poppins">{selectedYear}</span>

    <button
      onClick={() => {
        const currentIndex = years.indexOf(selectedYear);
        if (currentIndex > 0) {
          setSelectedYear(years[currentIndex - 1]);
        }
      }}
      className="bg-wics-lightPurple text-black rounded-md px-2 py-1 text-lg"
    >
     {">"}
    </button>
  </div>
)}
</div>


{filteredData.length > 0 ? (
  filteredData.map((event, index) => (
    <section
      key={event._id}
      className={`mb-8 p-6 max-w-5xl mx-auto ${
        index % 4 === 0
          ? "event-bg-1"
          : index % 4 === 2
          ? "event-bg-2"
          : ""
      }`}
    >
      <EventContent
        title={event.title}
        body={
          <BlockContent
            blocks={event.body}
            projectId="xvhe4elt"
            dataset="production"
          />
        }
        index = {index % 4}
        date={event.date}
        direction={event.direction}
        images={event.images}
      />
    </section>
  ))
) : (
  showNoEvents && (
    <p className="text-center text-gray-600">No events found</p>
  )
)}

      </main>
      <Footer />
    </div>
  );
}
