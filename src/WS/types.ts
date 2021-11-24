import {UserStatuses} from "../types";
import {PageTypes} from "../Store/reducers/sidebarReducer/types";
import {Message, MessageCreationAttrs} from "../Api/Messages/types";
import {User} from "../Api/User/types";

export interface ReceiveMessageProps extends Message {
    activeChatId: number
    currentPageType: PageTypes
    pageType: PageTypes
}

export interface SendMessageProps extends MessageCreationAttrs{
    pageType: PageTypes
    receiverId: number
}

export interface ChangeStatusProps {
    userId: number
    status: UserStatuses
}

export interface SocketMessage extends Message{
    pageType: PageTypes
}

export interface ChatCreated {
    id: number
    name: string
    type: PageTypes.chat | PageTypes.group
    imgUrl: string
    lastMessageBody: string
    lastMessageDate: string
    lastAuthor: number
    users: User[]
}