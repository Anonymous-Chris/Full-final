import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components';
import fire from '../firebase/firebase'
import axios from '../axios-order'

const Styles = styled.div`
    .navbar{
        background-color: white;
    }
    .navbar-brand, navbar-nav .nav-link{
        color: black;
    }
    &:hover: white;
`;


export const NavigationLogin = () =>(
    <div>
    {<Styles>
 
    <Navbar expand="lg" style={{width:'70%', marginLeft:'auto',marginRight:'auto'}}>
        <Navbar.Brand href="/login"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id ="basic-navbar-nav">
            <Nav className = "ml-auto">

            <Nav.Item><Nav.Link href="/login"><b>Dashboard</b></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/surveyform"><b>Survey Form</b></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/survey"><b>Survey</b></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/uploads"><b>Upload & Download</b></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/adduser"><b>Add Admin</b></Nav.Link></Nav.Item>
            
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Styles>}
    </div>
)