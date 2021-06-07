import React from "react";
import { Link } from "react-router-dom";
import { Home, Rooms } from "../pages/index";

const NavLinks = () => {
  const linkArray = [
    {
      component: { Home },
      page_name: "Home",
      to_path: "/"
    },
    {
      component: { Rooms },
      page_name: "Rooms",
      to_path: "/rooms"
    },
    {
      component: { Rooms },
      page_name: "Services",
      to_path: "/rooms"
    },
    {
      component: { Rooms },
      page_name: "Games",
      to_path: "/rooms"
    }
  ];

  const navlinks = linkArray.map((item, index) => {
    return (
      <li key={index}>
        <Link to={item.to_path}>{item.page_name}</Link>
      </li>
    );
  });
  return <>{navlinks}</>;
};

export default NavLinks;
