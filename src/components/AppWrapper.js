import React from "react";
import { AppContainer } from "../containers/ScoreContainer";
// import "../../styles/components/appWrapper.scss";

class AppWrapper extends React.Component {
  render() {
    return (
      <React.Fragment>
        <video id="opening video" width="100%" controls>
          <source src="../../static/minionOpening.mp4" type="video/mp4" />
        </video>

        <AppContainer />
      </React.Fragment>
    );
  }
}

export default AppWrapper;
