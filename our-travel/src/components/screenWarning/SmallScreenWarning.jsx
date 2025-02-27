"use client";
import { useState, useEffect } from "react";

export default function SmallScreenWarning() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsSmallScreen(window.innerWidth < 350);
    };

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  if (!isSmallScreen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm text-center">
        <h2 className="text-xl font-semibold mb-4">We're Sorry...</h2>
        <p className="text-gray-600 mb-6">
          Your device width is too small, please use a bigger screen size.
        </p>
      </div>
    </div>
  );
}
