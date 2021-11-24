import {InterfaceAction, InterfaceActionTypes, InterfaceState} from "./types";

const initialState: InterfaceState = {
    isContactInfoOpen: false,
    isFileLoaderOpen: false,
    isMessagesLoading: false
}

export const interfaceReducer = (state: InterfaceState = initialState, action: InterfaceAction): InterfaceState => {
    switch (action.type) {
        case InterfaceActionTypes.toggleContactInfoOpen:
            return {
                ...state,
                isContactInfoOpen: action.payload
            }
        case InterfaceActionTypes.toggleFileLoaderOpen:
            return {
                ...state,
                isFileLoaderOpen: !state.isFileLoaderOpen
            }
        case InterfaceActionTypes.setMessagesLoading:
            return {
                ...state,
                isMessagesLoading: action.payload
            }
        default: return state
    }
}