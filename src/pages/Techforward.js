import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import Footer from "../components/navigation/Footer.js";
import rocket from "../img/rocket.png";

export default function Techforward() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const navLink = document.querySelector(`#nav-${entry.target.id}`);
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.remove("bg-purple-500");
              link.classList.add("bg-white");
            });
            navLink.classList.remove("bg-white");
            navLink.classList.add("bg-purple-500");
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [openSessionIndex, setOpenSessionIndex] = useState(null);
  const [openScheduleIndex, setOpenScheduleIndex] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});

  const toggleAnswer = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const toggleSession = (idx) => {
    setOpenSessionIndex(openSessionIndex === idx ? null : idx);
  };

  const toggleSchedule = (idx) => {
    setOpenScheduleIndex(openScheduleIndex === idx ? null : idx);
  };

  const handleFlip = (id) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const schedule = [
    { time: "8:40am - 9:15am", title: "Check-in", details: "Details coming soon!"},
    { time: "9:15am - 9:30am", title: "Opening Ceremony", details: "Details coming soon!"},
    { time: "9:30am - 9:45am", title: "Keynote", details: "Details coming soon!"},
    { time: "10:00am - 12:00pm", title: "Boothing", details: "Details coming soon!"},
    { time: "12:00pm - 12:30pm", title: "Lunch", details: "Details coming soon!"},
    { time: "12:30pm - 2:00pm", title: "Boothing", details: "Details coming soon!"},
  ];

  const sessions = [
    // { 
    //   name: "Christina Kwan", 
    //   company: "Providence Health Care", 
    //   details: "This 30 min talk will focus on providing a mix of personal stories, practical advice, and motivational insights, all while emphasizing how embracing discomfort is crucial for success in IT, particularly for a woman like myself who has faced additional barriers in the field over a career span of 25 years in IT.", 
    //   location: "Jack Poole Hall (left)", 
    //   time: "10:05am - 10:35am",
    // },
    { name: "Talk", company: "", details: "Details coming soon!", location: "", time: "10:05am - 10:35am" },
    { name: "Talk", company: "", details: "Details coming soon!", location: "", time: "10:45am - 11:15am" },
    { name: "Workshop", company: "", details: "Details coming soon!", location: "", time: "10:45am - 11:45am" },
    { name: "Talk", company: "", details: "Details coming soon!", location: "", time: "11:30am - 12:00pm" },
    { name: "Panel", company: "", details: "Details coming soon!", location: "", time: "12:30pm - 1:00pm" },
    { name: "Talk", company: "", details: "Details coming soon!", location: "", time: "1:10pm - 1:35pm" },
  ];

  const prices = [
    { id: "early-bird", name: "EARLY BIRD", deadline: new Date("December 16, 2024"), price: 7 },
    { id: "regular", name: "REGULAR", deadline: new Date("January 16, 2025"), price: 10 },
    { id: "day-of", name: "LAST MINUTE", deadline: new Date("January 18, 2025"), price: 15 },
  ];

  const faqs = [
    { question: "Do I need to be an engineering or computer science student to attend?", answer: "No! TECHforward is open to all female-identifying UBC students and allies." },
    { question: "I'm not a UBC student, can I still attend?", answer: "Unfortunately at this time, TECHforward is only for UBC students. Student numbers will be collected." },
   ];

  return (
    <div className="bg-hero bg-cover">
      <main className="text-center md:px-40 px-10">
        <nav className="fixed md:left-8 left-4 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
          <a href="#hero" id="nav-hero" className="block w-4 h-4 bg-white rounded-full" title="Hero"></a>
          <a href="#about" id="nav-about" className="block w-4 h-4 bg-white rounded-full" title="About"></a>
          <a href="#sponsors" id="nav-sponsors" className="block w-4 h-4 bg-white rounded-full" title="Sponsors"></a>
          <a href="#schedule_speakers" id="nav-schedule_speakers" className="block w-4 h-4 bg-white rounded-full" title="Schedule and Speakers"></a>
          <a href="#pricing" id="nav-pricing" className="block w-4 h-4 bg-white rounded-full" title="Pricing"></a>
          <a href="#faq" id="nav-faq" className="block w-4 h-4 bg-white rounded-full" title="FAQ"></a>
        </nav>
    

        <section id="hero" className="h-screen flex flex-col items-center justify-center text-center">
          <h1 className="md:text-8xl text-4xl font-press-start font-bold text-baby-blue">TECH<span className="md:text-7xl text-3xl">forward</span></h1>
          <p className="text-xl mt-4 font-pt-mono text-white">bridging the gap between engineering and computer science</p>
          <a 
            href="https://wicstechforward.eventbrite.com/" 
            className="bg-baby-purple font-press-start font-bold py-3 px-8 rounded-full mt-6 hover:bg-gray-800 hover:text-white"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Register
          </a>
          <div className="mt-6">
            <p className="font-pt-mono text-light-purple text-lg">📅 January 18th, 2025</p>
            <p className="font-pt-mono text-light-purple text-lg">📍 UBC Alumni Center</p>
            <p className="font-pt-mono text-light-purple text-lg">🕘 9:00 am - 2:00 pm</p>
          </div>
        </section>

        <section id="about" className="flex pb-20 md:pl-10 pl-3">
          <div className="md:w-1/2">
            <h2 className="md:text-6xl text-3xl font-coiny font-bold md:text-left text-white mb-6">ABOUT</h2>
            <div className="text-left">
              <p className="text-lg font-pt-mono text-white">
                TECHforward is an <span className="font-bold">in-person conference</span> aiming to bridge the gap between engineering and computer science. All <span className="font-bold">female-identifying UBC students</span> and allies interested in engineering and/or computer science are invited to attend, for the opportunity to <span className="font-bold">network</span> with professionals in various related fields!
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
          <img
            src={rocket}
            alt="rocket"
            className="md:w-auto md:h-96 object-contain w-0"
          />
        </div>
        </section>

        <section id="sponsors" className="py-32">
          <h2 className="md:text-6xl text-3xl font-coiny font-bold text-center text-white mb-6">SPONSORS</h2>
          <h3 className="text-white font-pt-mono">coming soon...</h3>
        </section>

        <section id="schedule_speakers" className="py-32">
          <div className="md:max-w-6xl mx-auto grid md:grid-cols-2 md:gap-12 gap-3 bg-purple-100 bg-opacity-50 rounded-lg md:p-20 sm:p-5">
            <div>
              <h2 className="md:text-6xl text-3xl font-bold text-center text-white mb-8 font-coiny">SCHEDULE</h2>
              <div className="space-y-4">
                {schedule.map(({time,title,details}, idx) => {
                  return (
                    <div 
                      key={idx} 
                      className="bg-white p-4 rounded-lg shadow-custom-purple text-left hover:text-purple-500"
                    >
                      <button 
                        onClick={() => toggleSchedule(idx)}
                      >
                        <p className="font-pt-mono text-2xl text-left">{title}</p>
                        <p className="font-pt-mono text-xl text-left">{time}</p>
                      </button>
                      {openScheduleIndex === idx && (
                        <div
                          className={`font-pt-mono text-left mt-2 transition-all duration-300 ease-in-out ${
                            openScheduleIndex === idx
                              ? "max-h-screen opacity-100"
                              : "max-h-0 opacity-0 overflow-hidden"
                          }`}
                        >
                          {details}
                        </div>
                      )}
                    </div>       
                  )
                })}
              </div>
            </div>
            <div className="sm:pt-5 md:pt-0">
              <h2 className="md:text-6xl text-3xl font-bold text-center text-white mb-8 font-coiny">SESSIONS</h2>
              <div className="space-y-4">
                {sessions.map(({name,company,details,location,time}, idx) => {
                  return (
                    <div 
                      key={idx} 
                      className="bg-white p-4 rounded-lg shadow-custom-purple text-left hover:text-purple-500"
                    >
                      <button 
                        onClick={() => toggleSession(idx)}
                      >
                        <p className="font-pt-mono text-2xl text-left">{name}</p>
                        <p className="font-pt-mono text-xl text-left">{company}</p>
                        <p className="font-pt-mono text-lg text-left">{location} {time}</p>
                      </button>
                      {openSessionIndex === idx && (
                        <div
                          className={`font-pt-mono text-left mt-2 transition-all duration-300 ease-in-out ${
                            openSessionIndex === idx
                              ? "max-h-screen opacity-100"
                              : "max-h-0 opacity-0 overflow-hidden"
                          }`}
                        >
                          {details}
                        </div>
                      )}
                    </div>       
                  )
                })}
              </div>
            </div>
          </div>
        </section>
        
        <section id="pricing" className="py-32">
          <h2 className="md:text-6xl text-3xl font-coiny font-bold text-center text-white mb-8">PRICING</h2>
          <div className="flex md:flex-row flex-col gap-10 justify-center align-middle items-center">
            {prices.map(({ id, name, deadline, price }) => {
              const isPastDeadline = deadline < new Date();
              const isFlipped = flippedCards[id] || false;

              return (
                <ReactCardFlip
                  key={id}
                  isFlipped={isFlipped}
                  flipDirection="horizontal"
                >
                  {/* Front Side */}
                  <div
                    onClick={() => handleFlip(id)}
                    className={`flex flex-col w-64 md:h-36 p-6 text-center justify-center items-center rounded-lg shadow-custom-purple cursor-pointer hover:text-purple-500 ${
                      isPastDeadline
                        ? "bg-gray-300 text-gray-500 opacity-50"
                        : "bg-white"
                    }`}
                  >
                    <h3 className="md:text-4xl text-2xl font-pt-mono font-bold text-nowrap">
                      {name}
                    </h3>
                    <p className="mt-1 font-pt-mono">
                      Purchase by {deadline.toLocaleDateString()}
                    </p>
                  </div>

                  {/* Back Side */}
                  <div
                    onClick={() => handleFlip(id)}
                    className={`flex flex-col w-64 md:h-36 p-6 text-center justify-center items-center rounded-lg shadow-custom-purple cursor-pointer ${
                      isPastDeadline
                        ? "bg-gray-300 text-gray-500 opacity-50"
                        : "bg-white"
                    }`}
                  >
                    <h3 className="md:text-4xl text-3xl font-pt-mono font-bold text-nowrap">
                      <a 
                        href="https://wicstechforward.eventbrite.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                      ${price}
                      </a>
                    </h3>
                  </div>
                </ReactCardFlip>
              );
            })}
          </div>
        </section>

        <section id="faq" className="md:flex py-32">
        <div className="md:w-1/3">
          <h2 className="md:text-6xl text-3xl font-coiny font-bold text-center text-white mb-8">
            FAQ
          </h2>
        </div>
        <div className="md:w-2/3">
          {faqs.map(({ question, answer }, idx) => (
            <div key={idx} className="mb-10 bg-purple-100 rounded-lg p-4">
              <button
                className="flex justify-between items-center font-coiny text-right text-xl pb-2 w-full focus:outline-none"
                onClick={() => toggleAnswer(idx)}
              >
                <span className="text-2xl pr-5">
                  {openFaqIndex === idx ? "−" : "+"}
                </span>
                <span>{question}</span>
              </button>
              {openFaqIndex === idx && (
                <div
                  className={`font-pt-mono text-right mt-2 transition-all duration-300 ease-in-out ${
                    openFaqIndex === idx
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
