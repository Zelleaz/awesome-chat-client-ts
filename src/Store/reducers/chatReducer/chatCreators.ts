import {
    AppendMessages,
    ChatActionTypes,
    ChatInfo,
    sendMessage,
    sendMessages,
    setChat,
    UpdateMessagesStatus
} from "./types";
import { UserStatuses} from "../../../types";
import {RootDispatch} from "../../store";
import {setMessagesLoading} from "../interfaceReducer/interfaceCreators";
import {PageTypes} from "../sidebarReducer/types";
import MessagesApi from "../../../Api/Messages/MessagesApi";
import {Message} from "../../../Api/Messages/types";

export const setChatCreator = (data: ChatInfo): setChat => ({
    type: ChatActionTypes.SET_CHAT,
    payload: data
})

export const sendMessageCreator = (message: Message): sendMessage => ({
    type: ChatActionTypes.SEND_MESSAGE,
    payload: message
})

export const appendMessages = (messages: Message[]): AppendMessages => ({
    type: ChatActionTypes.APPEND_MESSAGES,
    payload: messages
})

export const sendManyMessages = (messages: Message[]): sendMessages => ({
    type: ChatActionTypes.SEND_MESSAGES,
    payload: messages
})

export const fetchNewMessages = (offset: number, chatId: number, pageType: PageTypes) => async (dispatch: RootDispatch) => {
    dispatch(setMessagesLoading(true))
    const messages = await MessagesApi.getMessages(chatId, pageType, offset)
    dispatch(appendMessages(messages))
    dispatch(setMessagesLoading(false))
    if (!messages) {
        return false
    }
}

export const updateMessagesStatus = (data: { status: UserStatuses, currentUserId: number, userId: number }): UpdateMessagesStatus => ({
    type: ChatActionTypes.UPDATE_STATUS,
    payload: data
})