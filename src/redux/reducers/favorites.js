const initialState = {
    favProducts: []
}

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            let productInFavorites = false;
            const updatedFavProducts = state.favProducts.map(product => {
                if (product.id === action.payload.product.id) {
                    productInFavorites = true;
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product;
                }
            })

            if (!productInFavorites) {
                return Object.assign({}, state, {
                    favProducts: [
                        ...state.favProducts,
                        {
                            ...action.payload.product,
                            quantity: 1
                        }
                    ]
                })
            } else {
                return Object.assign({}, state, {
                    favProducts: updatedFavProducts
                });
            }
        case 'REMOVE_FROM_FAVORITES':
            const filteredFavProducts = state.favProducts.filter(product => {
                return product.id !== action.payload.id
            });

            return Object.assign({}, state, {
                favProducts: filteredFavProducts
            });
        default:
            return state;
    }
}

