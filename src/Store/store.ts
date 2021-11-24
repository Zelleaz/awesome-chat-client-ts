import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/userReducer/userReducer";
import {chatReducer} from "./reducers/chatReducer/chatReducer";
import {interfaceReducer} from "./reducers/interfaceReducer/interfaceReducer";
import {sidebarReducer} from "./reducers/sidebarReducer/sidebarReducer";

const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
    interface: interfaceReducer,
    sidebar: sidebarReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

export type Action<T, P> = {
    type: T,
    payload: P
}