import React from "react";


export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper light-green px1">
                <a href="/" className="brand-logo">React + Typescript </a>
                <ul className="right hide-on-med-and-down">
                </ul>
            </div>
        </nav>
    )
}
