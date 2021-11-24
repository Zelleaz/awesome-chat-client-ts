import {ApiBase} from "../types";
import axios from "axios";
import UserApi from "../User/UserApi";
import {User} from "../User/types";
import {ChangeLastData, ClearNewMessages, Relation, Relations, Room, RoomCreationAttrs} from "./types";

class RoomApi extends ApiBase{
    private apiUrl = this.url + '/room'

    private async searchPersonalRoom(query: string, userName: string) {
        const data = await UserApi.searchUser(query, userName)
        return data
    }

    private async searchGroupRoom(query: string) {
        const { data } = await axios.get<Room[]>(`${this.apiUrl}/search/${query}`)
        return data
    }


    public async searchRoomById(roomId: number) {
        const { data } = await axios.get<Room>(`${this.apiUrl}/by_id/${roomId}`)
        return data
    }

    public async searchRooms(query: string, userName: string): Promise<{ personal: User[], group: Room[] }> {

        if (query.trim().length === 0) {
            return {
                personal: [],
                group: []
            }
        }

        const personal = await this.searchPersonalRoom(query, userName)
        const group = await this.searchGroupRoom(query)

        return {
            personal, group
        }
    }

    public async createPersonalRoom({firstName, secondName, firstUserId, secondUserId}: RoomCreationAttrs) {
        const res = await axios.post<Relations>(`${this.apiUrl}/create`, {
            firstName, firstUserId, secondName, secondUserId
        })

        return res
    }

    public async getRelation(userId: number, roomId: number) {
        const { data } = await axios.get<Relation>(`${this.apiUrl}/relation/${userId}`, {
            params: { roomId }
        })
        return data
    }

    public async changeLastData (dto: ChangeLastData) {
        const { data } = await axios.put(`${this.apiUrl}/last_data`, {
            ...dto
        })
        return data
    }

    public async clearNewMessages(dto: ClearNewMessages) {
        const { data } = await axios.put(`${this.apiUrl}/new_messages`, {
            ...dto
        })
        return data
    }
}

export default new RoomApi()