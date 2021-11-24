import {Room} from "../Room/types";
import {User} from "../User/types";

export interface Message {
    id: number
    body: string
    creationDate: string
    isEdited: boolean
    starredByUsersIds: number[]
    userId: number
    roomId: number

    medias?: Media[]
    user?: User
    room?: Room
}

export interface MessageCreationAttrs {
    userName: string
    userId: number
    body: string
    roomId: number
    creationDate: string
    media: string[]
}

export interface Media {
    id: number
    path: string
    roomId: number
    messageId: number
    room?: Room
    message?: Message
}