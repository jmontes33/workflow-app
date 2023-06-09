import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { useState } from "react";

const sounds = [
  {
    name: "Rain",
    video: "/rain.mp4",
    sound: "/rain.mp3",
  },
  {
    name: "Traffic",
    video: "/city.mp4",
    sound: "/city.mp3",
  },
  { name: "33", video: "/amr23.mp4", sound: "" },
];

function SoundBox() {
  const [soundIndex, setSoundIndex] = useState(0);
  const [nameView, setNameView] = useState(0);
  const sound = sounds[soundIndex];

  const nextSound = () => {
    if (soundIndex < 1) {
      setSoundIndex(soundIndex + 1);
    }
  };

  const prevSound = () => {
    if (soundIndex > 0 && soundIndex < 2 ) {
      setSoundIndex(soundIndex - 1);
    }
  };

  const stopSound = () => {
    setSoundIndex(2);
  };

  const selectSound = () => {
    if (nameView === 0) {
      setNameView(1);
    } else {
      setNameView(0);
    }
  };

  return (
    <div className="h-1/2 bg-white bg-opacity-[40%] border-4 rounded-[20px] relative">
      <video
        className="w-full h-full object-cover rounded-[20px]"
        src={sound.video}
        loop
        autoPlay
      ></video>
      <ReactAudioPlayer src={sound.sound} autoPlay loop />
      <div className="absolute top-3 right-0 left-0 flex flex-col justify-center">
        <div onClick={() => selectSound()} className="cursor-pointer w-[100px] m-auto bg-white flex justify-center items-center font-bold text-xl bg-opacity-[60%] border-4 rounded-[20px] py-1 px-5">
          {sound.name}
        </div>
        <div  className={nameView === 0? "hidden" : "bg-white flex justify-center items-center font-bold text-xl bg-opacity-[60%] border-4 rounded-[20px] py-1 px-5 mt-3 w-[200px] m-auto"}>
          <ul className="text-center">
            <li className="cursor-pointer" onClick={() => setSoundIndex(0)}>Rain</li>
            <li className="cursor-pointer" onClick={() => setSoundIndex(1)}>Traffic</li>
          </ul>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-3 flex gap-10 justify-center items-center">
        <button onClick={() => prevSound()}>
          <img className="max-h-[50px]" src="/prev.png"></img>
        </button>
        <button onClick={() => stopSound()}>
          <img className="max-h-[50px]" src="/play.png"></img>
        </button>
        <button onClick={() => nextSound()}>
          <img className="max-h-[50px]" src="/next.png"></img>
        </button>
      </div>
    </div>
  );
}

export default SoundBox;
