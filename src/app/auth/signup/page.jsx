import React from "react";
import Link from "next/link";

export default function Signup() {
  return (
    <main className="w-full h-screen p-6 flex flex-col justify-center bg-primary-color gap-5">
      <h2 className="text-2xl font-semibold text-secondary-color">Sign Up</h2>

      <span className="text-[#00000090] max-w-[20em]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>

      <form className="flex flex-col w-full gap-4" action="/auth/signup/verificationcode">
        <input
          type="text"
          placeholder="Place your username"
          className="px-2 py-4 border-secondary-color border-[1px] w-full rounded-md bg-transparent placeholder:text-[#00000090]"
        />

        <input
          type="email"
          placeholder="Place your email"
          className="px-2 py-4 border-secondary-color border-[1px] w-full rounded-md bg-transparent placeholder:text-[#00000090]"
        />
        <input
          type="password"
          placeholder="Place your password"
          className="px-2 py-4 border-secondary-color border-[1px] w-full rounded-md bg-transparent placeholder:text-[#00000090]"
        />

        <input
          type="password"
          placeholder="Confirm your password"
          className="px-2 py-4 border-secondary-color border-[1px] w-full rounded-md bg-transparent placeholder:text-[#00000090]"
        />

        <button className="w-full p-4 rounded-md text-white bg-secondary-color">
          Set Code
        </button>
      </form>

      <span className="text-center">
        Already have an account?{" "}
        <Link className="font-semibold" href="/auth/signin/">
          Sign In
        </Link>
      </span>
    </main>
  );
}
