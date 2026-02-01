import React, { useState, useEffect, useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1678491282134-07c8f7c7d5f8?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1682685792535-9f1a9f5e93bc?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1677649128437-0b15de3d1f3b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1682316231276-2a774c1a8f26?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1682171472384-2e15f93dca37?auto=format&fit=crop&w=1200&q=80",
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const intervalTime = 3000; // 3 seconds

  // Next slide function
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
    resetTimer();
  };

  // Reset timer
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);
  };

  // Auto-slide effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      className="relative w-full h-[500px] overflow-hidden cursor-pointer"
      onClick={nextSlide} // click anywhere → next image
    >
      {/* Images */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700
            ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        />
      ))}

      {/* Optional Next / Prev Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIndex((prev) => (prev - 1 + images.length) % images.length);
          resetTimer();
        }}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 z-20"
      >
        &#10094;
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setIndex((prev) => (prev + 1) % images.length);
          resetTimer();
        }}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 z-20"
      >
        &#10095;
      </button>
    </div>
  );
};

export default HeroSlider;
