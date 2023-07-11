"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  filterIcon,
  heartIcon,
  imageIcon,
  menuIcon,
  messageIcon,
  userIcon,
  userImage,
  workIcon,
} from "@/assets";
import Category from "@/components/UI/Category/Category";
import Task from "@/components/UI/Task/Task";

export default function Main() {
  const [menuActive, setMenuActive] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10 ? setHeaderFixed(true) : setHeaderFixed(false);
    });
  }, []);

  return (
    <main className="w-full h-screen relative">
      <nav
        className={`fixed z-10 h-screen transiiton duration-150 top-0 left-0 bg-white shadow-md ${
          menuActive ? "w-[70%] translate-x-0" : "w-0 -translate-x-28"
        } `}
      >
        <ul className="flex flex-col gap-4 p-4">
          <li>
            <Link
              className="font-semibold hover:font-semibold focus:font-semibold"
              href="/main/"
            >
              Home
            </Link>
          </li>
          <div className="w-full h-[1px] bg-gray-200"></div>
          <li>
            <Link className="hover:font-semibold focus:font-semibold" href="/">
              Log Out
            </Link>
          </li>
          <div className="w-full h-[1px] bg-gray-200"></div>
          <button
            className="text-2xl font-helveticaBold text-gray-400"
            onClick={() => setMenuActive(false)}
          >
            X
          </button>
        </ul>
      </nav>

      <header
        className={`flex w-full transition bg-white duration-150 justify-between items-center py-6 px-4 ${
          headerFixed ? "fixed top-0 left-0 shadow-lg" : " "
        }`}
      >
        <div className="flex items-center gap-4">
          <button onClick={() => setMenuActive(true)}>
            <Image className="w-[20px]" src={menuIcon} alt="Menu" />
          </button>
          <span className="font-semibold text-2xl">Home</span>
        </div>

        <div className="w-[50px] border-2 border-secondary-color h-[50px] rounded-full items-center justify-center">
          <Image
            className="w-full h-full rounded-full object-cover object-center"
            src={userImage}
            alt="User"
          />
        </div>
      </header>

      <section className="w-full px-4">
        <div className="w-full flex items-center p-3 bg-secondary-color rounded-full justify-between">
          <button className="py-3 px-8 bg-white rounded-full text-secondary-color font-semibold hover:text-secondary-color hover:bg-white transition duration-150">
            Task List
          </button>

          <button className="py-3 px-8 rounded-full text-white font-semibold hover:text-secondary-color hover:bg-white transition duration-150">
            Completed
          </button>
        </div>
      </section>

      <section className="w-full py-6 px-4">
        <header className="w-full flex items-center justify-between">
          <h2 className="text-[1.2rem] font-helveticaBold">Categories</h2>

          <div className="flex items-center gap-6">
            <Image className="w-[20px]" src={filterIcon} alt="Filter" />

            <Link
              className="bg-secondary-color rounded-full py-2 px-4 text-white"
              href="/main/tasks/addtask/"
            >
              Add
            </Link>
          </div>
        </header>

        <div className="flex w-full py-4 gap-4 items-center overflow-x-auto">
          <Category
            image={workIcon}
            alt="Work"
            style="hover:shadow-primary-color bg-primary-color"
            circleStyle="shadow-[#FCF5B340] border-[#FFF9C6]"
            title="Tasks"
            task="+3 tasks."
          />
          <Category
            image={heartIcon}
            alt="Heart"
            style="hover:shadow-color-1 bg-color-1"
            circleStyle="shadow-[#A6F08C40] border-[#C6FFDD]"
            title="Sport"
            task="+10 tasks."
          />
          <Category
            image={imageIcon}
            alt="Image"
            title="Habits"
            task="+04 tasks."
            style="hover:shadow-color-2 bg-color-2"
            circleStyle="shadow-[#B5AEFF40] border-[#C7C6FF]"
          />
        </div>
      </section>

      <section className="w-full flex flex-col gap-4 px-4 pb-10">
        <header className="w-full flex items-center justify-between">
          <h2 className="text-[1.2rem] font-helveticaBold">Task List</h2>

          <Link
            className="bg-secondary-color rounded-full py-3 px-8 text-white text-sm"
            href="/main/tasks/addtask/"
          >
            Add Task
          </Link>
        </header>

        <form action="" className="w-full">
          <div className="w-full bg-[#00000010] rounded-2xl p-2">
            <input
              type="search"
              className="w-full bg-transparent p-2 outline-none placeholder:text-[#0000080]"
              placeholder="Search your tasks"
            />
          </div>
        </form>

        <div className="w-full h-[1px] bg-gray-200"></div>

        <div className="w-full items-center gap-6 flex-col flex py-4">
          <Task image={messageIcon} title="Email Check " />
          <Task image={userIcon} title="Weekly Meeting " />
          <Task image={userIcon} title="Team Discussion " />

          <button className="bg-secondary-color rounded-full py-3 px-12 text-white">
            Select All Task
          </button>
        </div>
      </section>
    </main>
  );
}
