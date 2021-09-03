import "./App.css";
import Clock from "./components/Clock/Clock";
import Event from "./components/Event/Event";
import Log from "./components/Log/Log";
import Nav from "./components/Nav/Nav";

import Locations from "./data/locations";

function App() {
  const locations = Locations.data;
  return (
    <div className="App">
      <Log />
      <Nav locations={locations} />
      <Clock />
      <Event />
    </div>
  );
}

export default App;
