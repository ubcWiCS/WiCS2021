import React, { useState } from "react";

import Footer from "../components/navigation/Footer.js";

export default function Techforward() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const handleSpeakerCardClick = (speakerId) => {
    const speaker = speakers.find((s) => s.id === speakerId);
    setSelectedSpeaker(speaker);
  };

  const schedule = [
    { time: "9:00am", desc: "event", speaker_id: "0" },
    { time: "10:00am", desc: "keynote", speaker_id: "1" },
    { time: "11:00am", desc: "event", speaker_id: "2" },
    { time: "11:00am", desc: "event", speaker_id: "3" },
    { time: "11:00am", desc: "event", speaker_id: "4" },
    { time: "11:00am", desc: "event", speaker_id: "5" },
    { time: "11:00am", desc: "event", speaker_id: "6" },
  ];
  
  const speakers = [
    { id: "0", name: "First Last", company: "company 1", desc: "short description of speaker/talk", photo: "/path/to/image1" },
    { id: "1", name: "fgdf aadfdsf", company: "company 2", desc: "short description of speaker/talk", photo: "/path/to/image2" },
    { id: "2", name: "asdfadsf asddgd", company: "company 3", desc: "short description of speaker/talk", photo: "/path/to/image3" },
    { id: "3", name: "aerfe add", company: "company 3", desc: "short description of speaker/talk", photo: "/path/to/image3" },
    { id: "4", name: "jakfkj ajkrgek", company: "company 3", desc: "short description of speaker/talk", photo: "/path/to/image3" },
    { id: "5", name: "ggsbg ndgnn", company: "company 3", desc: "short description of speaker/talk", photo: "/path/to/image3" },
    { id: "6", name: "afafbfd rgtrhg", company: "company 3", desc: "short description of speaker/talk", photo: "/path/to/image3" },
  ];

  const prices = [
    { name: "Early Bird", deadline: new Date("December 15, 2023"), price: 5},
    { name: "Regular", deadline: new Date("December 31, 2024"), price: 10},
    { name: "Day Of", deadline: new Date("January 18, 2025"), price: 15},
  ];

  const faqs = [
    { question: "Do I need to be an engineering/computer science student to attend?", answer: "No"},
    { question: "Do I need to be an engineering/computer science student to attend?", answer: "No"},
    { question: "Do I need to be an engineering/computer science student to attend?", answer: "No"},
  ];

  return (
    <div>
      <main className="text-center bg-purple-200 px-40">
        <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
          <a href="#hero" className="block w-4 h-4 bg-white rounded-full hover:bg-purple-700" title="Hero"></a>
          <a href="#about" className="block w-4 h-4 bg-white rounded-full hover:bg-purple-700" title="About"></a>
          <a href="#sponsors" className="block w-4 h-4 bg-white rounded-full hover:bg-purple-700" title="Sponsors"></a>
          <a href="#schedule_speakers" className="block w-4 h-4 bg-white rounded-full hover:bg-purple-700" title="Schedule and Speakers"></a>
          <a href="#pricing" className="block w-4 h-4 bg-white rounded-full hover:bg-purple-700" title="Pricing"></a>
          <a href="#faq" className="block w-4 h-4 bg-white rounded-full hover:bg-purple-700" title="FAQ"></a>
        </nav>

        <section id="hero" className="h-screen flex flex-col items-center justify-center text-center">
          <h1 className="text-9xl font-bold text-black">TECH<span className="text-purple-600">forward</span></h1>
          <p className="text-lg mt-4">bridging the gap between engineering and computer science</p>
          <button className="bg-black text-white font-bold py-2 px-6 rounded mt-6 hover:bg-gray-800">
            Register
          </button>
          <div className="mt-6 space-y-1">
            <p>📅 January 18th, 2025</p>
            <p>📍 UBC Alumni Center</p>
            <p>🕘 9:00 am - 2:00 pm</p>
          </div>
        </section>

        <section id="about" className="flex pb-20 md:pl-10">
          <div className="w-1/2">
            <h2 className="text-6xl font-bold text-left mb-8">ABOUT</h2>
            <div className="text-left">
              <p className="text-lg">
                TECHforward is an <span className="font-bold">in-person conference</span> aiming to bridge the gap between engineering and computer science. All <span className="font-bold">female-identifying UBC students</span> and allies interested in engineering and/or computer science are invited to attend, for the opportunity to <span className="font-bold">network</span> with professionals in various related fields!
              </p>
            </div>
          </div>
        </section>

        <section id="sponsors" className="py-20">
          <h2 className="text-6xl font-bold text-center mb-8">SPONSORS</h2>
          <p>insert sponsor logos</p>
        </section>

        <section id="schedule_speakers" className="py-20 my-20 bg-purple-100 rounded-lg">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold text-center mb-8">SCHEDULE</h2>
              <div className="space-y-4">
                {schedule.map(({time,desc,speaker_id}, idx) => {
                  return (
                    <div 
                      key={idx} 
                      className="bg-white p-4 rounded shadow text-left"
                      onClick={() => handleSpeakerCardClick(speaker_id)}
                    >
                      <p className="font-bold">{time}</p>
                      <p>{desc}</p>
                    </div>       
                  )
                })}
              </div>
            </div>
            <div>
              <h2 className="text-6xl font-bold text-center mb-8">SPEAKERS</h2>
                <div className="text-center bg-white p-10 shadow rounded">
                  {selectedSpeaker ? (
                    <div>
                      <img
                        src={selectedSpeaker.photo}
                        alt="speaker name"
                        className="w-48 h-48 mx-auto rounded-full mb-4 border-4"
                      />
                      <h2 className="text-xl font-bold">{selectedSpeaker.name}</h2>
                      <p className="">{selectedSpeaker.company}</p>
                      <p className="">{selectedSpeaker.desc}</p>
                    </div>
                ) : (
                  <p className="text-center">Click a schedule item to see speaker details</p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
        <h2 className="text-6xl font-bold text-center mb-8">PRICING</h2>
        <div className="flex flex-row justify-center space-x-10">
        {prices.map(({ name, deadline, price, id }) => {
          const isPastDeadline = deadline < new Date();
          return (
            <div
              key={id}
              className={`flex flex-col w-100 h-64 p-6 text-center justify-center rounded-md shadow-lg ${
                isPastDeadline
                  ? "bg-gray-300 text-gray-500 opacity-50 cursor-not-allowed"
                  : "bg-white"
              }`}
            >
              <h3 className="text-4xl font-bold">{name}</h3>
              <p className="mb-4 mt-2">Purchase by {deadline.toDateString()}</p>
              <h3 className="text-3xl font-bold">${price}</h3>
            </div>
          );
        })}
        
        </div>
      </section>
      

      <section id="faq" className="flex py-20">
        <div className="w-1/3">
          <h2 className="text-6xl font-bold text-center mb-8">FAQ</h2>
        </div>
        <div className="w-2/3">
          {faqs.map(({question,answer}, idx) => {
            return (
              <div key={idx} className="mb-10 bg-purple-100 rounded-lg p-4">
                <div className="text-left text-xl pb-2">
                  {question}
                </div>
                <div className="text-left">
                  {answer}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
