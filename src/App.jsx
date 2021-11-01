import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Locations from "./components/Locations";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <main className="container">
          <Route
            path="/"
            exact
            render={(routeProps) => <Menu {...routeProps} />}
          />
          <Route
            path="/locations"
            exact
            render={(routeProps) => <Locations {...routeProps} />}
          />
        </main>
      </div>
    </>
  );
}

export default App;
