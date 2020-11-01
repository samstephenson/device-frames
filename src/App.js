import Screenshot from "./screenshot.png";
import Screenshot8 from "./screenshot8.png";
import Video from "./video.mov";

import "./App.css";
import { Component } from "react";
import DeviceWrapper from "./DeviceWrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          className="container"
          style={{
            height: "100vh",
            position: "relative",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            placeItems: "center",
            background: "rgba(0,255,0,0.1)",
          }}
        >
          <DeviceWrapper width="320" deviceNo="0">
            <img src={Screenshot} alt="UI" />
          </DeviceWrapper>
          <DeviceWrapper width="320" deviceNo="1">
            <img src={Screenshot8} alt="UI" />
          </DeviceWrapper>
          <DeviceWrapper width="320" deviceNo="2">
            <video autoplay loop controls>
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </DeviceWrapper>
        </div>
      </div>
    );
  }
}

export default App;
