import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { FaLinkedin, FaMediumM, FaGithub } from 'react-icons/fa';


function Footer() {
    return (
        <FooterContainer>
            <FooterImage>
                <Link to="/" alt="logo_image">
                    <img src={logo} className="logo-img" />
                </Link>
            </FooterImage>
            <FooterPages>
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
            </FooterPages>

            <FooterIcons>
                <ul>
                    <li>
                        <Link to="https://www.linkedin.com/in/rahimakhanam" target="_rahi"><FaLinkedin size={30} /></Link>

                    </li>
                    <li>
                        <Link to="https://github.com/RahimaKhanam" target="_rahm"><FaGithub size={30} /></Link>
                    </li>
                    <li>
                        <Link to="https://medium.com/@rahimakhanam" target="_rahim"><FaMediumM size={30} /></Link>
                    </li>
                </ul>
            </FooterIcons>
            <FooterBottom>
                © 2021 Rahima Khanam - All Rights Reserved.
            </FooterBottom>
        </FooterContainer >
    )
}

export default Footer;

const FooterContainer = styled.div`
width: 100%;
background-color: #0f0f0f;
height: 35rem;
display: flex;
flex-direction: column;
padding: 5rem 0rem;
place-content: center;
place-items: center;
`;

const FooterImage = styled.div`

`;

const FooterPages = styled.div`
margin-top: 2rem;
ul {
    display: flex;
    height: 6rem;
    display: flex;
    column-gap: 3rem;
  justify-content: space-evenly;
  align-items: center;
}

ul li {
    font-size: 2.3rem;
  }

ul li a {
    text-transform: capitalize;
    color: white;
    transition: 0.5s;
  }

ul li:hover > a {
    transform-origin: left;
    color: rgb(141, 141, 148);
    text-decoration: none;
    transition: 0.5s;
  }

`;

const FooterIcons = styled.div`
ul {
    display: flex;
    height: 6rem;
    display: flex;
    column-gap: 6rem;
  justify-content: space-evenly;
  align-items: center;
}

ul li {
    font-size: 2.3rem;
  }

ul li a {
    text-transform: capitalize;
    color: white;
    transition: 0.5s;
  }

ul li:hover > a {
    transform-origin: left;
    color: rgb(141, 141, 148);
    text-decoration: none;
    transition: 0.5s;
  }
`;

const FooterBottom = styled.div`
height: 6rem;
color: white;
font-size: 1.5rem;
`;
