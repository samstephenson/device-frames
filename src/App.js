// import Screenshot8 from "./screenshot8.png";
// import Android from "./android.png";
// import Video from "./video.mov";
import styled from "styled-components";
import devices from "./data";

import "./App.css";
import { Component } from "react";
import DeviceWrapper from "./DeviceWrapper";
import Page from "./page";

const AppWrapper = styled.div`
  margin: 0 auto 4rem;
`;

const Header = styled.header`
  height: 4rem;
  padding: 1rem 0;
  margin: 0 2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper className="App">
        <Header>React Device Frames</Header>
        <Page />
      </AppWrapper>
    );
  }
}

export default App;
