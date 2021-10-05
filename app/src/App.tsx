import styled from "styled-components";
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
  const Main = styled.main`
    height: 100vh;
    background: #000;
    color: #fff;
    a {
      color: #fff;
    }
  `;
  const Wrapper = styled.section`
    padding: 2em;
  `;
  return (
    <Main>
      <Wrapper>
        <Clock />
        <Nav locations={locations} />
        <Action actions={actions} />
        <Log />
        <Event />
      </Wrapper>
    </Main>
  );
}

export default App;

// Keep game state of player
// Authenticate via localstorage
