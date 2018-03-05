import styled from 'styled-components';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const ClosingButton = styled(FontAwesomeIcon)`
    position: absolute;
    top: 5%;
    right: 5%;
    font-size: 2em;

    &:hover {
        color: orangered;
    }
`;

export default ClosingButton;