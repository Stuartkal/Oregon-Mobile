import axios from 'axios'
import actions from '../Actions'

export const setUser = (user) => {
    return {
        type: actions.SET_USER,
        user
    }
}

export const logout = () => {
    return {
        type: actions.REMOVE_USER
    }
}

export const login = (phoneNumber, password) => {
    return (dispatch) => {
        const data = {
            phoneNumber: phoneNumber,
            password: password
        }

        axios.post('https://oregon-api.herokuapp.com/auth/signin', data,
            {
                headers:
                {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                // console.log(res.data)
                dispatch(setUser(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const signUp = (username, phoneNumber, password, callback) => {
    return dispatch => {

        const data = {
            username,
            phoneNumber,
            password
        }

        axios.put('https://oregon-api.herokuapp.com/auth/signup', data)
            .then(res => {
                callback({ success: true, res: res.data })
            })
            .catch(err => {
                console.log(err)
                callback({ success: false, res: err })
            })
    }
}