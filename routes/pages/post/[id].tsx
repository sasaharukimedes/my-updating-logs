import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { microcmsClient } from "../../../lib/microcmsClient.ts";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import type { Post } from "../types/post.ts";
import Header from "../../../components/Header.tsx";
import Footer from "../../../components/Footer.tsx";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const blogs = await microcmsClient.get<Post>({
      endpoint: "blogs",
      queries: { limit: 99 },
    });
    if (!blogs) {
      return new Response("Response not found", { status: 404 });
    }
    return ctx.render(blogs);
  },
};

export default function Post({ data }: PageProps<Post>) {
  return (
    <>
      <Head>
        <title>My Updating (b)logs</title>
      </Head>
      <div class="font-sans bg-slate-100 mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col justify-center">
        <Header />
        <div class="mt-12 text-lg flex mx-auto justify-center items-center">
          {data.contents.map((content) => {
            return (
              <div class="flex flex-col mx-auto" key={content.id}>
                <h1 class="font-bold text-2xl md:text-5xl">
                  {content.title}
                </h1>
                <time
                  class="flex justify-end text-gray-500 mt-5 text-sm"
                  dateTime={content.createdAt}
                >
                  {dayjs(content.createdAt).format("YYYY年MM月DD日 HH:mm")}
                </time>
                <div class="mt-5 font-semibold ">
                  {content.content}
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}
