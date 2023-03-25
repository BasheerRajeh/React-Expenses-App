import React from "react";
import sprite from "../../assets/icons/sprite.svg";
import "./Icon.css";

const Icon = ({ icon, className = "", onClick }) => {
    return (
        <svg onClick={onClick} className={`icon ${className}`}>
            <use xlinkHref={`${sprite}#${icon}`} />
        </svg>
    );
};

export default Icon;
