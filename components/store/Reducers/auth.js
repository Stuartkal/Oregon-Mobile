import actions from '../Actions'
import { updateObject } from './utility'


const intitialState = {
    user: {},
    authenticated: false
}

const auth = (state = intitialState, action) => {
    switch (action.type) {

        case actions.SET_USER:
            return updateObject(state, {
                user: action.user,
                authenticated: true

            })
        case actions.REMOVE_USER:
            return updateObject(state, {
                user: {},
                authenticated: false
            })

        default: return state
    }
}

export default auth

