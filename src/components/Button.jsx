import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-blue-400 text-white rounded-md p-2 text-lg font-semibold font-palanquin hover:bg-blue-500 hover:scale-105 transition-all">
      {title}
    </button>
  );
};

export default Button;
