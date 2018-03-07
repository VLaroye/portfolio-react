import styled from 'styled-components';

const SideMenuContainer = styled.div`
    min-width : 25%;
    max-width: 25%;
    height: 100%;
    box-shadow: 8px 2px 15px lightgray;
    overflow-y: auto;
    text-align: center;

    ::-webkit-scrollbar-track {
	    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar {
        width: 7px;
	    background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 2em;
    }

    h3 {
        font-family: 'Anton', sans-serif;
        letter-spacing: 0.1em;
    }
`;

export default SideMenuContainer;