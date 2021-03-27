import actions from '../Actions'
import { updateObject } from './utility'


const intitialState = {
    products: [],
    customers: []
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

        default: return state
    }
}

export default requests

