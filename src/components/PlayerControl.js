import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

function PlayerControl(props) {
  return (
    <>
      <div className="player-control center">
        <button
          title="Prev"
          className="skip-btn"
          onClick={() => props.SkipSong(false)}
        >
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button
          title="Play"
          className="play-btn"
          onClick={() => props.setIsPlaying(!props.isPlaying)}
        >
          <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
        </button>
        <button
          title="Next"
          className="skip-btn"
          onClick={() => props.SkipSong()}
        >
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
    </>
  );
}

export default PlayerControl;
