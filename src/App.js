import Particles from "react-particles";
import { loadFireworksPreset } from 'tsparticles-preset-fireworks'
import {Typewriter} from "react-simple-typewriter"
import Countdown from "react-countdown";
import "./App.css"
import { useState } from "react";

function App() {
  const [newYearMessage, setNewYearMessage] =useState(['Goodbye 2023'])

  const particleInitialization = async (engine) =>{
    await loadFireworksPreset(engine)
  }

  function timeLeft(){
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate
    return remainingTime
  }
  return (
    <>
        <Particles
          init={particleInitialization}
          options={{preset:"fireworks"}}
        />
        <div className="flex flex-col justify-center items-center min-h-screen gap-5">
            <span className="text-yellow-500 text-xl md:text-4xl font-bold px-4 bg-black">
                <Typewriter words={newYearMessage} loop={false} cursorStyle={"_"} cursor/>
            </span>
            <div className="date text-white font-bold text-lg md:text-2xl">
              <Countdown date={Date.now() + timeLeft()} onComplete={()=> setNewYearMessage([
                "Happy New Year 2024"
              ])}/>
            </div>
        </div>
    </>
  );
}

export default App;
