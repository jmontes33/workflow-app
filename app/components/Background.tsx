import React from "react";

function Background() {
  return (
    <div className="flex absolute w-screen h-screen">
      <div className="w-[50%] flex flex-col items-end justify-center gap-[60px]">
        <div className=" w-[500px] h-[500px] rounded-full bg-pink-500"></div>
        <div className=" w-[500px] h-[500px] rounded-full bg-blue-500"></div>
      </div>
      <div className="w-[50%] flex flex-col items-start justify-center gap-[60px]">
        <div className=" w-[500px] h-[500px] rounded-full bg-red-800"></div>
        <div className=" w-[500px] h-[500px] rounded-full bg-orange-500"></div>
      </div>
    </div>
  );
}

export default Background;
