import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/EventPage";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import SinglePostNoAuthor from "./components/SinglePostNoAuthor";
import Team from "./components/Team";
import Advisors from "./components/Advisors";
import Sponsors from "./components/Sponsors";
import NavBar from "./components/NavBar";
import SinglePostSponsor from "./components/SinglePostSponsor";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Events} path="/events" />
        <Route component={SinglePost} path="/blog/:slug" />
        <Route component={SinglePostNoAuthor} path="/profile/:slug" />
        <Route component={Post} path="/blog" />
        <Route component={Team} path="/team" />
        <Route component={Advisors} path="/advisors" />
        <Route component={Sponsors} path="/sponsors" />
        <Route component={SinglePostSponsor} path="/sponsor/:slug" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
