"use client";

import Sidebar from "./components/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}
const layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex w-full">
      <Sidebar />
      <section className="w-[80vw]">{children}</section>
    </main>
  );
};

export default layout;
