import React, { Component } from 'react';

// COMPONENTS
import Layout from '../../components/Layout/Layout';
import Header from './components/Header/Header';
import Presentation from './scenes/Presentation/Presentation';
import Education from './scenes/Education/Education';

class AboutMe extends Component {

    state = {
        activeSection: 'presentation'
    }

    handleSectionChange = section => {
        this.setState({activeSection: section});
    }

    render() {

        let activeSection = null;

        if (this.state.activeSection === 'presentation') {
            activeSection = <Presentation />
        } else if (this.state.activeSection === 'education') {
            activeSection = <Education />
        }

        return (
            <Layout>
                <Header handleSectionChange={this.handleSectionChange} />
                { activeSection }
            </Layout>
        )
    }
}

export default AboutMe;