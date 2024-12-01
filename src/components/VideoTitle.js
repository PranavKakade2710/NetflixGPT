import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full aspect-video flex flex-col justify-center items-start px-6 md:px-24 text-white bg-gradient-to-r from-black via-transparent to-black z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        {title}
      </h1>
      <p className="py-6 text-sm md:text-lg w-full md:w-2/5 leading-relaxed">
        {overview}
      </p>
      <div className="flex space-x-4">
        <button className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg py-3 px-8 md:px-16 text-base md:text-xl shadow-lg transition">
          ▷ Play
        </button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg py-3 px-8 md:px-16 text-base md:text-xl bg-opacity-50 shadow-lg transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
