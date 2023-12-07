import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import { LinkedIn } from "@/components/icons/Icons";
import { GitHub } from "@/components/icons/Icons";
import { Google } from "@/components/icons/Icons";

export default function Home() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:py-24 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Juan Tascon
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Software Developer
              </h2>
              <div className="flex gap-2 mt-4">
                <a
                  href="https://www.linkedin.com/in/juantascon/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[50%] bg-[hsla(0,0%,100%,.1)] p-2 duration-300 cursor-pointer hover:bg-[#2C74B3]"
                >
                  <LinkedIn />
                </a>
                <a
                  href="https://github.com/FerT0"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[50%] bg-[hsla(0,0%,100%,.1)] p-2 duration-300 cursor-pointer hover:bg-[#2C74B3]"
                >
                  <GitHub />
                </a>
                <a
                  href="mailto:jtasconacevedo@gmail.com"
                  className="rounded-[50%] bg-[hsla(0,0%,100%,.1)] p-2 duration-300 cursor-pointer hover:bg-[#2C74B3]"
                >
                  <Google />
                </a>
              </div>
            </div>
          </header>

          <main className="pt-24 lg:w-1/2">
            <About />
            <Projects />
          </main>
        </div>
      </div>
    </>
  );
}
