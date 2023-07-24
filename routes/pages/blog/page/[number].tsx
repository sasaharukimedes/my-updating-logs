import { Pagination } from "../../../../components/Pagination.tsx";
import { microcmsClient } from "../../../../lib/microcmsClient.ts";

import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Header from "../../../../components/Header.tsx";
import Footer from "../../../../components/Footer.tsx";
import type { Post } from "../../../../types/post.ts";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const PER_PAGE = 5;
    const id = ctx.params.id;
    const blogs = await microcmsClient.get<Post>({
      endpoint: "blogs",
      queries: { offset: (id - 1) * 5, limit: 5 },
    });
    const range = (start, end) =>
      [...Array(end - start + 1)].map((_, i) => start + i);
    const totalCount = blogs.totalCount;
    const paths = range(1, Math.ceil(blogs.totalCount / PER_PAGE)).map((
      number,
    ) => `/pages/blog/page/${number}`);
    console.log("totalCount:", totalCount);
    console.log("Path:", paths);
    if (!blogs) {
      return new Response("Response not found", { status: 404 });
    }
    return ctx.render(blogs);
  },
};

//タイムゾーンを設定
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

export default function Home({ data }: PageProps<Post>) {
  return (
    <div class="bg-slate-100 w-full h-screen">
      <Head>
        <title>My Updating (b)logs</title>
      </Head>
      <div class="font-sans bg-slate-100 mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col justify-center">
        <Header />
        <h1 class="mt-5 font-extrabold text-3xl md:text-5xl flex mx-auto items-center justify-center">
          My Updating (b)logs
        </h1>
        <h2 class="flex mt-5 justify-end font-medium">
          現在{data.totalCount}記事あります！
        </h2>
        <section class="mt-8 text-lg flex flex-col mx-auto justify-center items-center">
          {data.contents.map((content) => {
            return (
              <div class="p-4 font-normal" key={content.id}>
                <a href={`/pages/blog/${content.id}`} alt={content.title}>
                  <p class="text-2xl  hover:font-extrabold">{content.title}</p>
                  <time
                    class="text-gray-500 text-sm"
                    dateTime={content.createdAt}
                  >
                    {dayjs(content.createdAt).tz("Asia/Tokyo").format(
                      "YYYY年MM月DD日 HH:mm",
                    )}
                  </time>
                  <p class="text-gray-500 text-sm">
                    #{content.category && content.category.name}
                  </p>
                </a>
              </div>
            );
          })}
        </section>
        <Pagination totalCount={data.totalCount} />
        <Footer />
      </div>
    </div>
  );
}
