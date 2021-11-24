import {PageTypes, SidebarAction, SidebarActionTypes, SidebarState} from "./types";

const initialState: SidebarState = {
    pageType: PageTypes.chat,
    activeChatId: 0,
    isLoading: false,
    searchedGroups: [],
    searchedPersonal: [],
    rooms: []
}

export const sidebarReducer = (state: SidebarState = initialState, action: SidebarAction): SidebarState => {
    switch (action.type) {
        case SidebarActionTypes.initSidebar:
            return {
                ...action.payload
            }
        case SidebarActionTypes.setPageType:
            return {
                ...state,
                pageType: action.payload
            }
        case SidebarActionTypes.setSidebarLoading:
            return {
                ...state,
                isLoading: action.payload
            }
        case SidebarActionTypes.appendRooms:
            return {
                ...state,
                rooms: [...action.payload, ...state.rooms]
            }
        case SidebarActionTypes.setSearchResults:
            return {
                ...state,
                ...action.payload
            }
        case SidebarActionTypes.incrementNewMessages:
            return {
                ...state,
                rooms: state.rooms.map(room => {
                    if (room.id === action.payload.roomId) {
                        const user = room.users.find(u => u.id === action.payload.userId)

                        if (user && user.RoomUsers) {
                            return {
                                ...room,
                                users: room.users.map((u) => {

                                    if (u.id === user.id && u.RoomUsers) {
                                        return {
                                            ...u,
                                            RoomUsers: {
                                                ...u.RoomUsers,
                                                newMessageCount: u.RoomUsers.newMessageCount + 1
                                            }
                                        }
                                    }

                                    return u
                                })
                            }
                        }
                    }

                    return room
                })
            }
        case SidebarActionTypes.clearNewMessages:
            return <SidebarState>{
                ...state,
                rooms: state.rooms.map(room => {

                    if (room.id === action.payload.roomId) {
                        const user = room.users.find(u => u.id === action.payload.userId)

                        if (user && user.RoomUsers) {
                            return {
                                ...room,
                                users: room.users.map(u => {
                                    if (u.id === user.id) {
                                        return {
                                            ...user,
                                            RoomUsers: {
                                                ...user.RoomUsers,
                                                newMessageCount: 0
                                            }
                                        }
                                    }

                                    return u
                                })
                            }
                        }
                    }

                    return room
                })
            }
        case SidebarActionTypes.changeRoomStatus:
            const rooms = state.rooms.map(room => {
                const candidate = room.users.find(user => user.id === action.payload.userId)

                if (candidate) {
                    candidate.status = action.payload.status
                    return {
                        ...room,
                        users: room.users.map(u => {

                            if (u.id === candidate.id) {
                                return {
                                    ...candidate,
                                    status: action.payload.status
                                }
                            }

                            return u
                        })
                    }
                }

                return room
            })
            return {
                ...state,
                rooms
            }
        case SidebarActionTypes.setRooms:
            return {
                ...state,
                rooms: action.payload
            }

        case SidebarActionTypes.setLastMessage:
            return {
                ...state,
                rooms: state.rooms.map(room => {
                    if (room.id === action.payload.roomId) {
                        return {
                            ...room,
                            lastMessageBody: action.payload.body,
                            lastMessageDate: action.payload.date,
                            lastAuthorId: action.payload.userId
                        }
                    }

                    return room
                })
            }
        default: return state
    }
}