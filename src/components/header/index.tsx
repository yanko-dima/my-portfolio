import React from "react";
import NavBar from "@/components/nav-bar";
import ThemSwitcher from "@/components/them-switcher";

const Header = () => {
  return (
    <header>
      <NavBar />
      <ThemSwitcher />
    </header>
  );
};

export default Header;
