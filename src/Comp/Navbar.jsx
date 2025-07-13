// src/components/NavBar.jsx

import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeClass =
    "text-white border-b-2 border-white font-semibold";

  const inactiveClass =
    "text-gray-200 hover:text-white";

  return (
    <nav className="bg-blue-600 text-white py-4 px-6 flex justify-center gap-8 sticky top-0 z-10">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        About
      </NavLink>
      <NavLink
        to="/prompts"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Prompt Packs
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Contact
      </NavLink>

    </nav>
  );
};

export default NavBar;
