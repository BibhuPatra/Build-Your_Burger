import React, { Component } from 'react';
import Aux from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OderSummary'


const INGEDIENT_PRICES = {
    salad: 15,
    bacon: 30,
    meat: 40,
    cheese: 15,
} 

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            bacon: 0,
            salad: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 40,
        purchaseble: false,
        purchasing: false,
    }

    updatePurchase = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
            return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;   
            }, 0)
        this.setState({ purchaseble: sum > 0})
    }
    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGEDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
        this.updatePurchase(updatedIngredient)
    }

    subIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return
        }
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceSub = INGEDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSub;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
        this.updatePurchase(updatedIngredient)
    }
    purchasingHandler = () => {
        this.setState({purchasing : true})
    }
    purchaseCancel = () => {
        this.setState({ purchasing: false })
    }
    purchaseContinue = () => {
        alert('You Continue!')
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0 
        }
        return (
            <Aux>
                <Modal show = {this.state.purchasing} mod   alClosed = {this.puchaseCancel}>
                    <OrderSummary
                        ingredients={this.state.ingredients} 
                        purchaseCanceled={this.purchaseCancel}
                        price = {this.state.totalPrice}
                        purchaseContinued={this.purchaseContinue}
                    /> 
                </Modal>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredient}
                    ingredientSub={this.subIngredient}
                    disabled={disabledInfo}
                    purchaseble={this.state.purchaseble}
                    ordered = {this.purchasingHandler}
                    price = {this.state.totalPrice}
                    />
            </Aux>
        );
    }
} 
export default BurgerBuilder;