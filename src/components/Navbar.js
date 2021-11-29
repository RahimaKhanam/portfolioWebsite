import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import "./Navbar.css";
import { FaLinkedin, FaMediumM, FaGithub } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';



const Navbar = (props) => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
            <nav className="main-nav">
                {/* #1 logo section */}
                <div className="logo">
                    <Link to="/" alt="logo_image">
                        <img src={logo} className="logo-img"/>
                    </Link>
                </div>

                {/* #2 Menu section */}
                <div className={
                    showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                }>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* #3 Social media icons */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <Link className="linkedin" to="https://www.linkedin.com/in/rahimakhanam" target="_rahi"><FaLinkedin size={30} /></Link>

                        </li>
                        <li>
                            <Link className="github" to="https://github.com/RahimaKhanam" target="_rahm"><FaGithub size={30} /></Link>
                        </li>
                        <li>
                            <Link className="medium" to="https://medium.com/@rahimakhanam" target="_rahim"><FaMediumM size={30} /></Link>
                        </li>
                    </ul>

                    {/* Hamburger menu */}
                    <div className="hamburger-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        &nbsp;&nbsp;&nbsp;<Link to="/"><GiHamburgerMenu size={30} color={'white'} /></Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <p>Welcome to </p>
                <h1>Rahima's Website</h1>
            </section>
        </>
    )
}

export default Navbar;


