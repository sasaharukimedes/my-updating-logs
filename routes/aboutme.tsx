import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function AboutMe() {
  return (
    <>
      <Header />
      <div class="bg-slate-100 w-full mx-auto py-4 px-8 flex flex-col justify-center items-center gap-2">
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
              ハルキメデス
            </h2>
          </div>
          <div class="mt-5 flex container  justify-center items-center mx-auto font-semibold">
            <div class="p-2 leading-loose">
              I am 27 years old, born in 1995, from Hokkaido, Japan. <br />
              I was in Hokkaido until high school. <br />
              After graduating, I attended a prep school for a year and then
              enrolled in the School of Global Japanese Studies at Meiji
              University.<br />
              Now I'm a programmer, writing this blogs and creating my own apps.<br/>
              In this blog, I will write about my feelings, thoughts, etc., and learnings about the program, regardless of genre.<br/>
              So please read them if you are interested!<br/>
              For more information about the program, please see the portfolio!
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
