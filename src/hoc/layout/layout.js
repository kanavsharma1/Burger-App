import React, { Component } from 'react';
import Aux from '../auxilary';
import Toolbar from '../../component/navigation/toolbar/toolbar';
import classes from './layout.css';
import SideDrawer from '../../component/navigation/sideDrawer/sideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <div>

                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux >

        );
    }



}
export default Layout;