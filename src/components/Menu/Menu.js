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
                <Link to="/" >Home</Link> 
            </MenuItem>
            <MenuItem>
                <Link to="/presentation" >Présentation</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/realisations" >Réalisations</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/contact" >Contact</Link>
            </MenuItem>
        </MenuItems>
    </MenuContainer>
);

export default menu;