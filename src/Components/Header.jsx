import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const product = useSelector((state) => state.counterReducer.Products);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header">
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`nav-links ${menuOpen ? "show" : ""}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <span className="sc">
                    <Link to="/Cart" onClick={() => setMenuOpen(false)}>Cart</Link>
                    ({product.length > 0 ? product.length : 0})
                </span>
            </div>
        </div>
    );
};

export default Header;
