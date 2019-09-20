import React from 'react';
import classes from './burger.css';
import BurgerIngredient from './BurgerIngredient/burgerIngredient';

const burger = props => {
    let modifiedIngredients = Object.keys(props.ingredients).map((ingKey => {
        console.log(ingKey);
        return [...Array(props.ingredients[ingKey])].map((_, index) => {
            console.log(_, index);
            return <BurgerIngredient key={ingKey + index} type={ingKey} />
        })
    })).reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    console.log(modifiedIngredients);
    if (modifiedIngredients.length === 0) {
        modifiedIngredients = <p>Please add some ingredients!</p>
    }

    return (
        <div className={classes.Burger} >
            <BurgerIngredient type="bread-top" />
            {modifiedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}
export default burger;