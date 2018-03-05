import styled from 'styled-components';

const MenuItem = styled.li`
    font-size: 1.5em;
    text-transform: uppercase;
    font-family: 'Anton', sans-serif;
    letter-spacing: 0.1em;

    a {
        text-decoration: none;
        color: inherit;

        &:hover {
            border-bottom: 3px dotted orangered;
        }
    }
`;

export default MenuItem;