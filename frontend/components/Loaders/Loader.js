import React, { FC } from "react";



const Loader= ({ className = "h-32 w-32" }) => {
  return (
    <div className="flex items-center justify-center h-auto">
      <div
        className={`${className} animate-spin rounded-full border-t-2 border-b-2 border-gray-400`}
      ></div>
    </div>
  );
};

export default Loader;
