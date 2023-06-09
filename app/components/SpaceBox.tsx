import React from "react";

function SpaceBox() {
  return (
    <div className="h-full w-[30%] bg-white bg-opacity-[40%] border-4 rounded-[20px] p-3">
      <h1 className="text-center text-white font-bold text-[3vw]">
        Good evening
      </h1>
      <hr className="h-[2px] my-5 bg-gray-200 border-0 dark:bg-gray-500" />
      <button className="bg-black text-white px-3 py-1 rounded-[20px] w-full">
        Create new work space
      </button>
    </div>
  );
}

export default SpaceBox;
