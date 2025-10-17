import { useState, useEffect } from "react";
import "./count.css";

const Countdown = () => {
  // Set wedding date: May 15, 2026
  const weddingDate = new Date("May 15, 2026 17:00:00"); // Welcome Night start time

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="counter">
      <h2 className="schedule_title">The Countdown</h2>
      <div className="count_grid">
        <div className="count_sub">
          <h1 className="count_digit">{timeLeft.days}</h1>
          <h3 className="value">Days</h3>
        </div>
        <div className="count_sub">
          <h1 className="count_digit">{timeLeft.hours}</h1>
          <h3 className="value">Hours</h3>
        </div>
        <div className="count_sub">
          <h1 className="count_digit">{timeLeft.minutes}</h1>
          <h3 className="value">Minutes</h3>
        </div>
        <div className="count_sub">
          <h1 className="count_digit">{timeLeft.seconds}</h1>
          <h3 className="value">Seconds</h3>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
