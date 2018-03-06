import React from 'react';

// COMPONENTS
import ContactHeaderContainer from './Container/ContactHeaderContainer';
import ContactHeaderImg from './HeaderImg/ContactHeaderImg';
import ContactPageTitle from './PageTitle/ContactPageTitle';

// IMAGES
import headerImg from '../../../../assets/img/contact-header.jpg';

const contactHeader = () => (
    <ContactHeaderContainer>
        <ContactHeaderImg src={headerImg} />
        <ContactPageTitle><h2>Contact</h2></ContactPageTitle>
    </ContactHeaderContainer>
);

export default contactHeader;