import React from 'react';
import Aux from '../../../hoc/auxilary';
import Button from '../../UI/button/button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
        return <li key={ingKey}>
            <span style={{ textTransform: 'capitalize' }}>{ingKey} </span>: {props.ingredients[ingKey]}</li>
    })
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicius burger with following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout </p>`
            <p><strong> Total Price : {props.price}</strong></p>`
            <Button clicked={props.purchaseCancel} btnType="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContinue} btnType="Success">CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;