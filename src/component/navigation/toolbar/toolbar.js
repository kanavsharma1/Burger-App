import React from 'react';
import classes from './toolbar.css';
import Logo from '../../Logo/logo';
import NavigationItems from '../navigation Items/navigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo></Logo>
        <nav>
            <NavigationItems />
        </nav>

    </header>
);

export default toolbar;