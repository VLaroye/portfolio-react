import React from 'react';

//ROUTING
import { Link } from 'react-router-dom';

// COMPONENTS
import MenuContainer from './Container/MenuContainer';
import ClosingButton from './ClosingButton/ClosingButton';
import MenuItems from './MenuItems/MenuItems';
import MenuItem from './MenuItems/MenuItem/MenuItem';

import { faTimes } from '@fortawesome/fontawesome-free-solid';

const menu = (props) => (
    <MenuContainer>
        <ClosingButton icon={faTimes} onClick={props.toggleMenu} />
        <MenuItems>
            <MenuItem>
                <Link to="/" onClick={props.toggleMenu} >Home</Link> 
            </MenuItem>
            <MenuItem>
                <Link to="/presentation" onClick={props.toggleMenu} >Présentation</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/realisations" onClick={props.toggleMenu} >Réalisations</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/contact" onClick={props.toggleMenu} >Contact</Link>
            </MenuItem>
        </MenuItems>
    </MenuContainer>
);

export default menu;