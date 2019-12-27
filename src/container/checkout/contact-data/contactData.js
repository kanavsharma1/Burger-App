import React, { Component } from "react";
import Button from '../../../component/UI/button/button';
import instance from '../../../axios-orders';
import Classes from './contactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postal: ''
        },
        loading: true
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        // alert("let continue then!");
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: "kanav sharma",
                address: {
                    street: "sangvi",
                    pinCode: '41351',
                    country: 'india'
                },
                email: 'kanav@gmail.com'
            }
        }
        instance.post('/orders.json', order).then(response => {
            this.setState({
                loading: false
            })
            this.props.history.push('/')
        }).catch(error => {
            this.setState({
                loading: false
            });
        })

    }

    render() {

        return (
            <div className={Classes.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input className={Classes.Input} type="text" name="name" placeholder="enter name" />
                    <input className={Classes.Input} type="email" name="email" placeholder="enter email" />
                    <input className={Classes.Input} type="text" name="street" placeholder="enter street number" />
                    <input className={Classes.Input} type="text" name="postal" placeholder="postal code" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;