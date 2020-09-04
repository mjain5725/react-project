import React, { Component } from'react';
import {Route, Redirect} from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
import * as actions from '../../source/actions/index';

class Checkout extends Component{

    checkoutCancelledHandler = () =>{
        this.props.history.goBack();
        // this.props.onPurchaseCancel();
    }

    checkoutContinuedHandler = () =>{
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        let summary =<Redirect to="/"/>
        if(this.props.ings){
            const purchasedRedirect = this.props.purchased ? <Redirect to="/"/>: null
            summary =(
            <div>
                {purchasedRedirect}
                <CheckoutSummary 
                    ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.path + '/contact-data'} 
                    component={ContactData} />
            </div>
            ); 
        }
        return summary
    }
}

const mapStateToProps = state =>{
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

// const mapDispatchToProps = dispatch =>{
//     return{
//         onPurchaseCancel: () => dispatch(actions.purchaseCancel())
//     }
// }

export default connect(mapStateToProps)(Checkout);