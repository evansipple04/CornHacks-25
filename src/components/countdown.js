import React, { useState, useEffect } from 'react';
// import "bootstrap/dist/css/bootstrap.css";
import "./countdown.css";

const Countdown = () => {
    const targetDate = new Date('2025-02-17T00:00:00');
    const [timeLeft, setTimeLeft] = useState(timeRemaining());

    function timeRemaining() {
        const date = new Date();
        const difference = targetDate - date;

        let time = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
        
        return difference > 0 ? time : { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(timeRemaining()), 1000);
        return () => clearInterval(timer);
      }, []);
    
      return (
        <div className="container">
          <div className="timer">
            <div className="time-box">
              <p className="time">{timeLeft.days}</p>
              <span>Days</span>
            </div>
            <div className="time-box">
              <p className="time">{timeLeft.hours}</p>
              <span>Hours</span>
            </div>
            <div className="time-box">
              <p className="time">{timeLeft.minutes}</p>
              <span>Minutes</span>
            </div>
            <div className="time-box">
              <p className="time">{timeLeft.seconds}</p>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      );
}

export default Countdown;