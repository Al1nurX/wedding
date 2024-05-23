"use client";

import React, { useState, useEffect } from "react";
import styles from "./date.module.scss";

function DateComponent() {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateRemainingTime() {
    const date = new Date(2024, 7, 5);
    const difference = date.getTime() - new Date().getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className={styles.container}>
      <div className={styles.timeRow}>
        <span>{remainingTime.days}</span>
        <span>{remainingTime.hours}</span>
        <span>{remainingTime.minutes}</span>
        <span>{remainingTime.seconds}</span>
      </div>
      <div className={styles.labelRow}>
        <span>күн</span>
        <span>сағат</span>
        <span>минут</span>
        <span>секунд</span>
      </div>
    </div>
  );
}

export default DateComponent;
