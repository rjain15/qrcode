import React from "react";
import { render } from "react-dom";
import { QRCode } from "react-qr-svg";

const styles = {
  root: {
    fontFamily: "sans-serif"
  },
  h1: {
    textAlign: "center"
  },
  qrcode: {
    textAlign: "center"
  }
};

export default class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div style={styles.root}>
        <h1 style={styles.h1}>CovID QRCode</h1>
        <div style={styles.qrcode}>
          <QRCode
            level="Q"
            style={{ width: 256 }}
            value={JSON.stringify({
              static_data: {
                id: 928328,
                name: "Rishabh Parekh",
                dob: "05/16/2000",
                address: "Berkeley",
                chronic_conditions: {
                  conditions: ["Asthma"]
                }
              },
              dynamic_data: {
                fever: false,
                temperature: 97,
                blood_pressure: 60,
                pulse: 80
              }
            })}
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
