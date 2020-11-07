import { Component } from "react";
import "./DeviceWrapper.css";
import devices from "./data";

class DeviceWrapper extends Component {
  render() {
    const device = devices[this.props.deviceNo];

    const screenXPadding = ((1 - device.widthRatio) / 2) * 100;
    const screenYPadding = ((1 - device.heightRatio) / 2) * 100;
    const screenYPaddingShift = 0.6;

    console.log("X:" + screenXPadding);
    console.log("Y:" + screenYPadding);

    return (
      <div
        className="device"
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "100%",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr",
          placeItems: "center",
          alignSelf: "stretch",
        }}
      >
        <img
          alt="device frame dummy for auto-sizing"
          src={device.image}
          width="auto"
          height="auto"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            gridArea: "1/1/2/2",
          }}
        />
        <div
          className="screen"
          style={{
            gridArea: "1/1/2/2",
            paddingLeft: screenXPadding + "%",
            paddingRight: screenXPadding + "%",
            paddingTop: screenYPaddingShift + 0.6 + "%",
            paddingBottom: screenYPaddingShift - 0.6 + "%",
          }}
        >
          {this.props.children}
        </div>
        <img
          src={device.image}
          width="auto"
          height="auto"
          style={{
            pointerEvents: "none",
            maxHeight: "100%",
            maxWidth: "100%",
            gridArea: "1/1/2/2",
            position: "absolute",
          }}
          alt="device frame"
        />
      </div>
    );
  }
}

export default DeviceWrapper;
