import actions from '../Actions'
import { updateObject } from './utility'


const intitialState = {
    products: [],
    customers: [],
    sales: [],
    productsSearchFilter: [],
    customersSearchFilter: [],
    recentActivity: []
}

const requests = (state = intitialState, action) => {
    switch (action.type) {

        case actions.SET_PRODUCT:
            return updateObject(state, {
                products: action.products,
            })
        case actions.SET_CUSTOMER:
            return updateObject(state, {
                customers: action.customers,
            })
        case actions.SET_SALES:
            return updateObject(state, {
                sales: action.sales,
            })
        case actions.SET_PRODUCT_SEARCH:
            return updateObject(state, {
                productsSearchFilter: action.searchResult,
            })

        case actions.SET_CUSTOMER_SEARCH:
            return updateObject(state, {
                customersSearchFilter: action.searchResult,
            })
        case actions.SET_RECENT_ACTIVITY:
            return updateObject(state, {
                recentActivity: action.activity
            })
        default: return state
    }
}

export default requests

