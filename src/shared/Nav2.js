import React from 'react';
// import * as React from "react";
import { NavLink } from "react-router-dom";
const Nav2 = () => {
    let activeStyle = {
        textDecoration: "underline",
        color:'red',
        fontWeight:'800'
      };
    
      let activeClassName = "underline"
    return (
        <nav>
        <ul>
          <li>
            <NavLink
              to="messages"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="tasks"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="kaj"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              kaj
            </NavLink>
          </li>
          <li>
            {/* <NavLink
              to="tasks"
            >
              {({ isActive }) => (
                <span className={isActive ? activeClassName : undefined}>
                  Tasks
                </span>
              ))}
            </NavLink> */}
          </li>
        </ul>
      </nav>
    );
};

export default Nav2;