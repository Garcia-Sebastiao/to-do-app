import React from "react";
import Image from "next/image";

export default function Task(props) {
  return (
    <div className="w-full flex items-center justify-between rounded-2xl py-4 px-6 shadow-xl">
      <div className="flex items-center gap-3">
        <Image className="w-[30px]" src={props.image} alt={props.alt} />

        <span className="font-semibold ">{props.title}</span>
      </div>

      <div>
        <input type="checkbox" name="" id="" />
      </div>
    </div>
  );
}
