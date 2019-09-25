import React from 'react';
import NavigationItem from './navigation Item/navigationItem';
import classes from './navigationItems.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);


export default navigationItems;