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
    const id = ctx.params.id;
    // console.log("id:", id); // idの値をコンソールに出力して確認
    const blogs = await microcmsClient.get<Post>({
      endpoint: "blogs",
      contentId: id,
      queries: { limit: 99 },
    });
    // console.log("blogs:", blogs); // blogsの値をコンソールに出力して確認
    if (!blogs) {
      return new Response("Response not found", { status: 404 });
    }
    return ctx.render(blogs);
  },
};

export default function Post({ data }: PageProps<Post>) {
  return (
    <div class="bg-slate-100 w-full h-screen">
      <Head>
        <title>My Updating (b)logs</title>
      </Head>
      <div class="font-sans bg-slate-100 mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col justify-center">
        <Header />
        <div class="mt-12 text-lg flex flex-col mx-auto justify-center items-center">
          <div class="flex flex-col mx-auto" key={data.id}>
            <h1 class="font-bold flex justify-center items-center text-2xl md:text-5xl">
              {data.title}
            </h1>
            <time
              class="flex justify-end items-center text-gray-500 mt-8 font-semibold text-sm"
              dateTime={data.createdAt}
            >
              {dayjs(data.createdAt).tz("Asia/Tokyo").format(
                "YYYY年MM月DD日 HH:mm",
              )}
            </time>
            <p class="flex justify-end items-center text-gray-500 mt-2 font-semibold text-sm">
              #{data.category && data.category.name}
            </p>
            <div
              class="mt-5 flex justify-start mx-auto font-semibold"
              dangerouslySetInnerHTML={{ __html: data.content }}
            >
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
