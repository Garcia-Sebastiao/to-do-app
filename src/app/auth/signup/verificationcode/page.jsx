import React from "react";
import Link from "next/link";

export default function VerificationCode() {
  return (
    <main className="w-full h-screen p-6 flex flex-col justify-center bg-primary-color gap-5">
      <h2 className="text-2xl font-semibold text-secondary-color">
        Authenticate Account
      </h2>

      <span className="text-[#00000090] max-w-[20em]">
        We sent a verification code to your email. Please place here.
      </span>

      <form className="flex flex-col w-full gap-4" action="/main/">
        <input
          type="number"
          placeholder="Verification Code"
          className="px-2 py-4 border-secondary-color border-[1px] w-full rounded-md bg-transparent placeholder:text-[#00000090]"
        />

        <button className="w-full p-4 rounded-md text-white bg-secondary-color">
          Set Code
        </button>
      </form>

      <span className="text-center">
        Didnt received an verification code?{" "}
        <Link className="font-semibold" href="/auth/signup/verificationcode/">
          Try Again.
        </Link>
      </span>
    </main>
  );
}
