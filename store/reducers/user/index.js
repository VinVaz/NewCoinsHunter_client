import Cookies from 'js-cookie'
import { HYDRATE } from 'next-redux-wrapper'
import { USER_LOGIN, USER_LOGOUT } from '../../types'

const initialState = {
  userInfo: Cookies.get('userInfo') ? JSON.parse(Cookies.get('userInfo')) : null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.user }
    case USER_LOGIN:
      return { ...state, userInfo: { ...action.payload } }
    case USER_LOGOUT:
      return { ...state, userInfo: null }
    default:
      return state
  }
}

export default reducer
