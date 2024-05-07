import ContentLayout from "@/components/content-layout";
import React, { FC } from "react";

const RouteLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ContentLayout>{children}</ContentLayout>;
};

export default RouteLayout;
