import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Input = () => {
  return (
    <div className="flex justify-center items-center my-4">
      <div className="flex items-center justify-center flex-row space-x-4 w-3/4">
        <input
          type="text"
          placeholder="Search for city...."
          className="w-full p-2 capitalize focus:outline-none placeholder:lowercase text-xl font-light shadow-xl rounded-md "
        />
        <UilSearch
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          size={25}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex justify-center items-center w-1/4">
        <button className="text-white  font-light text-xl">°C</button>
        <p className="text-white mx-1">|</p>
        <button className="text-white  font-light text-xl">°F</button>
      </div>
    </div>
  );
};

export default Input;
