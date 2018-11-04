import React from "react";
import { AppContainer } from "../containers/ScoreContainer";
// import "../../styles/components/appWrapper.scss";

class AppWrapper extends React.Component {


  render() {
    return (
      <React.Fragment>
        <video
          id="opening-video"
          autoPlay
          src="../../static/minionOpening.mp4"
        />
    
          <AppContainer />

      </React.Fragment>
    );
  }
}

export default AppWrapper;
