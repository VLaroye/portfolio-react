import React, { Component, Fragment } from 'react';

// COMPONENTS
import Container from './components/Container/SideMenuContainer';
import SideMenuItems from './components/SideMenuItems/SideMenuItems';
import SideMenuItem from './components/SideMenuItems/SideMenuItem/SideMenuItem';

// FONTAWESOME
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp } from '@fortawesome/fontawesome-free-solid';

class SideMenu extends Component {
    render() {

        const projects = this.props.projects
            .map((project, index) => {

                const beginningDate = new Date(project.devStartDate);
                const endingDate = new Date(project.devEndDate);

                return (
                    <Fragment>
                        <SideMenuItem 
                            key={project.id}
                            onClick={projectId => this.props.handleProjectFocus(project.id)}
                        >
                            <h4>{project.name}</h4>
                            <p>Technologies : {project.technologies.toString()}</p>
                            <p>Début : {beginningDate.getMonth()} / {beginningDate.getFullYear()}</p>
                            <p>Fin : {endingDate.getMonth()} / {endingDate.getFullYear()}</p>
                        </SideMenuItem>

                        {(index < this.props.projects.length - 1) ? <FontAwesomeIcon icon={ faLongArrowAltUp } size='3x' /> : null}
                    </Fragment>
                )
            });

        return (
            <Container>
                <h3>Liste des réalisations</h3>
                <SideMenuItems>
                    {projects}
                </SideMenuItems>
            </Container>
        )
    }
}

export default SideMenu;