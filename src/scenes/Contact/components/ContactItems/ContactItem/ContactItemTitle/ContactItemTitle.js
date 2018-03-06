import styled from 'styled-components';

const ContactItemTitle = styled.div`
    color: ${props => props.color ? props.color : 'inherit'}; 
    text-align: center;
`;

export default ContactItemTitle;