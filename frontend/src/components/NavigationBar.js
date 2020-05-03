import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components';


const Styles = styled.div`
    .navbar{
        background-color: lightblue;
    }

    .navbar-brand, navbar-nav .nav-link{
        color: black;
    }
    &:hover: white;
`;

export const NavigationBar = () =>(
    <div>
    <Styles>
    <Navbar expand="lg">
        <Navbar.Brand href="/">Mathematics Tutoring</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id ="basic-navbar-nav">
            <Nav className = "ml-auto">

            <Nav.Item><Nav.Link href="/"><b>Home</b></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/about"><b>About</b></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/contact"><b>Contact</b></Nav.Link></Nav.Item>
            
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Styles>

    
  </div>
)