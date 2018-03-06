import React from 'react';

// COMPONENTS
import HeaderContainer from './Container/HeaderContainer';
import HeaderButton from './HeaderButton/HeaderButton';

const header = (props) => (
    <HeaderContainer>
        <HeaderButton onClick={e => props.handleSectionChange('presentation')} >Presentation</HeaderButton>
        <HeaderButton onClick={e => props.handleSectionChange('education')} >Formation</HeaderButton>
    </HeaderContainer>
);

export default header;