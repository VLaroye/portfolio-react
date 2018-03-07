import styled from 'styled-components';

const SideMenuContainer = styled.div`
    min-width : 25%;
    max-width: 25%;
    height: 100%;
    border-right: 1px solid black;
    overflow-y: auto;
    text-align: center;

    ::-webkit-scrollbar-track {
	    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar {
	    width: 10px;
	    background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-thumb {
	    background-color: #000000;
	    border: 2px solid #555555;
    }

    h3 {
        font-family: 'Anton', sans-serif;
        letter-spacing: 0.1em;
    }
`;

export default SideMenuContainer;