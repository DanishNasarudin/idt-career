"use client";
import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: Props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3>{question}</h3>
        <span
          className={`rotate-${toggle ? "45" : "0"} transition-all text-lg`}
        >
          {"+"}
        </span>
      </div>
      <div
        className={` ${
          toggle ? "grid-rows-[1fr] mb-4" : "grid-rows-[0fr]"
        } grid transition-all`}
      >
        <div className="overflow-hidden">
          <p>{answer}</p>
        </div>
      </div>
      <div className="border-[1px] border-zinc-700"></div>
    </div>
  );
};

export default Question;
