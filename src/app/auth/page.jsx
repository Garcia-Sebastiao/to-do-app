//IMAGES
import { googleIcon, loginIllustration } from "@/assets";

// NEXT Components
import Link from "next/link";
import Image from "next/image";

// JSX Components
import LinkButton from "@/components/UI/Button/LinkButton";

export default function Main() {
  return (
    <main className="w-full h-screen bg-primary-color relative">
      <Image
        className=" pt-10 w-[100%]"
        src={loginIllustration}
        alt="Illustration"
      />

      <div className="w-full flex items-center flex-col justify-center px-6 gap-5">
        <h2 className="font-bold font-helveticaBold text-2xl max-w-[16rem] text-center">
          Join us, and manage your tasks.
        </h2>

        <span className="text-center text-primary-color">
          Choose an authentication method to get started.
        </span>

        <button className="flex w-full items-center gap-2 text-secondary-color justify-center py-4 border-secondary-color border-[1px] rounded-full px-8 transition duration-150 hover:brightness-75 hover:bg-[#24242450]">
          <Image src={googleIcon} alt="Icone Google" />
          Sign Up With Google
        </button>

        <LinkButton href="/auth/signin/" value="Get Started" />

        <span className="pb-10">
          Dont have a account?{" "}
          <Link className="font-semibold" href="/auth/signup/">
            Sign Up.
          </Link>
        </span>
      </div>
    </main>
  );
}
