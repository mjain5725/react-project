import React from 'react';
import Aux from '../../../hoc/Auxilary/Aux';
import Button from '../../UI/Button/Button';

const orderSummary =(props) => {
   const ingredientSummary = Object.keys(props.ingridients)
            .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingridients[igKey]}
                </li> 
            );
            }); 
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Your delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : $ {props.price.toFixed(2)}</strong></p>
            <p>Continue to CheckOut ?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;