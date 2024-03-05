import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/Kalvium-Logo-SVG.svg";
import searchIcon from "../assets/download.png";
import "./Navbar.css";



export default function NavigationBar({ setSearchedValue }) {
  const [searchValue, setSearchValue] = useState("");

  const performSearch = () => {
    setSearchTerm(searchValue);
  };

  const handleInputChange = (e) => {
    console.log(searchValue)
    setSearchValue(e.target.value);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(searchValue);
    }
  };

  const handleLogoClick = () => {
    setSearchValue("");
  };

  useEffect(()=>{
    setSearchedValue(searchValue)
  },[searchValue])

  return (
    <>
      <nav className="navbar">
      <Link to="/" onClick={handleLogoClick}>
            <img className="nav-logo" src={logoImage} alt="Kalvium Logo" />
          </Link>
        <Link to="/RegisterForm">
          <button className="register-btn">Register</button>
        </Link>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={handleInputChange}
            onKeyPress={handleEnterKeyPress}
          />
          <button className="search-btn" onClick={performSearch}>
            <img className="search-icon" src={searchIcon} alt="Search Icon" />
          </button>
        </div>
      </nav>
    </>
  );
}