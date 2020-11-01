import { Component } from "react";
import "./DeviceWrapper.css";
import devices from "./data";

class DeviceWrapper extends Component {
  render() {
    const device = devices[this.props.deviceNo];

    const deviceWidth = this.props.width;
    const deviceHeight = deviceWidth / device.aspectRatio;

    const screenWidth = deviceWidth * device.widthRatio;
    const screenHeight = deviceHeight * device.heightRatio;

    console.log("deviceWidth: " + deviceWidth);
    console.log("screenWidth: " + screenWidth);
    console.log("deviceHeight: " + deviceHeight);
    console.log("screenHeight: " + screenHeight);

    return (
      <div
        className="device"
        style={{
          width: deviceHeight * device.aspectRatio,
          height: deviceHeight,
          display: "grid",
          placeItems: "center",
          position: "relative",
          objectFit: "contain",
        }}
      >
        <img
          src={device.image}
          width={deviceWidth}
          height={deviceHeight}
          style={{ position: "absolute", pointerEvents: "none" }}
          alt="device frame"
        />
        <div
          className="screen"
          style={{
            width: screenWidth,
            height: screenHeight,
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default DeviceWrapper;
