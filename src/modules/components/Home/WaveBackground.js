// src/components/WaveBackground.js
import React from "react";

const WaveBackground = () => {
  return (
    <div className="wave-container">
      <svg viewBox="0 0 1440 320">
        <path
          fill="#3b82f6"
          fillOpacity="1"
          d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,117.3C672,117,768,139,864,133.3C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default WaveBackground;
