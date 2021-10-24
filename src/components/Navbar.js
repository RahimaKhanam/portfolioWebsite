import React, { useState } from 'react';
import "./Navbar.css";
import { FaLinkedinIn, FaMediumM, FaGithub } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';



const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
            <nav className="main-nav">
                {/* #1 logo section */}
                <div className="logo">
                    <h2>
                        RK.
                    </h2>
                </div>

                {/* #2 Menu section */}
                <div className={
                    showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                }>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* #3 Social media icons */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a className="linkedin" href="https://www.linkedin.com/in/rahimakhanam" target="_rahi"><FaLinkedinIn size={30} /></a>
                        </li>
                        <li>
                            <a className="github" href="https://github.com/RahimaKhanam" target="_rahm"><FaGithub  size={30} /></a>
                        </li>
                        <li>
                            <a className="medium" href="https://medium.com/@rahimakhanam" target="_rahim"><FaMediumM  size={30}/></a>
                        </li>
                    </ul>

                    {/* Hamburger menu */}
                    <div className="hamburger-menu" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <a href="#"><GiHamburgerMenu size={30} color={'white'} /></a>
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
