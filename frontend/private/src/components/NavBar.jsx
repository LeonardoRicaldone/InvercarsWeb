import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import IsoInver from "../images/isoinver.png";
import { FiHome } from "react-icons/fi";
import { PiCarSimpleBold, PiChatTeardropTextBold } from "react-icons/pi";
import { FaRegFolder, FaRegUser } from "react-icons/fa6";
import { TbDatabaseDollar } from "react-icons/tb";
import { LuTag, LuLogOut } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="nav-layout">
      <div className={`sidebar-vertical ${isOpen ? "expanded" : "collapsed"}`}>
        <img
          src={IsoInver}
          alt="Iso Logo"
          className="iso-logo clickable"
          onClick={toggleSidebar}
        />
        {isOpen && (
          <nav className="sidebar-icons">
            <Link to="#"><FiHome /></Link>
            <Link to="/cars"><PiCarSimpleBold /></Link>
            <Link to="/brands"><LuTag /></Link>
            <Link to="#"><FaRegFolder /></Link>
            <Link to="#"><TbDatabaseDollar /></Link>
            <Link to="#"><PiChatTeardropTextBold /></Link>
            <Link to="/profile"><FaRegUser /></Link>
            <Link to="/login"><LuLogOut /></Link>
          </nav>
        )}
      </div>

      <div className="topbar">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar"
        />
      </div>
    </div>
  );
};

export default NavBar;
