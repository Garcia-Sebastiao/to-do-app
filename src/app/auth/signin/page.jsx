import React from "react";
import Link from "next/link";

export default function SignIn() {
  return (
    <main className="w-full h-screen p-6 flex flex-col justify-center bg-primary-color gap-5">
      <h2 className="text-2xl font-semibold text-secondary-color">Sign In</h2>

      <span className="text-[#00000090] max-w-[20em]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>

      <form className="flex flex-col w-full gap-4" action="/main/">
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

        <Link href="/auth/forgotpassword/">Esqueceu sua senha?</Link>

        <button className="w-full p-4 rounded-md text-white bg-secondary-color">
          Sign in
        </button>
      </form>

      <span className="text-center">
        Dont have an account?{" "}
        <Link className="font-semibold" href="/auth/signup/">
          Sign Up
        </Link>
      </span>
    </main>
  );
}
