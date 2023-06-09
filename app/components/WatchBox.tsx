import React from "react";
import { useEffect, useState } from "react";

const weatherApi =
  "http://api.weatherapi.com/v1/current.json?key=8fa82f700f084267b12184945230506&q=Vigo&aqi=no";

function WatchBox() {
  const [weather, setWeather] = useState([]);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    fetch(weatherApi)
      .then((res) => res.json())
      .then((data) => setWeather(data.current))
      .catch((error) => console.log(error));

    return () => {
      clearInterval(interval);
    };
  }, []);

  const digitalWatch = () => {
    let hr = time.getHours();
    let min = time.getMinutes();

    min = checkTime(min);

    return (
      <div className="flex h-full justify-center items-center text-[90px] font-bold">
        <div className="text-[#3C3C3C]">{hr}</div>
        <div className="text-[#3C3C3C]">:</div>
        <div className="text-black">{min}</div>
      </div>
    );
  };

  function checkTime(i: any) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  return (
    <div className="h-full w-1/2 bg-white bg-opacity-[40%] border-4 rounded-[20px] p-3">
      <div className="h-[25%]">
        <div className="text-white flex items-center gap-3 font-bold text-[3vw]">
          Vigo, {weather.temp_c} °C
        </div>
        <hr className="h-[2px] my-5 bg-gray-200 border-0 dark:bg-gray-500" />
      </div>
      <div className="h-[70%] flex flex-col items-center justify-center">
        {digitalWatch()}
      </div>
    </div>
  );
}

export default WatchBox;
