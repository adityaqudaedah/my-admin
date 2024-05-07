import React, { FC } from "react";
import SideMenu from "./side-menu";
import { MENU_SETTING } from "@/lib/config";
import MainContent from "./main-content";

const MainLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="min-h-screen grid grid-cols-6">
      {/* side-bar */}
      <SideMenu menuItems={MENU_SETTING} />

      {/* main-content */}
      <MainContent>{children}</MainContent>
    </main>
  );
};

export default MainLayout;
