import {RootDispatch} from "../Store/store";
import {sendMessageCreator} from "../Store/reducers/chatReducer/chatCreators";
import {socket} from "../index";
import {ChangeStatusProps, ChatCreated, ReceiveMessageProps, SendMessageProps} from "./types";
import MessagesApi from "../Api/Messages/MessagesApi";
import TimeCorrector from "../Utils/TimeCorrector";
import {changeUserStatusCreator} from "../Store/reducers/userReducer/userCreators";
import UserApi from "../Api/User/UserApi";
import RoomApi from "../Api/Room/RoomApi";



export class WsController {
    private readonly dispatch: RootDispatch

    constructor(dispatch: RootDispatch) {
        this.dispatch = dispatch
    }

    public receiveMessage(data: ReceiveMessageProps) {
        if (data.roomId === data.activeChatId && data.currentPageType === data.pageType) {
            this.dispatch(sendMessageCreator(data))
        }
    }

    public async sendMessage(data: SendMessageProps) {
        const created = await MessagesApi.sendMessage(data)
        await RoomApi.changeLastData({
            lastMessageAuthorId: data.userId,
            roomId: data.roomId,
            lastMessageBody: created.body,
            lastMessageDate: created.creationDate,
            receiverId: data.receiverId
        })
        this.dispatch(sendMessageCreator({
            id: created.id,
            body: data.body,
            creationDate: TimeCorrector.makeUtc(),
            isEdited: false,
            userId: data.userId,
            roomId: data.roomId,
            starredByUsersIds: [],
        }))
        socket.emit('message', {
            id: created.id,
            body: data.body,
            creationDate: TimeCorrector.makeUtc(),
            isEdited: false,
            staredByUsersIds: [],
            userId: data.userId,
            userName: data.userName,
            roomId: data.roomId,
            pageType: data.pageType,
            room: {
                ...created.room,
                users: [created.user]
            }
        })
    }

    public async changeStatus({ status, userId }: ChangeStatusProps) {
        this.dispatch(changeUserStatusCreator(status))
        await UserApi.changeStatus(userId, status)
        socket.emit('status', {
            userId,
            status
        })
    }

    public emitChatCreation(data: ChatCreated) {
        socket.emit('chat_created', data)
    }
}