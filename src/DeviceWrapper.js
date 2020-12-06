import { Component } from "react";
import "./DeviceWrapper.css";
import devices from "./data";

class DeviceWrapper extends Component {
  render() {
    // Make device name prop lowercase
    const deviceNameProp = this.props.type.split(" ").join("").toLowerCase();

    // Get chosen device object
    const device = devices.filter((i) => {
      return i.id === deviceNameProp;
    });
    console.log("Device is " + JSON.stringify(device[0], null, 4));

    //Make style prop lowercase
    const styleNameProp = this.props.deviceStyle
      .split(" ")
      .join("")
      .toLowerCase();

    //Get chosen device style
    const style = device[0].deviceStyle.filter((i) => {
      return i.id === styleNameProp;
    });
    console.log("Style is " + JSON.stringify(style[0], null, 4));

    // Image padding variables
    const screenYPaddingShift = 0.6;
    const screenXPadding = ((1 - device[0].widthRatio) / 2) * 100;
    const screenYPadding = ((1 - device[0].heightRatio) / 2) * 100;
    // console.log("X:" + screenXPadding);
    // console.log("Y:" + screenYPadding);

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
          alt={device[0].deviceName + " device frame"}
        />
      </div>
    );
  }
}

export default DeviceWrapper;
