import React, { Component } from 'react';
import Aux from '../../../hoc/auxilary';
import Button from '../../UI/button/button';

class OrderSummary extends Component {
    //this could be 
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(ingKey => {
            return <li key={ingKey}>
                <span style={{ textTransform: 'capitalize' }}>{ingKey} </span>: {this.props.ingredients[ingKey]}</li>
        })
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicius burger with following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to checkout </p>
                <p><strong> Total Price : {this.props.price}</strong></p>
                < Button clicked={this.props.purchaseCancel} btnType="Danger" > CANCEL</Button >
                <Button clicked={this.props.purchaseContinue} btnType="Success">CONTINUE</Button>
            </Aux >
        )
    }
}

export default OrderSummary;