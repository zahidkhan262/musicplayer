import React from "react";
import PlayerDetail from "./PlayerDetail";
import PlayerControl from "./PlayerControl";
import { useState, useEffect, useRef } from "react";

function Player(props) {
  const audioEL = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEL.current.play();
    } else {
      audioEL.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };
  return (
    <div className="main-container">
      <div className="c-player">
        <audio
          src={props.songs[props.currentSongIndex].src}
          ref={audioEL}
        ></audio>

        <h4>
          {props.songs[props.currentSongIndex].title} &bull;{" "}
          <strong>{props.songs[props.currentSongIndex].singer}</strong>
        </h4>

        <PlayerDetail song={props.songs[props.currentSongIndex]} />
        <PlayerControl
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
        />

        <p className="singer center">
          <strong>Next Up: </strong>
          <span>
            {" "}
            {props.songs[props.nextSongIndex].title} by{" "}
            {props.songs[props.nextSongIndex].singer}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Player;
