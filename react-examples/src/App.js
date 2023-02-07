import { Fragment } from "react";

import classes from "./App.module.css";

/********************
 * Examples imports *
 ********************/

//import HelloWorld from "./examples/hello-world/HelloWorld";
//import VideoPlayer from "./examples/video-player/VideoPlayer";
//import LocalJSONApp from "./examples/local-json-to-context/LocalJSONApp"; // Local JSON to Context
//import LangSwitchingApp from "./examples/context-language-switching/LangSwitchingApp"; // Local JSON with Language data to Context + language switching
//import TimeoutApp from "./examples/two-tiered-timeout-context/TimeoutApp"; // User inactivity timeout Context
import GyreStylesApp from "./examples/gyre-styles/GyreStylesApp";

function App() {
  return (
    <Fragment>
      <div className={classes["page-margin"]}>
        <h1 className={classes.heading}>
          Example components will appear below
        </h1>
        {/**********************/
        /* Examples components */
        /***********************/}
        {/* <HelloWorld /> */}
        {/* <VideoPlayer src="./assets/video/concert.mp4" /> */}
        {/* <LocalJSONApp /> */}
        {/* <LangSwitchingApp /> */}
        {/* <TimeoutApp /> */}
        <GyreStylesApp />
      </div>
    </Fragment>
  );
}

export default App;
