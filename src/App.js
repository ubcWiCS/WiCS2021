import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import TeamArchive from "./pages/TeamArchive";

import NavBar from "./components/navigation/NavBar";
import SinglePostSponsor from "./components/SinglePostSponsor";
import SinglePostNoAuthor from "./components/SinglePostNoAuthor";
import SponsorEvents from "./components/SponsorEvents";
function App() {
  return (
    <BrowserRouter>
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
