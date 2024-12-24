import React from 'react';
import { Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton, GuestButton, HomeContainer, SchoolInfo,SchoolImage, Title, LoremTextContainer,AdminRegisterLink } from '../styles/styles';
import {LoremIpsum} from 'lorem-ipsum';
import bg from '../assets/bg.jpg';
import bg1 from '../assets/bg1.jpg';
import {Link, useNavigate} from 'react-router-dom';

 
const lorem = new LoremIpsum();

const Home = ()=> {
    const navigate = useNavigate();


    const handleLoginClick = () => {

    };
    return (
        <>
        <Navbar>
            <Logo src={bg1} alt ='Logo' />
            <NavigationLinks>
            <NavLink href='#'>About us</NavLink>
            <NavLink href='#'>Products</NavLink>
            <NavLink href='#'>Contact us</NavLink>
            </NavigationLinks>
            <ButtonsContainer>
                <LoginButton>SignIn</LoginButton>
                <GuestButton>Guest Mode</GuestButton>
            </ButtonsContainer>
        </Navbar>
        <HomeContainer>
            <SchoolInfo>
                <Title>School Management System</Title>
                {/* <LoremTextContainer>
                    <p>
                        {LoremText}
                    </p>
                </LoremTextContainer> */}
                <AdminRegisterLink>Admin Register</AdminRegisterLink>
            </SchoolInfo>
            <SchoolImage src= {bg} alt="pupils"/>
        </HomeContainer>
        </>
    )
};

export default Home;