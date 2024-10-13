import React from "react";
import { navigation } from "@/constants/navigation";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        {navigation.map((item) => (
          <li key={item.name}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
