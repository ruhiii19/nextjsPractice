import React from "react";

const ThemeToggle = ({
  toggleTheme,
  currentTheme,
}: {
  toggleTheme: () => void;
  currentTheme: string;
}) => {
  return (
    <div className="text-2xl flex flex-col items-center justify-center">
      Switch to {currentTheme === "dark" ? "light" : "dark"}
      <button
        onClick={toggleTheme}
        className="flex bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Toggle
      </button>
    </div>
  );
};

export default ThemeToggle;
