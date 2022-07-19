import {
  USER_SETTINGS_UPDATE_LANGUAGE,
  USER_SETTINGS_DARK_MODE_ON,
  USER_SETTINGS_DARK_MODE_OFF
} from '../../types'

export const settingsUpdateLang = (lang) => ({
  type: USER_SETTINGS_UPDATE_LANGUAGE,
  payload: lang
})

export const settingsDarkModeOn = () => ({
  type: USER_SETTINGS_DARK_MODE_ON
})

export const settingsDarkModeOFF = () => ({
  type: USER_SETTINGS_DARK_MODE_OFF
})
