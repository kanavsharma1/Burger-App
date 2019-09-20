import React from 'react';
import Aux from '../../hoc/auxilary';
import classes from './layout.css';

const layout = (props) => {
    return (
        <Aux>
            <div>

            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>

    );
}
export default layout;