import React from 'react';
import styled from 'styled-components';

// ROUTING
import { Link } from 'react-router-dom';

// FONTAWESOME
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/fontawesome-free-solid';

import logo from '../../assets/img/logo.png';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StatusIndicatorContainer = styled.div`
    position: absolute;
    min-width: 5%;
    top: 5%;
    left: 5%;
    display: flex;
    justify-content: space-between;
    
    p {
        font-family: 'Anton', sans-serif;
        margin: 0;
    }
`;

const StatusIndicator = styled.div`
    background-color: green;
    box-shadow: 0 0 20px lightgray inset;
    width: 20px;
    height: 20px;
    border-radius: 10px;
`;

const Menu = styled.div`
    position: absolute;
    right: 5%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const MenuItems = styled.ul`
    list-style: none;
    min-height: 40%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin: 0;
    padding: 0;
`;

const MenuItem = styled.li`
    a {
        padding: 5px;
        color: inherit;
        text-decoration: none;
        border-bottom: 1px dashed orangered;
        font-family: 'Anton', sans-serif;
        letter-spacing: 0.1em;
        font-size: 1.5em;
    }

    a:hover {
        color: white;
        background-color: orangered;
    }
`;

const Logo = styled.img`
    max-height: 20%;
    position: relative;
`;

const homePage = (props) => (
    <Container>
        <StatusIndicatorContainer>
            <StatusIndicator />
            <p>Disponible</p>
        </StatusIndicatorContainer>
        <Logo src={logo} />
        <Menu>
            <MenuItems>
                <MenuItem><Link to="/presentation">Présentation <FontAwesomeIcon icon={faCaretRight} /></Link></MenuItem>
                <MenuItem><Link to="/realisations">Réalisations <FontAwesomeIcon icon={faCaretRight} /></Link></MenuItem>
                <MenuItem><Link to="/contact">Contact <FontAwesomeIcon icon={faCaretRight} /></Link></MenuItem>
            </MenuItems>
        </Menu>
    </Container>
);

export default homePage;