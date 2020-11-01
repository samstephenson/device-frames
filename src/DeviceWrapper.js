import { Component } from "react";
// import Phone from "./device-images/iphone.png";
// import Phone8 from "./device-images/Apple iPhone 8 Space Grey.png";
// import Phone8Silver from "./device-images/Apple iPhone 8 Silver.png";
import "./DeviceWrapper.css";
import devices from "./data";

class DeviceWrapper extends Component {
  render() {
    // const devices = [
    //   {
    //     deviceName: "iPhone 11 Pro",
    //     image:
    //       "https://determined-wright-1c7f0b.netlify.app/Apple iPhone 11 Pro Space Grey.png",
    //     widthRatio: 0.812274368,
    //     heightRatio: 0.903560831,
    //     aspectRatio: 0.513724036,
    //   },
    //   {
    //     deviceName: "iPhone 8",
    //     image:
    //       "https://determined-wright-1c7f0b.netlify.app/Apple iPhone 8 Space Grey.png",
    //     widthRatio: 0.789473684,
    //     heightRatio: 0.704329461,
    //     aspectRatio: 0.505,
    //   },
    //   {
    //     deviceName: "iPhone 8",
    //     image:
    //       "https://determined-wright-1c7f0b.netlify.app/Apple iPhone 8 Silver.png",
    //     widthRatio: 0.789473684,
    //     heightRatio: 0.704329461,
    //     aspectRatio: 0.505,
    //   },
    // ];
    const device = devices[this.props.deviceNo];

    // const deviceImage = device.image[style];

    const deviceWidth = this.props.width;
    const deviceHeight = deviceWidth / device.aspectRatio;

    const screenWidth = deviceWidth * device.widthRatio;
    const screenHeight = deviceHeight * device.heightRatio;

    console.log("deviceWidth: " + deviceWidth);
    console.log("screenWidth: " + screenWidth);
    console.log("deviceHeight: " + deviceHeight);
    console.log("screenHeight: " + screenHeight);

    console.log("image: " + device.image);

    return (
      <div
        className="device"
        style={{
          width: deviceHeight * device.aspectRatio,
          height: deviceHeight,
          display: "grid",
          placeItems: "center",
          position: "relative",
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
            background: "rgba(255,0,0,0.1)",
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default DeviceWrapper;
