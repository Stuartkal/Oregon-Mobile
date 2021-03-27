import axios from 'axios'
import actions from '../Actions'

export const setProduct = (products) => {
    return {
        type: actions.SET_PRODUCT,
        products
    }
}

export const setCustomer = (customers) => {
    return {
        type: actions.SET_CUSTOMER,
        customers
    }
}

export const addProduct = (shop, name, unit, quantity, cost, price, callback) => {
    return (dispatch, getState) => {

        const data = {
            shop: shop,
            name: name,
            unit: unit,
            quantity: quantity,
            cost: cost,
            price: price
        }

        const token = getState().auth.user.token

        axios.post('https://oregon-api.herokuapp.com/products/products', data, {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then(res => {
                // console.log(res)
                callback({ success: true, res: res.data })
            })
            .catch(err => {
                console.log(err)
                callback({ success: false, res: err })
            })
    }
}

export const getProducts = () => {
    return (dispatch, getState) => {
        const token = getState().auth.user.token

        axios.get('https://oregon-api.herokuapp.com/products/products', {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then(res => {
                // console.log(res.data.products)
                dispatch(setProduct(res.data.products))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const addCustomer = (name, phoneNumber, address, callback) => {
    return (dispatch, getState) => {
        const data = {
            name: name,
            phoneNumber: phoneNumber,
            address: address
        }

        const token = getState().auth.user.token

        axios.post('https://oregon-api.herokuapp.com/customers/customer', data, {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then(res => {
                callback({ success: true, res: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getCustomers = () => {
    return (dispatch, getState) => {
        const token = getState().auth.user.token

        axios.get('https://oregon-api.herokuapp.com/customers/customers', {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then(res => {
                // console.log(res.data.customers)
                dispatch(setCustomer(res.data.customers))
            })
            .catch(err => {
                console.log(err)
            })
    }
}