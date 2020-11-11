import Screenshot from "./screenshot.png";
// import Screenshot8 from "./screenshot8.png";
// import Android from "./android.png";
// import Video from "./video.mov";

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
            width: "100vw",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gridGap: 24,
            placeItems: "center",
            background: "#444",
            padding: "4rem auto",
            justifyContent: "center",
          }}
        >
          <div
          // style={{
          //   width: 400,
          //   height: 400,
          // }}
          >
            <DeviceWrapper deviceNo="0" type="iphone12" style="test">
              <img width="375" src={Screenshot} alt="UI" />
            </DeviceWrapper>
          </div>
          {/* <div>
            <DeviceWrapper deviceNo="1">
              <img src={Screenshot8} alt="UI" />
            </DeviceWrapper>
          </div>
          <div>
            <DeviceWrapper deviceNo="2">
              <video controls loop>
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </DeviceWrapper>
          </div>
          <div>
            <DeviceWrapper deviceNo="3">
              <img src={Android} alt="UI" />
            </DeviceWrapper>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
