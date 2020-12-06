import Screenshot from "./screenshot.png";
import styled from "styled-components";
import devices from "./data";

import "./App.css";
import { Component } from "react";
import DeviceWrapper from "./DeviceWrapper";

const Section = styled.section`
  /* width: 100%; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 320px));
  grid-gap: 1rem;
  margin: 1rem 0 4rem;

  p {
    text-align: center;
  }
`;

const SectionHeading = styled.h1`
  border-bottom: 1px solid #ddd;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
`;

const Card = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 2px;
`;

class Page extends Component {
  render() {
    return (
      <div
        className="container"
        style={{
          height: "100vh",
          position: "relative",
          width: "auto",
          padding: "2rem 0",
          margin: "2rem",
        }}
      >
        {devices.map((device) => (
          <div>
            <SectionHeading>{device.deviceName}</SectionHeading>
            <Section>
              {device.deviceStyle.map((i) => (
                <Card>
                  <DeviceWrapper type={device.id} deviceStyle={i.id}>
                    <img
                      width="375"
                      src={
                        "https://via.placeholder.com/" +
                        device.UIWidth +
                        "x" +
                        device.UIHeight
                      }
                      alt="UI"
                    />
                  </DeviceWrapper>
                  <p>{i.title}</p>
                </Card>
              ))}
            </Section>
          </div>
        ))}
      </div>
    );
  }
}

export default Page;
