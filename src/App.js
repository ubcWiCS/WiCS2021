import { BrowserRouter, Route, Switch, useLocation} from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import TeamArchive from "./pages/TeamArchive";
import Techforward from "./pages/Techforward";

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
    <BrowserRouter className="w-full">
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Events} path="/events" />
        <Route component={Team} path="/committee" />
        <Route component={TeamArchive} path="/team-archive" />
        <Route component={Sponsors} path="/sponsors" />
        <Route component={Contact} path="/contact" />
        <Route component={SinglePostSponsor} path="/sponsor/:slug" />
        <Route component={SponsorEvents} path="/sponsor-events/:slug" />
        <Route component={SinglePostNoAuthor} path="/profile/:slug" />
        <Route component={Techforward} path="/techforward" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
