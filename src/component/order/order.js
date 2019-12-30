import React from 'react';
import Classes from './order.css';


const Order = (props) => {

    const ingredients = [];
    for (let ingredient in props.ingredients) {
        ingredients.push({
            name: ingredient,
            price: props.ingredients[ingredient]
        })
    }

    const IngredientOutput = ingredients.map(ig => {
        return <span style={{ textTransform: 'capitalize', display: 'inline-block', margin: '0px 8px', padding: '8px', border: '1px solid black' }} key={ig.name}> {ig.name}({ig.price})</span>
    })

    return (
        <div className={Classes.Order}>
            <p>Ingredients :{IngredientOutput}  </p>
            <p>price: <strong>USD{props.price}</strong></p>
        </div>
    )

}
export default Order;