import {UserAction, UserActionTypes, UserState} from "./types";
import {UserStatuses} from "../../../types";
import LocalStorageHelper from "../../../Utils/LocalStorageHelper";

const initialState: UserState = {
    id: 0,
    name: '',
    imgUrl: '',
    password: '',
    phone: '',
    status: UserStatuses.ONLINE,
    lastOnline: '',
    isAuth: false,
    theme: LocalStorageHelper.get('theme') ?? 'light'
}

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        case UserActionTypes.TOGGLE_THEME:
            LocalStorageHelper.set({key: 'theme', value: action.payload})
            return {
                ...state,
                theme: action.payload
            }
        case UserActionTypes.CHANGE_USER_STATUS:
            return {
                ...state,
                status: action.payload
            }
        default: return state
    }
}