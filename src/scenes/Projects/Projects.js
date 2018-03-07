import React, { Component } from 'react';

// COMPONENTS
import Layout from '../../components/Layout/Layout';
import Container from './components/Container/ProjectsContainer';
import SideMenu from './components/SideMenu/SideMenu';
import MainContent from './components/MainContent/MainContent';

class Projects extends Component {

    state = {
        projects: [
            {
                id: 1,
                name: 'AMM Fest 3',
                link: 'http://ammfest.fr',
                technologies: ['HTML', 'CSS', 'JS'],
                description: `Réalisation du site du festival AMM Fest. 1er site que je code. 
                    Site ayant pour but de présenter rapidement l'assocation, ainsi que la lise des artistes présents`,
                devStartDate: '2017-05',
                devEndDate: '2017-06'
            },
            {
                id: 2,
                name: 'Web Agency',
                link: 'projet1.vincent-laroye.fr',
                technologies: ['HTML', 'CSS'],
                description: `Premier projet de la formation OpenClassRooms. Objectif : Intégrer une maquette graphique en 
                    n'utilisant que HTML et CSS (pas de Javascript). Adapter cette maquette aux formats Tablette/Mobile`,
                devStartDate: '2017-07',
                devEndDate: '2017-08'
            },
            {
                id: 3,
                name: 'Office du Tourisme Stasbourg',
                link: 'http://otstrasbourg.vincent-laroye.fr',
                technologies: ['Wordpress', 'CSS'],
                description: `2ème projet de la formation OpenClassRooms. Objectif : Créer le site de l'Office du Tourisme de la ville de Strasbourg, en utilisant WordPress.
                    En partant d'un thème prêt à l'emploi, création d'un thème enfant pour customisation.`,
                devStartDate: '2017-08',
                devEndDate: '2017-09'
            },
            {
                id: 4,
                name: 'Location de vélo',
                link: 'http://projet3.vincent-laroye.fr',
                technologies: ['HTML', 'CSS', 'JS'],
                description: `3ème projet de la formation OpenClassRooms. Objectif : Créer un site de Location de vélo en n'utilisant que du Javascript 
                    vanilla (aucune librairie/framework)`,
                devStartDate: '2017-09',
                devEndDate: '2017-10'
            },
        ],
        focusedProjectId: 1,
    }

    handleProjectFocus = (projectId) => {
        this.setState({focusedProjectId: projectId});
    }

    render() {

        const focusedProject = this.state.projects
            .find(project => project.id === this.state.focusedProjectId);

        return (

            <Layout>
                <Container>
                    <SideMenu 
                        projects={ this.state.projects }
                        handleProjectFocus={this.handleProjectFocus}
                    />
                    <MainContent project={focusedProject} />
                </Container>
            </Layout>
        )
    }
} 

export default Projects;