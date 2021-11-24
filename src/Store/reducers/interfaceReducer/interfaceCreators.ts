import {InterfaceActionTypes, SetMessagesLoading, toggleContactInfoOpen, toggleFileLoaderOpen} from "./types";

export const setContactInfoView = (value: boolean): toggleContactInfoOpen => ({
    type: InterfaceActionTypes.toggleContactInfoOpen,
    payload: value
})

export const toggleFileLoaderView = (): toggleFileLoaderOpen => ({
    type: InterfaceActionTypes.toggleFileLoaderOpen,
    payload: null
})

export const setMessagesLoading = (payload: boolean): SetMessagesLoading => ({
    type: InterfaceActionTypes.setMessagesLoading,
    payload
})