import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";

export default function AboutMe() {
  return (
    <div class="bg-slate-100 w-full h-screen">
      <Header />
      <div class="mx-auto py-4 px-8 flex flex-col justify-center items-center gap-2">
        <h1 class="m-5 text-5xl font-bold ">
          About Me!!
        </h1>
        <div class="mt-3 flex flex-col  lg:flex-row justify-center items-center flex-1">
          <div class="flex flex-col mx-auto justify-center items-center">
            <img
              width="150"
              height="150"
              src="myself-image.gif"
              alt="My image Cartoon"
              class="m-3"
            />
            <h2 class="mt-2 text-2xl font-bold">
              I'm Harukimedes.
            </h2>
            <a
              href="https://github.com/sasaharukimedes"
              class="text-gray-500 inline-block hover:text-black m-3"
            >
              <BrandGithub />
            </a>
          </div>
          <div class="mt-5 flex container  justify-center items-center mx-auto font-semibold">
            <div class="p-2 leading-loose">
              I am 28 years old, born in 1995, from Hokkaido, Japan. <br />
              I was in Hokkaido until high school. <br />
              After graduating, I attended a prep school for a year and then
              enrolled in the School of Global Japanese Studies at Meiji
              University.<br />
              Now I'm a programmer, writing this blogs and creating my own
              apps.<br />
              In this blog, I will write about my feelings, thoughts, and what I
              learned regardless of genre.<br />
              So please read them if you are interested.<br />
              For further information on my programming activities, please watch
              my Github! You can jump to my Github from next to my icon!
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
