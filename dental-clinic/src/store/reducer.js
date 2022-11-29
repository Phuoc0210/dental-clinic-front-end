import { actions } from '.'
import {SET_IS_ADMIN, SET_IS_LOGIN, SET_USER_FULLNAME, SET_USER_ID, SET_USER_NAME, SET_USER_ROLE} from './constants'

const initState = {
    isLogin: false,
    isAdmin: false,
    userName: '',
    userRole: '',
}


function reducer(state, action) {
    switch (action.type){
        case SET_IS_LOGIN:
            return {
                ...state,
                isLogin: action.payload
            }
        case SET_IS_ADMIN:
            return {
                ...state,
                isAdmin: action.payload
            }
        case SET_USER_NAME:
            return {
                ...state,
                userName: action.payload
            }
        case SET_USER_ROLE:
            return {
                ...state,
                userRole: action.payload
            }
        default:
            throw new Error('Invalid action.')
    }
}

export default reducer
export {initState}