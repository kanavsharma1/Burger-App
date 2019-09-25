import React from 'react';
import Aux from '../../hoc/auxilary';
import Toolbar from '../navigation/toolbar/toolbar';
import classes from './layout.css';

const layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <div>

            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>

    );
}
export default layout;