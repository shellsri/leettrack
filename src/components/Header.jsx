import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">LeetCode Track</h1>

      <nav className="nav">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/problems">Problems</Link>
      </nav>
    </header>
  );
};

export default Header;
