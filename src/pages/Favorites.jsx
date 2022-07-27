import React from "react";
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { removeFromFavorites } from '../redux/favorites/FavoritesActions'
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

                {
                    props.favProducts.length
                    ? <div className="w-100">
                        <div className="d-flex justify-content-between text-center h4 text-bold">
                            <p className="w-25">Produs</p>
                            <p className="w-25">Pret</p>
                            <p className="w-25">Cantitate</p>
                            <p className="w-25">Total</p>
                        </div>
                        {
                            props.favProducts.map(product => {
                                return <div className="d-flex justify-content-between align-items-center text-center" key={product.id}>
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <img src={product.image} alt="Produs"/>
                                        <p>{ product.name }</p>
                                    </div>
                                    <p className="w-25">{ product.price } { product.currency }</p>
                                    <p className="w-25">{ product.quantity }</p>
                                    <div className="w-25 d-flex justify-content-center">
                                        <p className="mr-2">{ product.price * product.quantity } { product.currency }</p>
                                        <div onClick={() => props.removeFromFavorites({id: product.id})}>
                                            <Close />
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        <div className="d-flex justify-content-end border-top">
                            <div className="w-25 d-flex align-items-center justify-content-center">
                                <p className="my-4 text-center font-weight-bold">Total de plată: </p>
                            </div>
                            <div className="w-25">
                                <p className="my-4 text-center">
                                </p>
                            </div>
                        </div>
                    </div>
                    : <div className="d-flex flex-column align-items-center">
                        <p className="h3">Nu ai produse în Favorite!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                    </div>
                }
            
                
            </div>
        </Layout>
      
    )
}

function mapStateToProps(state) {
    // console.log("--------------");
    // console.log("state.favorites.favProducts.length:", state.favorites);
    // console.log("state.cart.favProducts.length:", state.favorites);
    // console.log("--------------");
    // console.log("state.favorites:", state.favorites);
    // console.log("state.favorites.favProducts:", state.favorites.favProducts);
    
    // console.log("state ------:", state)
    return {
        favProducts: state.favorites.favProducts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);