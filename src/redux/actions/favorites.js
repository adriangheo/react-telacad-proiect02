export function addToFavorites(payload) {
    return {
        type: 'ADD_TO_FAVORITES',
        payload
    }
}

export function removeFavorites(payload) {
    return {
        type: 'REMOVE_FROM_FAVORITES',
        payload
    }
}