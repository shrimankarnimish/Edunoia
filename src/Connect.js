import React from "react";

const FloatingButton = () => {
  return (
    <a
      href="/contact"
      className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white px-4 py-2 rounded-l-lg shadow-lg font-semibold hover:bg-orange-700 transition duration-300"
      style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
    >
      Connect
    </a>
  );
};

export default FloatingButton;
