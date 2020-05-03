import React from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap'
import styled from 'styled-components'
import time from '../assets/img/time.jpg'

const Styles= styled.div`
    .jumbotron {
        background: url(${time}) no-repeat fixed bottom;
        background-size: cover;
        color: #e9ecef;
        height: 200px;
        position: relative;
        z-index: -2;

        .overlay{
            background-color: #e9ecef;
            opacity: 0.6;
            position: absolute;
            top: 0;
            left: 0;
            bottom:0;
            right: 0;
            z-index: -1;
        }
    }
`;

export const Jumbotron=()=>(
    <Styles>
        <Jumbo fluid={true} className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome</h1>
                <p>Learn from me</p>
            </Container>
        </Jumbo>
    </Styles>

)