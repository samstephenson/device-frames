import { Component } from "react";
import "./DeviceWrapper.css";
import devices from "./data";

class DeviceWrapper extends Component {
  render() {
    const device = devices.filter((value) => {
      return value.deviceName === this.props.type;
    });

    console.log("Device is " + JSON.stringify(device, null, 4));

    const screenXPadding = ((1 - device.widthRatio) / 2) * 100;
    const screenYPadding = ((1 - device.heightRatio) / 2) * 100;
    const screenYPaddingShift = 0.6;

    console.log("X:" + screenXPadding);
    console.log("Y:" + screenYPadding);

    return (
      <div
        className="device"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr",
          placeItems: "center",
        }}
      >
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
          // src={device.image}
          width="auto"
          height="auto"
          style={{
            gridArea: "1/1/2/2",
            maxHeight: "100%",
            maxWidth: "100%",
            pointerEvents: "none",
          }}
          alt="device frame"
        />
      </div>
    );
  }
}

export default DeviceWrapper;
