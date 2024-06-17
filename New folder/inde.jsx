// src/Header.jsx
import React from "react";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="main-header">
            <div className="left" onClick={() => handleNavigation("/")}>
                logo
            </div>

            <div className="center" onClick={() => handleNavigation("/")}>
                <p>THE VIEW OF FITNESS</p>
            </div>

            <div className="right">
                <span onClick={() => handleNavigation("/login")}>login</span>
                <div className="icon">
                    <span onClick={() => handleNavigation("/search")}>
                        <FiSearch />
                    </span>
                    <span onClick={() => handleNavigation("/favourite")}>
                        <FiHeart />
                    </span>
                    <span onClick={() => handleNavigation("/wish")}>
                        <FiShoppingCart />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;
