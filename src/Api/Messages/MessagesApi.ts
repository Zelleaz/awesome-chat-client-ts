import {ApiBase} from "../types";
import {PageTypes} from "../../Store/reducers/sidebarReducer/types";
import axios from "axios";
import {Message, MessageCreationAttrs} from "./types";

class MessagesApi extends ApiBase {
    private apiUrl = this.url + '/messages'

    public async getMessages(chatId: number, type: PageTypes, offset?: number) {
        if (type > 2) {
            return []
        }

        const { data } = await axios.get<Message[]>(`${this.apiUrl}/${chatId}`, {
            params: { offset }
        })
        return data
    }

    public async sendMessage(props: MessageCreationAttrs) {
        const { data } = await axios.post<Message>(`${this.apiUrl}`, {...props})
        return data
    }
}

export default new MessagesApi()