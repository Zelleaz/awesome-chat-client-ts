import {UserStatuses} from "../../../types";
import {changeUserStatus, ColorTheme, setUser, toggleTheme, UserActionTypes} from "./types";
import {User} from "../../../Api/User/types";

export const setUserCreator = (user: User): setUser => ({
    type: UserActionTypes.SET_USER,
    payload: user
})

export const changeUserStatusCreator = (status: UserStatuses): changeUserStatus => ({
    type: UserActionTypes.CHANGE_USER_STATUS,
    payload: status
})

export const toggleThemeCreator = (theme: ColorTheme): toggleTheme => {
    const result = theme === 'light' ? 'dark' : 'light'

    return {
        type: UserActionTypes.TOGGLE_THEME,
        payload: result
    }
}