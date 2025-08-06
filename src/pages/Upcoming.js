import BgImage from "../img/bg.png";

import Footer from "../components/navigation/Footer.js";
import CalendarComponent from "../components/CalendarComponent.js";

export default function Upcoming() {
  return (
    <div className="font-poppins w-screen">
      <main className="px-6 md:px-12 pt-12">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-wicsPurple">
            Upcoming Events
          </h1>
          <p className="text-base mt-4">
            Explore what’s coming up at WiCS. Our calendar includes technical
            workshops, networking nights, community socials, and more!
          </p>
        </div>
      </main>

      <div
        className="w-full"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          paddingTop: "10rem",
          minHeight: "52rem", 
        }}
      >
  <CalendarComponent />
      </div>

      <Footer />
    </div>
  );
}
