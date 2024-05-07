import React, { FC, ReactNode } from "react";

interface IMainContent {
  children: React.ReactNode;
}
const MainContent: FC<IMainContent> = ({ children }) => {
  return <section className="col-span-5 bg-slate-100">{children}</section>;
};

export default MainContent;
