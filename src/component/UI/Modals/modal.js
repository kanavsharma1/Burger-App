import React from 'react';
import Aux from '../../../hoc/auxilary';
import classes from './modal.css';
import BackDrop from '../backdrop/backdrop';

const modal = (props) => (
    <Aux>
        <BackDrop show={props.show} clicked={props.modalClosed} />
        <div className={classes.Modal} style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;