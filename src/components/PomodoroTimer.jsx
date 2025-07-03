import React, { useEffect, useState } from 'react';

const PomodoroTimer = ({ unixTimestamp }) => {
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    if (unixTimestamp === null) return;

    const targetTime = unixTimestamp;
    const initialDiff = targetTime - Date.now();

    if (initialDiff <= 0) return;
    setRemainingTime(initialDiff);

    const interval = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 1000) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [unixTimestamp]);

  if (unixTimestamp === null || remainingTime === null || remainingTime <= 0) {
    return null;
  }

  const hoursVal = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutesVal = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const secondsVal = Math.floor((remainingTime % (1000 * 60)) / 1000);

  const hours = String(hoursVal);
  const minutes = String(minutesVal);
  const seconds = String(secondsVal);

  return (
    <div className="de_countdown">
      {hoursVal > 0 && `${hours}h `}
      {((hoursVal > 0) || minutesVal > 0) && `${minutes}m `}
      {`${seconds}s`}
    </div>
  );
};

export default PomodoroTimer;
