import React from 'react';

import { faBars } from '@fortawesome/fontawesome-free-solid';

// COMPONENTS
import TopBarContainer from './Container/TopBarContainer';
import Logo from '../Logo/Logo';
import MenuToggler from './MenuToggler/MenuToggler';

const topBar = (props) => (
    <TopBarContainer>
        <Logo>Logo</Logo>    
        <MenuToggler icon={faBars} />
    </TopBarContainer>
)

export default topBar;