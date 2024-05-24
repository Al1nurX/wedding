"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Main.module.scss";
import proigr from "../../../public/images/proigr.png";
import strelka from "../../../public/images/Strelka.png";
import muz from "../../assets/muzik.mp3";

export default function Main() {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio(muz));
  }, []);

  function play() {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  function scrollToNextSection() {
    console.log("Scrolling to next section...");
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Next section not found");
    }
  }

  return (
    <>
      <div className={`${styles.main} flex flex-col items-center`}>
        <div className="absolute">
          <div className="flex flex-col text-center text-slate-100 mt-[150px] ">
            <h1 className="text-4xl font">Алмас & Арай</h1>
            <h2 className="text-3xl mt-10 font">22. 06. 2024 жыл</h2>
          </div>
          <div className="flex justify-center gap-[120px] mt-[310px]">
            <button
              className={`${styles.muzik} ${
                isPlaying ? styles["animate-spin"] : ""
              }`}
              onClick={play}
            >
              <Image src={proigr} alt="musik" />
            </button>
            <button onClick={scrollToNextSection}>
              <Image
                className="mr-15 mt-10"
                width={90}
                height={90}
                src={strelka}
                alt="scroll down"
              />
              <div className="text-white">
                <p>Төмен</p>
                <p>Түсіріңіз</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div id="next-section" className="mt-10">
        <page />
      </div>
    </>
  );
}
