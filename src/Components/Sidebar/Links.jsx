import React from "react";
import { NavLink } from "react-router-dom";

const Links = ({ Link, Icon, Url }) => {
  return (
    <div className="flex items-center">
      <span className="material-symbols-outlined text-yellow-500 pr-4">{Icon}</span>
      <NavLink
        to={Url}
        className={(e) =>
          `text-white text-base ${e.isActive ? "text-yellow-500" : "hover:text-yellow-500"}`
        }
      >
        {Link}
      </NavLink>
    </div>
  );
};

export default Links;
