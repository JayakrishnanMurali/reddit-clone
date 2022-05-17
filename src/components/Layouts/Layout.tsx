import React from "react";
import Navbar from "../Navbar/Navbar";

interface T {
  children: React.ReactNode;
}

const Layout: React.FC<T> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
