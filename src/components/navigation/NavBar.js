import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import WicsLogo from "../../img/roundLogo.png";
import { Link, NavLink, useLocation } from "react-router-dom";



import NavBarItem from "./NavBarItem";
import NavBarItemMobile from "./NavBarItemMobile";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isEventsActive = location.pathname.startsWith("/events");

  
  return (
    <div className="bg-white sticky top-0 z-10">
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
        <NavLink to="/" exact className="flex items-center gap-x-3 flex-shrink-0">
          <img className="h-10 w-10" src={WicsLogo} alt="Workflow" />
          <div
            className="px-3 py-2 rounded-md text-sm font-medium bg-transparent"
            style={{ color: "#B089DD"}}
          >
            UBC Women in Computer Science
          </div>
        </NavLink>

  <div className="hidden md:block">
    <div className="flex items-baseline space-x-4">
      <NavBarItem text="Home" path="/" />

      <div className="navbar-dropdown">
      <button
    className={`px-3 py-2 rounded-md text-sm font-medium ${
          isEventsActive
            ? "font-bold"
            : "text-gray-600 hover:text-black"
        }`}
      >
        Events
      </button>

        <div className="navbar-dropdown-content">
          <NavLink
            to="/events/upcoming"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
          >
            Upcoming Events
          </NavLink>
          <NavLink
            to="/events/past"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
          >
      Past Events
    </NavLink>
  </div>
</div>

      <NavBarItem text="Committee" path="/committee" />
      <NavBarItem text="Sponsors" path="/sponsors" />
      <Link to={{ pathname: "https://ubccsss.org/tcf/" }} target="_blank" rel="noopener noreferrer">
        <span className="bg-gradient-to-br nav hover:text-black px-3 py-2 rounded-md text-sm">
          TCF
        </span>
      </Link>
      <NavBarItem text="Contact Us" path="/contact" />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white bg-gradient-to-br hover:from-pink-200 hover:via-indigo-200 hover:to-indigo-400 inline-flex items-center justify-center p-2 rounded text-gray-600 hover:text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  to="/"
                  exact
                  className="bg-gradient-to-br hover:from-pink-200 hover:via-indigo-200 hover:to-indigo-400 text-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  WiCS
                </NavLink>
                <NavBarItemMobile text="Upcoming Events" path="/events/upcoming" />
                <NavBarItemMobile text="Past Events" path="/events/past" />
                <NavBarItemMobile text="Committee" path="/committee" />
                <NavBarItemMobile text="Sponsors" path="/sponsors" />
                {/* <NavBarItemMobile text="TECHforward" path="/techforward" /> */}
                <Link to={{ pathname: "https://ubccsss.org/tcf/" }} target="_blank">
                    <p className="bg-gradient-to-br hover:text-black block px-3 py-2 rounded-md text-base font-medium">
                      TCF
                    </p>
                  </Link>
                <NavBarItemMobile text="Contact Us" path="/contact" />
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
