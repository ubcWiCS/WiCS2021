import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import SinglePostNoAuthor from "./components/SinglePostNoAuthor";
import Team from "./components/Team";
import Advisors from "./components/Advisors";
import Sponsors from "./components/Sponsors";
import SponsorsTest from "./components/SponsorTest";
import Events from "./components/Events";
import NavBar from "./components/NavBar";
import SinglePostSponsor from "./components/SinglePostSponsor";
import TeamTest from "./components/TeamTest";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={SinglePostNoAuthor} path="/profile/:slug" />
        <Route component={Post} path="/post" />
        <Route component={TeamTest} path="/team" />
        <Route component={Advisors} path="/advisors" />
        <Route component={Sponsors} path="/sponsors" />
        <Route component={SinglePostSponsor} path="/sponsor/:slug" />
        <Route component={Events} path="/events" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
