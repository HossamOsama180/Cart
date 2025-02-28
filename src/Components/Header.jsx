import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const product = useSelector((state) => state.counterReducer.Products);
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark", darkMode);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header">
            <div className="app-container">
                <button onClick={toggleDarkMode} className="dark-mode-btn">
                    {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
                </button>
            </div>

            {/* زر Toggle Menu */}
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>

            <div className={`nav-links ${menuOpen ? "show" : ""}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/Login" onClick={() => setMenuOpen(false)}>Login</Link>
                <span className="sc">
                    <Link to="/Cart" onClick={() => setMenuOpen(false)}>Cart</Link>
                    ({product.length > 0 ? product.length : 0})
                </span>
            </div>
        </div>
    );
};

export default Header;
