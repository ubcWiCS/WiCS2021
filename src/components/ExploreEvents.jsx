import React from "react";

const ExploreEvents = ({ events = [] }) => {
  return (
    <section className="px-6 py-12 my-8">
      <div className="max-w-2xl mx-auto">
        {/* Section Heading */}
        <div className="mb-6 text-left">
          <p className="text-base font-medium font-poppins">Events</p>
          <h2 className="text-3xl font-bold text-wicsPurple font-poppins">
            Explore Your Potential
          </h2>
        </div>

        {/* Event List */}
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="border-b border-wicsPurple pb-3 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-base">{event.title}</h3>
                <p className="text-sm text-wicsPurple">
                  {event.date}
                  {event.dueDate && (
                    <>
                      {" "} | <span className="font-semibold">{event.dueDate}</span>
                    </>
                  )}
                </p>
              </div>

              {/* clickable chevron that opens Google Calendar event in new tab */}
              {event.link ? (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-700 hover:text-wicsPurple"
                >
                  &raquo;
                </a>
              ) : (
                <span className="text-lg text-gray-700">&raquo;</span>
              )}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8 justify-start">
          <button className="px-5 py-2 bg-wicsPurple text-white rounded-full shadow-md hover:opacity-90">
            View Upcoming Events
          </button>
          <button className="px-5 py-2 border-2 border-wicsPurple text-wicsPurple rounded-full hover:bg-wicsPurple/10">
            View Past Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreEvents;
