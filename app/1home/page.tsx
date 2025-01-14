"use client";

import CounterButtons from "@/components/CounterButtons";
import CounterDisplay from "@/components/CounterDisplay";
import ThemeToggle from "@/components/ThemeToggle";
import React from "react";
import { useState } from "react";

const First = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("dark");

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`min-h-screen w-full m-0 p-0 flex flex-col items-center justify-center ${
        theme === "dark"
          ? "bg-black text-white w-full m-0 p-0"
          : "bg-white text-black w-full m-0 p-0"
      }`}
    >
      <ThemeToggle toggleTheme={toggleTheme} currentTheme={theme} />
      <h1 className="text-4xl font-bold">Counter App</h1>
      <CounterDisplay count={count} />
      <CounterButtons
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
      />
    </div>
  );
};

export default First;
