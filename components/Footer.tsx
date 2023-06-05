import { ComponentChildren } from "preact";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
type Props = {
  children: ComponentChildren;
};

export default function Footer({ children }: Props) {
  return (
    <div class="bg-slate-100 flex justify-center items-center w-full max-w-screen gap-8 md:gap-16 px-8 py-8 text-md">
      <div class="text-gray-500 space-y-2 flex flex-col">
        <div class="text-md">
          Copyright © 2023 Harukimdes<br />
          All right reserved.
        </div>

        <div class="flex justify-between items-center">
          <a
            href="https://github.com/sasaharukimedes"
            class="inline-block hover:text-black m-5"
          >
            <BrandGithub />
          </a>
          <a href="https://fresh.deno.dev">
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge.svg"
              alt="Made with Fresh"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
