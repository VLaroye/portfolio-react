import styled from 'styled-components';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const MenuToggler = styled(FontAwesomeIcon)`
    position: relative;
    right: 3%;
    font-size: 2em;
    height: 100%;

    &:hover {
        color: orangered;
    }
`;

export default MenuToggler;