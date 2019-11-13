export const getData = payload => {
    return {
        type: 'GET_DATA',
        payload
    }
}

export const getCheckoutData = payload => {
    return {
        type: 'GET_CHECKOUT_DATA',
        payload
    }
}