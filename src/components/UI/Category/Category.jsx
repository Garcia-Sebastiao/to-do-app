import React from "react";
import Image from "next/image";

export default function Category(props) {
  return (
    <div
      className={`flex flex-col flex-none items-start w-[120px] transition duration-200 p-3  rounded-[20px] gap-4 rounded-tr-[60px] hover:shadow-lg border-2 border-white ${props.style}`}
    >
      <div
        className={`flex p-2 bg-white rounded-full items-center justify-center border-[1px] shadow-md ${props.circleStyle}`}
      >
        <Image className="w-[30px]" src={props.image} alt={props.alt} />
      </div>

      <div>
        <h3 className="font-helveticaBold text-lg">{props.title}</h3>
        <small className="text-[#757575]">{props.task}</small>
      </div>
    </div>
  );
}
