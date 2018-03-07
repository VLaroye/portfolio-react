import React from 'react';

import { faBars } from '@fortawesome/fontawesome-free-solid';

// COMPONENTS
import TopBarContainer from './Container/TopBarContainer';
import Logo from '../Logo/Logo';
import MenuToggler from './MenuToggler/MenuToggler';

// LOGO
import logo from '../../assets/img/logo.png';

const topBar = (props) => (
    <TopBarContainer>
        <Logo src={logo} />   
        <MenuToggler icon={faBars} onClick={props.toggleMenu} />
    </TopBarContainer>
)

export default topBar;