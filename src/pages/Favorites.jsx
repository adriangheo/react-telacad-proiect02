import React from "react";
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions/cart';
import { Link } from 'react-router-dom';
import { ReactComponent as Close} from '../assets/icons/close.svg';


function Favorites(props){
    // console.clear();
    console.log("props.favorites: ", props.favorites);
    console.log("props.cart: ", props.cart);
    console.log("--------------");
    console.log("props: ", props);


    return(
        <Layout>
            <div 
            className="cart-page container-fluid container-min-max-width d-flex flex-column justify-content-center align-items-center"
            style={{background: "MediumTurquoise"}}
            >
            
                
            </div>
        </Layout>
      
    )
}

function mapStateToProps(state) {
    console.log("--------------");
    console.log("state.favorites.favProducts.length:", state.favorites);
    console.log("state.cart.products.length:", state.favorites);
    console.log("--------------");
    console.log("state.favorites:", state.favorites);
    console.log("state.favorites.favProducts:", state.favorites.favProducts);
    
    console.log("state ------:", state)
    return {
        numberOfProducts: state.cart.products.length,
        user: state.user.data,
        numberOfFavorites: state.favorites.favProducts.length,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (payload) => dispatch(removeFromCart(payload))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);