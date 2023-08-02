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
              I was born in 1995 in Hokkaido, Japan and am currently 28 years
              old.<br />
              Until high school, I lived in Hokkaido.<br />
              After graduating, I spent a year at a prep school before enrolling
              in the School of Global Japanese Studies at Meiji
              University.<br />
              As a programmer, I am currently writing this blog and creating my
              own apps.<br />
              In this blog, I will write about my feelings, thoughts, and what I
              learned, regardless of the genre.<br />
              Please read them if you would like.<br />
              To learn more about my programming activities, please check out my
              Github!<br />
              Please go to my Github next to my icon!
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
