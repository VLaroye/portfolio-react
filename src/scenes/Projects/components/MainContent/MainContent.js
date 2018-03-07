import React from 'react';

// COMPONENTS
import Container from './Container/MainContentContainer';

const mainContent = (props) => (
    <Container>
        <div>
            <h2>{props.project.name}</h2>
            <div>Image</div>
            <p>{props.project.description}</p>
        </div>
    </Container>
);

export default mainContent;