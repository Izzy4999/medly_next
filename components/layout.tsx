import React from "react";
import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <div className="backdrop-blur-md fixed top-0 w-full pr-3 z-50">
        <Header />
      </div>
      <div className="mt-16">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
