import "../../tailwind.css";
import Wave from "react-wavify";

const WaveOfHome = () => {
  return (
    <div>
      <Wave
        mask="url(#mask)"
        fill="#4338ca"
        options={{
          height: 40,
          amplitude: 40,
          speed: 0.1,
          points: 5,
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="300" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
    </div>
  );
};

export default WaveOfHome;
