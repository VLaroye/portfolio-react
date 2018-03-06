import styled from 'styled-components';

const headerButton = styled.button`
    width: 49%;
    min-height: 4em;
    border: none;
    font-family: 'Anton';
    font-size: 1.2em;
    letter-spacing: 0.3em;
    border: 3px solid black;
    background-color: white;
    color: black;
    text-transform: uppercase;

    &:hover {
        cursor: pointer;
        background-color: orangered;
        color: white;
        border: none;
    }

    &:focus {
        outline: none;
        border: 3px solid orangered;
    }
`;

export default headerButton;