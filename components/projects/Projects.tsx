import React from "react";
import { Star } from "../icons/Icons";
import Image from "next/image";
import shoppey from "../../images/shoppey.png";
import spotify from "../../images/spotify.png";
import { GitHub } from "../icons/Icons";
import { Arrow } from "../icons/Icons";

export default function Projects() {
  return (
    <section id="projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>

      <ul>
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
            <div className="z-10 sm:order-2 sm:col-span-6 ">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200 flex gap-2 items-center mb-2">
                <span>
                  <Star />
                </span>
                Featured project
              </h3>
              <h3 className="flex items-center gap-2 font-medium leading-tight text-slate-200">
                Shoppey{" "}
                <a
                  href="https://github.com/FerT0/shoppey"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="hover:text-[#2C74B3] duration-300"
                >
                  <GitHub />
                </a>
                <a
                  href="https://github.com/FerT0/shoppey"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="hover:text-[#2C74B3] duration-300"
                >
                  <Arrow />
                </a>
              </h3>
              <p className="mt-2 text-sm leading-normal text-slate-400">
                E-commerce website made with NextJS. It makes use of a free
                database with PostgreSQL to store the users info and products
                info. It allows the user to add products to their cart and
                manage their own products.
              </p>
              <ul className="mt-2 flex flex-wrap">
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-[#2C74B3] px-3 py-1 text-xs font-medium leading-5 text-slate-200 ">
                    NextJS
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-[#2C74B3] px-3 py-1 text-xs font-medium leading-5 text-slate-200 ">
                    React
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-[#2C74B3] px-3 py-1 text-xs font-medium leading-5 text-slate-200 ">
                    Supabase
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-[#2C74B3] px-3 py-1 text-xs font-medium leading-5 text-slate-200 ">
                    Tailwind CSS
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-[#2C74B3] px-3 py-1 text-xs font-medium leading-5 text-slate-200 ">
                    TypeScript
                  </div>
                </li>
              </ul>
            </div>
            <Image
              src={shoppey}
              alt="Shoppey image"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            ></Image>
          </div>
        </li>
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
            <div className="z-10 sm:order-2 sm:col-span-6 ">
              <h3 className="flex items-center gap-2 font-medium leading-tight text-slate-200">
                Spotify back-end clone
                <a
                  href="https://github.com/FerT0/spotify-backend-clone"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="hover:text-[#2C74B3] duration-300"
                >
                  <GitHub />
                </a>
              </h3>
              <p className="mt-2 text-sm leading-normal text-slate-400">
                Back-end project made with Express. It provides some of the
                basic Spotify features such as authentication, posting and
                deleting tracks and more.
              </p>
              <ul className="mt-2 flex flex-wrap">
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-[#2C74B3] px-3 py-1 text-xs font-medium leading-5 text-slate-200 ">
                    Express
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-[#2C74B3] px-3 py-1 text-xs font-medium leading-5 text-slate-200 ">
                    MongoDB
                  </div>
                </li>
              </ul>
            </div>
            <Image
              src={spotify}
              alt="Shoppey image"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            ></Image>
          </div>
        </li>
      </ul>
      <span className="text-sm leading-normal text-slate-400">
        See more in my{" "}
        <a
          className="font-medium text-secondary-color cursor-pointer"
          href="https://github.com/FerT0"
          rel="noreferrer noopener"
          target="_blank"
        >
          GitHub profile
        </a>{" "}
      </span>
    </section>
  );
}
