import styled from 'styled-components';

const SideMenuItem = styled.li`
    width: 60%;
    margin: auto;
    margin-top: 1em;
    margin-bottom: 1em;
    border: 1px dashed orangered;
    text-align: center;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: orangered;
    }
`;

export default SideMenuItem;