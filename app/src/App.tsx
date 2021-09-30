import "./App.css";
import Action from "./components/Action/Action";
import Clock from "./components/Clock/Clock";
import Event from "./components/Event/Event";
import Log from "./components/Log/Log";
import Nav from "./components/Nav/Nav";

import Locations from "./data/locations";
import Actions from "./data/actions";

function App() {
  const locations = Locations.data;
  const actions = Actions.data;
  return (
    <div className="App">
      <Log />
      <Nav locations={locations} />
      <Clock />
      <Event />
      <Action actions={actions} />
    </div>
  );
}

export default App;

// Keep game state of player
// Authenticate via localstorage
