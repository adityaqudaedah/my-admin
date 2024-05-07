import Link from "next/link";
import React, { FC } from "react";

interface Menu {
  path: string;
  label: string;
}
interface ISideMenu<T> {
  menuItems: Array<T>;
}

const SideMenu: FC<ISideMenu<Menu>> = ({ menuItems }) => {
  return (
    <aside className="col-span-2 bg-white p-4">

      {/* brand */}
      <section className="flex flex-row justify-between">
        <p className="text-lg font-semibold">Admin</p>
      </section>

      {/* menu */}
      <section className="flex p-2">
        <ul className="w-full">
          {menuItems.map((menu, index) => (
            <li key={index}>
              <Link className="flex hover:bg-blue-50 hover:text-blue-700 p-2 rounded-md" href={menu.path}>{menu.label}</Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default SideMenu;
