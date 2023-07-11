import React from "react";
import Link from "next/link";

export default function LinkButton(props) {
  return (
    <Link href={props.href} className="flex w-full items-center gap-2 text-white justify-center py-4 bg-secondary-color rounded-full px-8 transition duration-150 hover:brightness-75">
      {props.value}
    </Link>
  );
}
