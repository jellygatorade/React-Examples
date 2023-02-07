import { useRef, useState } from "react";

import "./VideoPlayer.css";

// Following

// Build a custom video player with Reactjs and TailwidCSS | Tutorial
// https://www.youtube.com/watch?v=33Qu3oilteU

// How to properly use setInterval() and clearInterval() methods in React components
// https://sebhastian.com/setinterval-react/

/*** */
// Need to figure out if using the state variable (currentTime) or videoRef.current.currentTime is preferable? If state variable (currentTime), when do I update it? I'm not sure this matters much

const VideoPlayer = (props) => {
  const videoRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // may be unnecessary? It's only used to output the currentTime to the UI right now
  const [videoDuration, setVideoDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  // Called when media has loaded (canplaythrough event)
  function canPlayThroughHandler() {
    setVideoDuration(videoRef.current.duration);
    setIsLoading(false);
  }

  // For play/pause button
  function playPauseHandler() {
    if (isPlaying) {
      pauseRequestHandler();
    } else {
      playRequestHandler();
    }

    // With less lines of code, could change playing state like this
    // setIsPlaying((prevPlayState) => !prevPlayState);
  }

  // Play and pause request handlers
  function playRequestHandler() {
    setIsPlaying(true);
    videoRef.current.play();

    startVideoProgressInterval();
  }

  function pauseRequestHandler() {
    setIsPlaying(false);
    videoRef.current.pause();

    clearVideoProgressInterval();
  }

  // End video handler
  function endVideoHandler() {
    console.log("ended");

    setIsPlaying(false);
    clearVideoProgressInterval();

    videoRef.current.currentTime = 0; // Reset video playback to 0
    setProgress(0); // Reset scrubbar to 0
  }

  // Scrubbar functions - video progress
  const [intervalId, setIntervalId] = useState(0); // New React state slice!

  function updateVideoProgress() {
    console.log("update video progress");
    setCurrentTime(videoRef.current.currentTime);
    setProgress(
      (videoRef.current.currentTime / videoRef.current.duration) * 100
    );
  }

  function startVideoProgressInterval() {
    const newIntervalId = setInterval(updateVideoProgress, 25);
    setIntervalId(newIntervalId);
  }

  function clearVideoProgressInterval() {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
    }
  }

  // Scrubbar functions - user input
  function scrubBarInputHandler(event) {
    setProgress(event.target.value);
    let time = videoRef.current.duration * (event.target.value / 100);
    videoRef.current.currentTime = time;
  }

  /*
  // Structure I'm used to using for the control bar
  <div
    id="control-bar"
    class="relative top-full translate-y-[-100%] flex flex-row justify-center items-center pointer-events-none invisible opacity-0"
  >
    <button
      type="button"
      id="play-pause-button"
      class="m-[20px] text-48px text-shadow-black-3px hover:text-orange-ncma visible opacity-100 transition-all duration-300"
    >
      <i class="fas fa-play" id="play-pause-button-icon"></i>
    </button>
    <input type="range" id="scrub-bar" value="0" step="any" />
  </div>
  */

  return (
    <div className="video-overlay">
      Hello world video
      <video
        className="video"
        src={props.src}
        ref={videoRef}
        onCanPlayThrough={canPlayThroughHandler}
        onEnded={endVideoHandler}
      ></video>
      <div className="video-controls">
        <div className="progress-bar">
          <div className="progress-bar-inner"></div>
        </div>
        <input
          className="scrub-bar-kk"
          type="range"
          step="any"
          value={progress}
          onChange={scrubBarInputHandler}
          onMouseDown={pauseRequestHandler}
          onMouseUp={playRequestHandler}
        />
        <div>
          <div>{isLoading ? "Wait for video to load" : ""}</div>
          <div>
            {currentTime}/{videoDuration}
          </div>
          <button onClick={playPauseHandler}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
