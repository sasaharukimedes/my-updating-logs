type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "AboutMe", href: "/aboutme" },
    { name: "Articles", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <div class="bg-slate-100 w-full mx-auto py-4 px-8 flex flex-col md:flex-row gap-2">
      <div class="flex items-center flex-1">
        <img
          width="70"
          height="70"
          src="me.svg"
          alt="My image Cartoon"
          class="mr-2"
        />
        <div class="text-xl font-bold">
          My Updating (b)logs
        </div>
      </div>
      <ul class="flex items-center justify-end gap-3">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-black hover:font-semibold py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
