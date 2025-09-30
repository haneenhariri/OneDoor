import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
interface LoadingSpinnerProps {
  onLoadComplete?: () => void;
  minDisplayTime?: number;
}

const LoadingSpinner = ({
  onLoadComplete,
  minDisplayTime = 300
}: LoadingSpinnerProps) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

      setTimeout(() => {
        setShouldRender(false);
        onLoadComplete?.();
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [onLoadComplete, minDisplayTime]);

  if (!shouldRender) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-white dark:bg-black
      "
      aria-label="Loading"
      role="status"
    >
      <div className="relative flex items-center justify-center">
        {/* Gradient ring animation */}
        <div
          className="
            absolute w-32 h-32 rounded-full
            bg-gradient-to-r from-[#722973] via-[#a43ca6] to-[#F07EF2]
            animate-spin
            opacity-20
          "
          style={{
            animationDuration: '3s',
            filter: 'blur(8px)'
          }}
        />

        {/* Rotating border */}
        <div
          className="
            absolute w-28 h-28 rounded-full
            border-[3px] border-transparent
            border-t-[#722973] border-r-[#a43ca6]
            animate-spin
          "
          style={{ animationDuration: '1.5s' }}
        />

        {/* Logo */}
        <div className="relative z-10">
          <img
            src={logo}
            alt="Loading..."
            className="
              w-20 h-20
              animate-[spinScale_2s_ease-in-out_infinite]
              drop-shadow-lg
            "
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

