import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Counter.css";

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    architects: 0,
    customers: 0,
  });

  useEffect(() => {
    if (inView) {
      
      const duration = 2000; 
      const frameDuration = 1000 / 60; 

      const animateCount = (target, key) => {
        let frame = 0;
        const totalFrames = Math.round(duration / frameDuration);
        const counter = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          const currentCount = Math.round(target * progress);

          setCounts((prevCounts) => ({
            ...prevCounts,
            [key]: currentCount,
          }));

          if (frame === totalFrames) {
            clearInterval(counter);
          }
        }, frameDuration);
      };

      animateCount(1000, "years");
      animateCount(2500, "projects");
      animateCount(500, "architects");
      animateCount(67, "customers");
    }
  }, [inView]);

  return (
    <div className="counter" ref={ref}>
      <div class="counter-container" data-aos="fade-up">
        <div class="count-num">
          <strong className="number">{counts.years}</strong>
          <span>
            Years of <br />
            Experienced
          </span>
        </div>

        <div class="count-num">
          <strong className="number">{counts.projects}</strong>
          <span>
            Project <br />
            Done
          </span>
        </div>

        <div class="count-num">
          <strong className="number">{counts.architects}</strong>
          <span>
            Licensed <br />
            Architect
          </span>
        </div>

        <div class="count-num cn-last">
          <strong className="number">{counts.customers}</strong>
          <span>
            Happy <br />
            Customers
          </span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
