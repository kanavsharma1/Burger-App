import React, { Component } from "react";
import Button from '../../../component/UI/button/button';
import instance from '../../../axios-orders';
import Classes from './contactData.css';

import Input from '../../../component/UI/input/input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'your name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'street'
                },
                value: ''
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP CODE'
                },
                value: '',
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'COUNTRY'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'your email'
                },
                value: ''
            },

            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'cheapest' }

                    ]
                },
                value: ''
            }
        },
        loading: false

    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        // alert("let continue then!");
        const formData = {};
        for (let formInputName in this.state.orderForm) {
            formData[formInputName] = this.state.orderForm[formInputName].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            orderData: formData
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

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({ orderForm: updatedOrderForm });
    }
    render() {

        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        return (
            <div className={Classes.ContactData}>
                <h4>Enter your contact data</h4>
                <form onSubmit={this.orderHandler}>
                    {formElementsArray.map(element => {
                        return (
                            <Input
                                key={element.id}
                                elementType={element.config.elementType}
                                elementConfig={element.config.elementConfig}
                                value={element.config.value}
                                changed={(event) => this.inputChangedHandler(event, element.id)} />
                        )
                    })}
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;