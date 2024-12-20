import React from 'react';
import { Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, NavLink, ButtonsContainer, LoginButton, GuestButton, HomeContainer, SchoolInfo,SchoolImage, Title, LoremTextContainer,AdminRegisterLink } from '../styles/styles';
import {LoremIpsum} from 'lorem-ipsum';
import bg from '../assets/bg.jpg';
import bg1 from '../assets/bg1.jpg';
import {Link, useNavigate} from 'react-router-dom';

 
const lorem = new LoremIpsum();

const Home = ()=> {
    const navigate = useNavigate();
    const LoremText = lorem.generateParagraph(1);

    const handleLoginClick = () => {

    };
    return (
        <>
        <Navbar>
            <Logo src={bg1} alt ='Logo' />
            <NavigationLinks>
            <NavLink>About </NavLink>


            </NavigationLinks>
        </Navbar>
        </>
    )
}