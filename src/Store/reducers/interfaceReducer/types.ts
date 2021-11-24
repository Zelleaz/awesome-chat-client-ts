import {Action} from "../../store";

export interface InterfaceState {
    isContactInfoOpen: boolean
    isFileLoaderOpen: boolean
    isMessagesLoading: boolean
}

export enum InterfaceActionTypes {
    toggleContactInfoOpen = 'TOGGLE_CONTACT_INFO_OPEN',
    toggleFileLoaderOpen = 'TOGGLE_FILE_LOADER_OPEN',
    setMessagesLoading = 'SET_MESSAGES_LOADING'
}

export type toggleContactInfoOpen = Action<InterfaceActionTypes.toggleContactInfoOpen, boolean>
export type toggleFileLoaderOpen = Action<InterfaceActionTypes.toggleFileLoaderOpen, null>
export type SetMessagesLoading = Action<InterfaceActionTypes.setMessagesLoading, boolean>

export type InterfaceAction =
    toggleContactInfoOpen |
    toggleFileLoaderOpen |
    SetMessagesLoading