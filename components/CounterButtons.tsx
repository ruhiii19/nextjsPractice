import React from "react";

const CounterButtons = ({
  onIncrement,
  onDecrement,
  onReset,
}: {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}) => {
  return (
    <div className="text-2xl flex space-x-4 mt-4">
      <button
        onClick={onIncrement}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Increment
      </button>
      <button
        onClick={onDecrement}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Decrement
      </button>
      <button
        onClick={onReset}
        className="bg-gray-500 text-white px-4 py-2 rounded-md"
      >
        Reset
      </button>
    </div>
  );
};

export default CounterButtons;
