import React from 'react';

// COMPONENTS
import Layout from '../../components/Layout/Layout';
import ContactHeader from './components/Header/ContactHeader';
import ContactContainer from './components/Container/ContactContainer';
import ContactItems from './components/ContactItems/ContactItems';
import ContactItem from './components/ContactItems/ContactItem/ContactItem';
import ContactItemTitle from './components/ContactItems/ContactItem/ContactItemTitle/ContactItemTitle';

// FONTAWESOME
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { faLinkedin, faGithubSquare} from '@fortawesome/fontawesome-free-brands';

const contact = (props) => (
    <Layout>
        <ContactContainer>
            <ContactHeader />
            <ContactItems>
                <ContactItem>
                    <ContactItemTitle >
                        <FontAwesomeIcon icon={faEnvelope} size='4x' />
                    </ContactItemTitle>
                        laroye.vincent@gmail.com
                </ContactItem>
                <ContactItem>
                    <ContactItemTitle color='#0077B5' >
                    <FontAwesomeIcon icon={faLinkedin} size='4x' />
                    </ContactItemTitle>
                        <a href="https://www.linkedin.com/in/vincent-laroye/">Vincent Laroye</a>
                </ContactItem>
                <ContactItem>
                    <ContactItemTitle color='#333' >
                    <FontAwesomeIcon icon={faGithubSquare} size='4x' />
                    </ContactItemTitle>
                        <a href="https://github.com/VLaroye">VLaroye</a>
                </ContactItem>
            </ContactItems>
        </ContactContainer>
    </Layout>
);

export default contact;