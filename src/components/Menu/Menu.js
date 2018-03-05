import React from 'react';

// COMPONENTS
import MenuContainer from './Container/MenuContainer';
import ClosingButton from './ClosingButton/ClosingButton';
import MenuItems from './MenuItems/MenuItems';

import { faTimes } from '@fortawesome/fontawesome-free-solid';

const menu = (props) => (
    <MenuContainer>
        <ClosingButton icon={faTimes} onClick={props.toggleMenu} />
        <MenuItems>
            <li>Coucou</li>
            <li>Coucou</li>
        </MenuItems>
    </MenuContainer>
);

export default menu;