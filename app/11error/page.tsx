"use client";
import React from "react";

const ErrorComponent = () => {
  if (Math.floor(Math.random() * 3) == 1) {
    throw new Error("Random Number Error");
  }
  return <div>No Error found!</div>;
};

export default ErrorComponent;
