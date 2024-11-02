import React from "react";
import { Header } from "../components/Header";

export const MainLayout = ({ children }) => {
  return (
    <div className="p-5 lg:p-12 flex flex-col gap-10 bg-body-bg min-h-screen">
      <Header />
      {children}
    </div>
  );
};
