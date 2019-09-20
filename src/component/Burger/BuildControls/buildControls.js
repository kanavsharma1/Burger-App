import React from 'react';
import classes from './buildControls.css';
import BuildControl from './BuildControl/buildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
]

const buildControls = props => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => {
            return <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)} />
        })}
    </div>
);


export default buildControls;