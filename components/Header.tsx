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
    <div class="bg-white w-full max-w-screen py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <img
          width="30"
          height="30"
          src="myself-cartoon.jpg"
          alt="My image Cartoon"
          class="mr-2"
        />
        <div class="text-xl  ml-1 font-bold">
          My Updating (b)logs
        </div>
      </div>
      <ul class="flex items-center gap-6">
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
