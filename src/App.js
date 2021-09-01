import React from "react";
import "./App.css";
import Player from "./components/Player";
import { useState, useEffect } from "react";
function App() {
  const [songs] = useState([
    {
      title: "Tera Zikr",
      singer: "Darshan Raval",
      poster: "terazik.jpg",
      src: "terazikr.mp3",
    },
    {
      title: "Jab bhi teri yaad",
      singer: "Ishoj Kytrak",
      poster: "jabbi.jpg",
      src: "jabbhiteri.mp3",
    },
    {
      title: "Filhaal 2",
      singer: "B praak",
      poster: "filhaal2.jpg",
      src: "filhal2.mp3",
    },
    {
      title: "Maa Song",
      singer: "Shankar mahadev",
      poster: "maa.jpg",
      src: "maatarezameen.mp3",
    },
    {
      title: "Zindagi kuch",
      singer: "Jubin Nautiyal",
      poster: "zindagi.jpg",
      src: "zindagikuch.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </>
  );
}

export default App;
