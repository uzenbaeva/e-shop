import React, { useEffect, useState } from 'react';
import './style.css';
import left from '@/public/assets/Fill With Left Arrow.png';
import right from '@/public/assets/Fill with Right Arrow.png';
import Image from 'next/image';
import Today from '@/public/assets/Frame 625.png';
const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const endDate = new Date('2024-10-29T00:00:00');
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  return (
    <div className="text-white py-8 container mx-auto">
      <div className="countdown-content">
        <div className="countdown-info">
          <p className="countdown-description">
            <Image src={Today} alt="today" />
          </p>
          <div className="timestamp-list">
            <div className="countdown-times">
              <h1 className="countdown-title">Flash Sales</h1>
              <div className="times">
                <div className="time-item">
                  <p>Days</p>
                  <p>{timeLeft.days.toString().padStart(2, '0')}</p>
                </div>
                <div className="time-item">
                  <p>Hours</p>
                  <p>{timeLeft.hours.toString().padStart(2, '0')}</p>
                </div>
                <div className="time-item">
                  <p>Minutes</p>
                  <p>{timeLeft.minutes.toString().padStart(2, '0')}</p>
                </div>
                <div className="time-item">
                  <p>Seconds</p>
                  <p>{timeLeft.seconds.toString().padStart(2, '0')}</p>
                </div>
              </div>
            </div>
            <div className="countdown-img">
              <Image src={left} alt="countdown icon" />
              <Image src={right} alt="countdown icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
