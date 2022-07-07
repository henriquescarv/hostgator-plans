import React from "react";
import './Header.css';
import logo from '../../images/hostgator-logo.svg';

export default function Header() {
    return (
        <header>
            <div className="header-logo">
                <a href="/">
                    <img src={`${logo}`} alt='HostGator'/>
                </a>
            </div>
        </header>
    );
}