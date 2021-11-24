import { UserStatuses} from "../../../types";
import {Action} from "../../store";
import {User} from "../../../Api/User/types";

export enum UserActionTypes {
    SET_USER = 'SET_USER',
    CHANGE_USER_STATUS = 'CHANGE_USER_STATUS',
    TOGGLE_THEME = 'TOGGLE_THEME'
}

export type ColorTheme = string

export interface UserState extends User {
    isAuth: boolean
    theme: ColorTheme
}

export type setUser = Action<UserActionTypes.SET_USER, User>
export type changeUserStatus = Action<UserActionTypes.CHANGE_USER_STATUS, UserStatuses>
export type toggleTheme = Action<UserActionTypes.TOGGLE_THEME, ColorTheme>

export type UserAction =
    setUser |
    changeUserStatus |
    toggleTheme