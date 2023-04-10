import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ route }) => {
  const { id, name, path } = route;
  return (
    <li className="hover:text-[#840fd3]">
      {/* <a href={path}>{name}</a> */}
      <Link to={path}>{name}</Link>
    </li>
  );
};

export default Menu;
