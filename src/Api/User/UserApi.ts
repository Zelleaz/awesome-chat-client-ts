import {ApiBase} from "../types";
import axios from "axios";
import RoomApi from "../Room/RoomApi";
import {User} from "./types";
import {Room} from "../Room/types";
import {UserStatuses} from "../../types";

class UserApi extends ApiBase {
    private apiUrl = this.url + '/user'

    public async register(name: string, password: string) {
        const user = await axios.post<User>(this.apiUrl, {
            name, password
        })
        return user
    }

    public async searchUser(query: string, userName: string) {
        const q = query.length > 0 ? query : '_'
        const { data } = await axios.get<User[]>(`${this.apiUrl}/search/${q}`, {
            params: { userName }
        })
        return data
    }

    public async login(name: string, password: string) {
        const user = await axios.post<User>(`${this.apiUrl}/login`, {
            name, password
        })

        return user
    }

    public async getPersonalRooms(userId: number) {
        const rooms = await axios.get<Room[]>(`${this.apiUrl}/personal/${userId}`)
        return rooms
    }

    public async getGroupRooms(userId: number) {
        const rooms = await axios.get<Room[]>(`${this.apiUrl}/groups/${userId}`)
        return rooms
    }

    public async changeStatus(userId: number, status: UserStatuses) {
        const { data } = await axios.put(`${this.apiUrl}/status`, {
            userId, status
        })
        return data
    }

    public async joinRoom(userId: number, roomId: number) {
        const found = await RoomApi.searchRoomById(roomId)
        const relation = await RoomApi.getRelation(userId, roomId)

        if (found.id && !relation) {
            await axios.post(`${this.apiUrl}/pin`, {
                userId, roomId
            })
            return relation
        }

        return found
    }
}

export default new UserApi()