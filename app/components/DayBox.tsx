import React from "react";

const day = () => {
    let date = new Date();

    if (date.getDay() === 0) {
      return <>Sunday {date.getDate()}</>;
    } else if (date.getDay() === 1) {
      return <>Monday {date.getDate()}</>;
    } else if (date.getDay() === 2) {
      return <>Tuesday {date.getDate()}</>;
    } else if (date.getDay() === 3) {
      return <>Wednesday {date.getDate()}</>;
    } else if (date.getDay() === 4) {
      return <>Thursday {date.getDate()}</>;
    } else if (date.getDay() === 5) {
      return <>Friday {date.getDate()}</>;
    } else if (date.getDay() === 6) {
      return <>Saturday {date.getDate()}</>;
    }
  };

function DayBox() {
  return (
    <div className="h-full w-1/2 bg-white bg-opacity-[40%] border-4 rounded-[20px] p-3">
      <div className="h-[25%]">
        <h1 className="text-white font-bold text-[3vw]">{day()}</h1>
        <hr className="h-[2px] my-5 bg-gray-200 border-0 dark:bg-gray-500" />
      </div>
    </div>
  );
}

export default DayBox;
