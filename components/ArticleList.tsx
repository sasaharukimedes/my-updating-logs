import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { microcmsClient } from "../lib/microcmsClient.ts";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Home from "../routes/index.tsx";

interface ArticleListProps {
  data: Post;
}

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

export function ArticleList({ data }: ArticleListProps) {
  return (
    <>
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
    </>
  );
}
