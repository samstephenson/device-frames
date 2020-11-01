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
            gridTemplateColumns: "repeat(2, 1fr)",
            placeItems: "center",
          }}
        >
          <DeviceWrapper width="240" deviceNo="0" id="myBtn">
            <img src={Screenshot} alt="UI" />
          </DeviceWrapper>
          <DeviceWrapper width="320" deviceNo="1">
            <img src={Screenshot8} alt="UI" />
          </DeviceWrapper>
          <DeviceWrapper width="320" deviceNo="2">
            <video controls loop>
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </DeviceWrapper>
          <DeviceWrapper width="320" deviceNo="3">
            <img src={Screenshot8} alt="UI" />
          </DeviceWrapper>
        </div>
      </div>
    );
  }
}

export default App;
