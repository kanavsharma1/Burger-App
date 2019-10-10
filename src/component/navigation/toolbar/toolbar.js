import React from 'react';
import classes from './toolbar.css';
import Logo from '../../Logo/logo';
import NavigationItems from '../navigation Items/navigationItems';
import DrawerToggle from '../sideDrawer/drawerToggler/drawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>

    </header>
);

export default toolbar;