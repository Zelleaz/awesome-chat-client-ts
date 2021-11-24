import {UserStatuses} from "../../../types";
import {Action} from "../../store";
import {PageTypes} from "../sidebarReducer/types";
import {Message} from "../../../Api/Messages/types";

export interface ChatInfo {
    name: string
    messages: Message[]
}

export type ChatState = ChatInfo

export enum ChatActionTypes {
    SET_CHAT = 'SET_CHAT',
    SEND_MESSAGE = 'SEND_MESSAGE',
    SEND_MESSAGES = 'SEND_MESSAGES',
    APPEND_MESSAGES = 'APPEND_MESSAGES',
    FETCH_MESSAGES = 'FETCH_MESSAGES',
    UPDATE_STATUS = 'UPDATE_STATUS'
}

export type setChat = Action<ChatActionTypes.SET_CHAT, ChatInfo>
export type sendMessage = Action<ChatActionTypes.SEND_MESSAGE, Message>
export type sendMessages = Action<ChatActionTypes.SEND_MESSAGES, Message[]>
export type AppendMessages = Action<ChatActionTypes.APPEND_MESSAGES, Message[]>
export type FetchMessages = Action<ChatActionTypes.FETCH_MESSAGES, {
    offset: number
    chatId: number
    pageType: PageTypes
}>
export type UpdateMessagesStatus = Action<ChatActionTypes.UPDATE_STATUS, {
    status: UserStatuses,
    userId: number,
    currentUserId: number
}>

export type ChatAction =
    setChat |
    sendMessage |
    sendMessages |
    AppendMessages |
    FetchMessages |
    UpdateMessagesStatus