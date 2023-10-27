import React from "react";

const TopButton = () => {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydeny",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];
  return (
    <div className="flex justify-around items-center  py-5">
      {cities.map((city) => (
        <button key={city.id} className="text-lg font-semibold text-white">
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
