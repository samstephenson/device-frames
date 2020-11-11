import { Component } from "react";
import "./DeviceWrapper.css";
import devices from "./data";

class DeviceWrapper extends Component {
  render() {
    // Get chosen device object
    const device = devices.filter((i) => {
      return i.deviceName === this.props.type;
    });

    //Get chosen device style
    const style = device[0].style.filter((i) => {
      return i.name === this.props.style;
    });

    console.log("Device is " + JSON.stringify(device[0], null, 4));
    console.log("Style is " + JSON.stringify(style[0], null, 4));

    const screenXPadding = ((1 - device[0].widthRatio) / 2) * 100;
    const screenYPadding = ((1 - device[0].heightRatio) / 2) * 100;
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
          src={style[0].image}
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
