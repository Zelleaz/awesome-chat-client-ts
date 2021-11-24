import {UserStatuses} from "../../types";
import {Relation, Room} from "../Room/types";
import {Message} from "../Messages/types";

export interface User {
    id: number
    name: string
    password: string
    status: UserStatuses
    lastOnline: string
    imgUrl: string
    phone: string
    rooms?: Room[]
    messages?: Message[]
    RoomUsers?: Relation
}