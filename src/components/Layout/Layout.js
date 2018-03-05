import React, { Component, Fragment } from 'react';

// COMPONENTS
import TopBar from '../TopBar/TopBar';
import Menu from '../Menu/Menu';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <TopBar />
                <Menu />
                {this.props.children}
            </Fragment>
        )
    }
}

export default Layout;