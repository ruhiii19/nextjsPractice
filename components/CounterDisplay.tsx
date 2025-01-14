import React from "react";

const CounterDisplay = ({ count }: { count: number }) => {
  return <div className="text-2xl">Counter : {count}</div>;
};

export default CounterDisplay;
