import { BrowserRouter, Route, Switch, useLocation} from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import TeamArchive from "./pages/TeamArchive";
import Techforward from "./pages/Techforward";
import Upcoming from "./pages/Upcoming"; 


import NavBar from "./components/navigation/NavBar";
import SinglePostSponsor from "./components/SinglePostSponsor";
import SinglePostNoAuthor from "./components/SinglePostNoAuthor";
import SponsorEvents from "./components/SponsorEvents";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Events} path="/events/past" />
        <Route component={Upcoming} path="/events/upcoming" />
        <Route component={Team} path="/committee" />
        <Route component={TeamArchive} path="/team-archive" />
        <Route component={Sponsors} path="/sponsors" />
        <Route component={Contact} path="/contact" />
        <Route component={SinglePostSponsor} path="/sponsor/:slug" />
        <Route component={SponsorEvents} path="/sponsor-events/:slug" />
        <Route component={SinglePostNoAuthor} path="/profile/:slug" />
        <Route component={Techforward} path="/techforward" />

      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;