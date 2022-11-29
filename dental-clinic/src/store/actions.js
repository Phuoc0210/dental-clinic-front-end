import {SET_IS_LOGIN, SET_USER_NAME, SET_USER_ROLE,SET_IS_ADMIN} from './constants'

export const setIsLogin = payload => ({
    type: SET_IS_LOGIN,
    payload
})
export const setIsAdmin = payload => ({
    type: SET_IS_ADMIN,
    payload
})
export const setUserName = payload => ({
    type: SET_USER_NAME,
    payload
})
export const setUserRole = payload => ({
    type: SET_USER_ROLE,
    payload
})