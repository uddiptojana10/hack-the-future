import React, { useEffect, useState } from 'react'

import "./Navbar.css"
import LeftLogo from "../footer/assets/2-removebg-preview.png"
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div className="logo">
                        <img src={LeftLogo} alt="" className="img"/>
                    </div>
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="/">Theme</a></li>
                        <li><a href="/">Venue</a></li>
                        <li><a href="/">Schedule</a></li>
                        <li><a href="/">Prizes</a></li>
                        <li><a href="/">Judges</a></li>
                        <li><a href="/">Gallery</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>

                    {/* <div className="rightLogo">
                        <img src={LeftLogo} alt=""className="right-img" />
                    </div> */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
