import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/EventPage";
import Team from "./pages/Team";
import Advisors from "./pages/Advisors";
import Sponsors from "./pages/Sponsors";
import NavBar from "./components/navigation/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Events} path="/events" />
        <Route component={Team} path="/team" />
        <Route component={Advisors} path="/advisors" />
        <Route component={Sponsors} path="/sponsors" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
