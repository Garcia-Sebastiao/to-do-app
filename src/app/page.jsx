import { arrowIcon, illustration } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen bg-primary-color relative">
      <Image
        className="absoltule top-0 left-0 w-[78%]"
        src={illustration}
        alt="Illustration"
      />

      <div className="w-full absolute top-[62%] flex items-center flex-col justify-center px-6 gap-5">
        <h2 className="font-bold font-helveticaBold text-2xl max-w-[12rem] text-center">
          Plan your Day in Details
        </h2>

        <span className="text-center text-primary-color">
          There are many variations of passagesThere are many variations.
        </span>

        <div className="p-2 border-secondary-color border-[1px] rounded-full flex items-center justify-center">
          <Link
            className="flex items-center justify-center p-4 rounded-full bg-secondary-color transition duration-150 hover:brightness-75"
            href="/auth/"
          >
            <Image src={arrowIcon} alt="Arrow Icon" />
          </Link>
        </div>
      </div>
    </main>
  );
}
