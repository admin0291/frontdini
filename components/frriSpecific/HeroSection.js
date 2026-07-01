"use client";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videos = [
    "/Video/video1.mp4",
    "/Video/video2.mp4",
    "/Video/video3.mp4",
  ];

  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => { });
    }
  }, [currentIndex]);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: "600px" }}>

      {/* VIDEO */}
      <video
        ref={videoRef}
        key={currentIndex}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src={videos[currentIndex]} type="video/mp4" />
      </video>

      {/* DARK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />

      {/* CONTENT */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center max-lg:px-4 lg:px-60 mx-auto">

        {/* Extra spacing down (MOVE TEXT LOWER) */}
        <div className="mt-[60vh] sm:mt-[45vh] md:mt-[50vh] lg:mt-[550px] "></div>

        

        {/* TITLE */}
        <h1
          className="text-white font-black uppercase leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl "
          style={{
            lineHeight: "0.9",
            letterSpacing: "-2px",
            fontWeight: "900",
            maxWidth: "90%",
          }}
        >
          WHAT MOVES YOU <br /> MOVES OUR WORLD
        </h1>

        {/* INDICATOR */}
        <div className="mt-8 sm:mt-10 md:mt-14 text-white">
          <div className="flex items-center gap-3 sm:gap-4">

              {/* PLAY BUTTON */}
        <button
          onClick={togglePlay}
          className="mb-6 sm:mb-8 md:mb-10 text-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center"
        >
          {isPlaying ? (
            <svg width="55" height="55" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"></path>
            </svg>
          ) : (
            <svg width="55" height="55" viewBox="0 0 24 24" fill="white">
              <rect x="6" y="5" width="4" height="14"></rect>
              <rect x="14" y="5" width="4" height="14"></rect>
            </svg>
          )}
        </button>


            <div className="flex gap-3">
              {videos.map((_, i) => (
                <div
                  key={i}
                  className={`h-[2px] w-10 transition-all ${i === currentIndex ? "bg-white" : "bg-white/30"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
