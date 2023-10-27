import React from "react";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButton from "./components/TopButton";
import Input from "./components/Input";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";

const App = () => {
  return (
    <div
      className="mx-auto max-w-screen-md mt-4 py-5 px-32 
    bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl h-fit"
    >
      <TopButton />
      <Input />
      <TimeAndLocation />
      <TemperatureAndDetails />
    </div>
  );
};

export default App;
