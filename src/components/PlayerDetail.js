import React from "react";

function PlayerDetail(props) {
  return (
    <>
      <div className="player-details">
        <div className="player-poster">
          <img src={props.song.poster} alt="song-poster" />
        </div>
      </div>
    </>
  );
}

export default PlayerDetail;
