import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TemperatureAndDetails = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center py-6">
          <p className="text-white">clear or clowdy</p>
        </div>
        <div className="flex items-center justify-between py-3">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
            alt=""
            className="w-[40px]"
          />
          <p className="text-3xl text-white">34°</p>
          <div className="flex  flex-col space-y-2 ">
            <div className="flex items-center justify-center text-white text-sm font-light">
              <UilTemperature
                className="mr-1 text-white font-semibold"
                size={18}
              />
              Real Feel:
              <span className="ml-2 font-semibold">32°</span>
            </div>
            <div className="flex items-center justify-center text-white  text-sm font-light">
              <UilTear className="mr-1 text-white font-semibold" size={18} />
              Humidity:
              <span className="ml-2 font-semibold">32°</span>
            </div>
            <div className="flex items-center justify-center text-white  text-sm font-light">
              <UilWind className="mr-1 text-white font-semibold" size={18} />
              Wind:
              <span className="ml-2 font-semibold">32km/hr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
