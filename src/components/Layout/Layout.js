import React, { Component, Fragment } from 'react';

// COMPONENTS
import TopBar from '../TopBar/TopBar';
import Menu from '../Menu/Menu';

class Layout extends Component {

    state = {
        isMenuOpen: false
    }

    toggleMenu = () => {
        this.setState((prevState, props) => ({
            isMenuOpen: !prevState.isMenuOpen
        }))
    }

    render() {
        return (
            <Fragment>
                <TopBar toggleMenu={this.toggleMenu} />
                {this.state.isMenuOpen ? <Menu isOpen={this.state.isMenuOpen} toggleMenu={this.toggleMenu} /> : null }
                {this.props.children}
            </Fragment>
        )
    }
}

export default Layout;