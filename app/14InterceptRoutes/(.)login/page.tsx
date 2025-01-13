import React from "react";
import Login from "../_components/Login";

const InterceptedLogin = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-800 opacity-90"></div>
      <Login />
    </div>
  );
};

export default InterceptedLogin;
