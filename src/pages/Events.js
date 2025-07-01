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
      })
      .catch(console.error);
  }, []);


  const debouncedSearch = debounce((searchQuery) => {
    const filtered = postData.filter((event) =>
      event.title.toLowerCase().includes(searchQuery)
    );
    setFilteredData(filtered);
  }, 500);

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
    <>
      <main className="bg-white p-12 md:p-20">
        <p className="text-5xl flex justify-center cursive text-gray-700 title">
          Past Events
        </p>

        <div className="flex justify-center m-8">
          <input
            type="text"
            placeholder="Search events..."
            value={query}
            onChange={handleSearch}
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        {filteredData.length > 0 ? (
          filteredData.map((event) => (
            <section key={event._id} className="mb-8">
              <EventContent
                title={event.title}
                body={
                  <BlockContent
                    blocks={event.body}
                    projectId="xvhe4elt"
                    dataset="production"
                  />
                }
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
    </>
  );
}
