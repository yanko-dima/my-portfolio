import React from "react";
import Navigation from "../navigation";
import ThemeSwitcher from "../theme-switcher";

const Header = () => {
  return (
    <header>
      <Navigation />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
