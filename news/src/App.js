import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "./Components/NavBar";
import Headlines from "./Views/Headlines";
import Sports from "./Views/Sports";
import Weather from "./Views/Weather";
import Politics from "./Views/Politics";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <div className="AppBody">
            <Switch>
              <Route path="/" exact>
                <Headlines />
              </Route>
              <Route path="/sports" exact>
                <Sports />
              </Route>
              <Route path="/weather" exact>
                <Weather />
              </Route>
              <Route path="/politics" exact>
                <Politics />
              </Route>
            </Switch>
          </div>
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
