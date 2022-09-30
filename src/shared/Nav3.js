import React from "react";
import { NavLink } from "react-router-dom";

const Nav3 = () => {
  return (
    <div className="flex justify-center items-center gap-8 pt-4">
      <NavLink
        to="users"
        className={({ isActive }) =>
          isActive ? "text-red-500 activePage" : "font-semibold"
        }
      >
        Users
      </NavLink>
      <NavLink
        to="atiq"
        className={({ isActive }) =>
          isActive ? "text-red-500" : "font-semibold"
        }
      >
        atiq
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive ? "text-red-500" : "font-semibold"
        }
      >
        about
      </NavLink>
    </div>
  );
};

export default Nav3;
