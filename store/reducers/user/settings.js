import Cookies from 'js-cookie'
import {
  USER_SETTINGS_UPDATE_LANGUAGE,
  USER_SETTINGS_DARK_MODE_ON,
  USER_SETTINGS_DARK_MODE_OFF
} from '../../types'

const initialState = {
  language: 'pt-br',
  darkMode: Cookies.get('darkMode') === 'ON' ? true : false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SETTINGS_UPDATE_LANGUAGE:
      return { ...state, language: action.payload }
    case USER_SETTINGS_DARK_MODE_ON:
      return { ...state, darkMode: true }
    case USER_SETTINGS_DARK_MODE_OFF:
      return { ...state, darkMode: false }
    default:
      return state
  }
}

export default reducer
