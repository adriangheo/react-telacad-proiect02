import React from "react";
import Layout from '../components/Layout';
import { connect } from 'react-redux';


function Favorites(props){
        return(
            <div>
                <Layout>
                    <div 
                    className="container-fluid container-min-max-width" 
                    style={{background: "blue"}}
                    >
                    <h2>Favorites</h2>
                    </div>
                </Layout>
            </div>
        )
}

function mapStateToProps(state) {
    console.log("state.cart.products.length:", state.cart.products.length);
    console.log("state.user.data:", state.user.data);
    console.log("state.favProducts:", state.favProducts);
    console.log("state.favorites:", state.favorites);
    return {
        numberOfProducts: state.cart.products.length,
        user: state.user.data,
        numberOfFavorites: state.favorites
    }
}

export default connect(mapStateToProps, )(Favorites);
