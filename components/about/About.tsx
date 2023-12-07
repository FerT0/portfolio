import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About me
        </h2>
      </div>
      <div>
        <p className="mb-4 text-slate-400">
          <a className="font-medium text-secondary-color">Software developer</a>{" "}
          from Colombia. I got into the programming world at the young age of
          14, my first programming language being Java. Since then, I
          haven&apos;t stopped learning and being passionate about everything
          related to technology. I also develop games with engines like Unity
          and Unreal as a hobbie, even though I&apos;m more into the web
          development world.
        </p>
        <p className="mb-4 text-slate-400">
          I&apos;ve created and been part of multiple projects, I also like to
          constantly update or improve my projects, these can be seen in my{" "}
          <a
            className="font-medium text-secondary-color cursor-pointer"
            href="https://github.com/FerT0"
            rel="noreferrer noopener"
            target="_blank"
          >
            GitHub profile
          </a>{" "}
          so make sure to check it out.
        </p>
      </div>
    </section>
  );
}
