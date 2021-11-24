import {PageTypes} from "../../Store/reducers/sidebarReducer/types";
import {Media, Message} from "../Messages/types";
import {User} from "../User/types";

export interface Room {
    id: number
    name: string
    type: PageTypes.chat | PageTypes.group
    lastMessageDate?: string
    lastMessageBody?: string
    lastAuthorId?: number
    imgUrl?: string
    media?: Media[]
    messages?: Message[]
    users: User[]
}

export interface RoomCreationAttrs {
    firstName: string
    firstUserId: number
    secondName: string
    secondUserId: number
}

export type Relations = RelList | RelAlreadyExists

interface RelAlreadyExists {
    created: false
    room: Room
}

interface RelList {
    first: Relation,
    second: Relation,
    created: true
}

export interface RelationCreationAttrs {
    userId: number
    roomId: number
}

export interface Relation {
    id: number
    userId: number
    roomId: number
    isFavorite: boolean
    newMessageCount: number
    isBlocked: boolean
    isMuted: boolean
}

export interface ChangeLastData {
    roomId: number
    receiverId: number
    lastMessageAuthorId: number
    lastMessageBody: string
    lastMessageDate: string
}

export interface ClearNewMessages {
    userId: number
    roomId: number
}