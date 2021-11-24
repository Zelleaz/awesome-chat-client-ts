import {ChatAction, ChatActionTypes, ChatState} from "./types";

const initialState: ChatState = {
    name: '',
    messages: []
}

export const chatReducer = (state: ChatState = initialState, action: ChatAction): ChatState => {
    switch (action.type) {
        case ChatActionTypes.SET_CHAT:
            return {
                ...state,
                ...action.payload
            }
        case ChatActionTypes.SEND_MESSAGE:
            return {
                ...state,
                messages: [action.payload, ...state.messages]
            }
        case ChatActionTypes.SEND_MESSAGES:
            return {
                ...state,
                messages: [...action.payload]
            }
        case ChatActionTypes.APPEND_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, ...action.payload]
            }
        case ChatActionTypes.UPDATE_STATUS:
            return {
                ...state,
                messages: state.messages.map(msg => {
                    if (msg.userId !== action.payload.currentUserId && msg.room && msg.room.users) {
                        return {
                            ...msg,
                            room: {
                                ...msg.room,
                                lastMessageDate: msg.creationDate,
                                lastAuthorId: msg.userId,
                                lastMessageBody: msg.body,
                                users: msg.room.users.map(user => {

                                    if (user.id === action.payload.userId) {
                                        return {
                                            ...user,
                                            status: action.payload.status
                                        }
                                    }

                                    return user
                                })
                            }
                        }
                    }


                    return msg
                })
            }
        default: return state
    }
}