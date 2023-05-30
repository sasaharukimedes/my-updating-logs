import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { microcmsClient } from "../lib/microcmsClient.ts";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export interface Post {
  contents: [{
    id: string;
    url?: string;
    title: string;
    content: string;
  }];
}

//タイムゾーンを設定
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

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

export default function Home({ data }: PageProps<Post>) {
  return (
    <>
      <Head>
        <title>My Updating (b)logs</title>
      </Head>
      <div class="font-mono bg-slate-100 mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-20 flex flex-col justify-center">
        <Header />
        <h1 class="mt-5 font-extrabold text-4xl text-gray-500 flex mx-auto items-center justify-center">
          My Updating (b)logs
        </h1>
        <section class="mt-12 text-lg flex mx-auto justify-center items-center">
          {data.contents.map((content) => {
            return (
              <div class="p-4" key={content.id}>
                <a href={content.url} alt={content.title}>
                  <p>{content.title}</p>
                  <time
                    class="text-gray-500 text-sm"
                    dateTime={content.createdAt}
                  >
                    {dayjs(content.createdAt).format("YYYY年MM月DD日 HH:mm")}
                  </time>
                </a>
              </div>
            );
          })}
        </section>
        <Footer />
      </div>
    </>
  );
}
