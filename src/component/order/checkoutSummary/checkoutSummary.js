import React from 'react';

import Burger from '../../Burger/burger';
import Button from '../../UI/button/button';
import classes from './checkoutSummary.css';

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>we hope it taste well....</h1>
            <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked>Cancel</Button>
            <Button btnType="Success" clicked>Continue</Button>
        </div>
    )
}

export default CheckoutSummary;