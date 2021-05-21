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

export const setProductSearch = (searchResult) => {
    return {
        type: actions.SET_PRODUCT_SEARCH,
        searchResult
    }
}

export const setCustomerSearch = (searchResult) => {
    return {
        type: actions.SET_CUSTOMER_SEARCH,
        searchResult
    }
}

export const setSales = (sales) => {
    return {
        type: actions.SET_SALES,
        sales
    }
}

export const setRecentActivity = (activity) => {
    return {
        type: actions.SET_RECENT_ACTIVITY,
        activity
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

export const searchProducts = (product) => {
    return (dispatch, getState) => {
        const token = getState().auth.user.token
        axios.get(`https://oregon-api.herokuapp.com/products/product/search?product=${product}`, {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then(res => {
                // console.log(res.data.products)
                // callback({ success: true, res: res.data })
                dispatch(setProductSearch(res.data.products))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const searchCustomers = (customer) => {
    return (dispatch, getState) => {
        const token = getState().auth.user.token

        axios.get(`https://oregon-api.herokuapp.com/customers/customer/search?customer=${customer}`, {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then(res => {
                console.log(res)
                // callback({ success: true, res: res.data })
                dispatch(setCustomerSearch(res.data.customers))
            })
            .catch(error => {
                console.log(error)
            })
    }
}


export const addSale = (product, customer, purchasePrice, sellPrice, profit, cash, credit, balance, callback) => {
    return (dispatch, getState) => {
        const token = getState().auth.user.token

        const data = {
            product: product,
            customer: customer,
            purchasePrice: purchasePrice,
            sellPrice: sellPrice,
            profit: profit,
            cash: cash,
            credit: credit,
            balance: balance
        }

        axios.post('https://oregon-api.herokuapp.com/products/sale', data, {
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
            })
    }
}

export const getSales = () => {
    return (dispatch, getState) => {
        const token = getState().auth.user.token

        axios.get('https://oregon-api.herokuapp.com/products/sales', {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then(res => {
                dispatch(setSales(res.data.sales))
                // console.log(res.data.sales)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const addActivity = (data) => {
    return (dispatch, getState) => {

        const token = getState().auth.user.token

        axios.post('https://oregon-api.herokuapp.com/products/stats', data, {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then(res => {
                // console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const getActivity = () => {
    return (dispatch, getState) => {

        const token = getState().auth.user.token

        axios.get('https://oregon-api.herokuapp.com/products/stats', {
            headers: {
                ContentType: 'Application/json',
                Authorization: token
            }
        })
            .then(res => {
                dispatch(setRecentActivity(res.data.activities))
            })
            .catch(error => {
                console.log(error)
            })
    }
}