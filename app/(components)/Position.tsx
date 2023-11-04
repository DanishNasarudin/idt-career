import React from "react";

type Props = {
  location: string;
  title: string;
  description: string;
  link: string;
};

const Position = ({ location, title, description, link }: Props) => {
  return (
    <div className="w-full p-8 rounded-xl bg-white text-black">
      <p>{location}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="py-2 px-4 sm:py-4 sm:px-8 border-black border-[1px] rounded-lg text-xs w-fit mx-auto mt-8">
        <p className="text-[10px] sm:text-sm">
          <b>View Details</b>
        </p>
      </button>
    </div>
  );
};

export default Position;
