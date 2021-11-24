import {Action} from "../../store";
import {UserStatuses} from "../../../types";
import {User} from "../../../Api/User/types";
import {Room} from "../../../Api/Room/types";

export enum PageTypes {
    chat = 1,
    group = 2,
    favorite = 3,
    search = 4
}

export interface SearchResults {
    searchedGroups: Room[]
    searchedPersonal: User[]
}

export interface SidebarState {
    pageType: PageTypes
    activeChatId: number
    searchedGroups: Room[]
    searchedPersonal: User[]
    rooms: Room[]
    isLoading: boolean
}

export enum SidebarActionTypes {
    initSidebar = 'INIT_SIDEBAR',
    setPageType = 'SET_PAGE_TYPE',
    setSidebarLoading = 'SET_SIDEBAR_LOADING',
    setSearchResults = 'SET_SEARCH_RESULTS',
    changeRoomStatus = 'CHANGE_ROOM_STATUS',
    setRooms = 'SET_ROOMS',
    setLastMessage = 'SET_LAST_MESSAGE',
    appendRooms = 'APPEND_ROOMS',
    incrementNewMessages  = 'INCREMENT_NEW_MESSAGES',
    clearNewMessages = 'CLEAR_NEW_MESSAGES'
}

export type initSidebar = Action<SidebarActionTypes.initSidebar, SidebarState>
export type setPageType = Action<SidebarActionTypes.setPageType, PageTypes>
export type SetSidebarLoading = Action<SidebarActionTypes.setSidebarLoading, boolean>
export type SetSearchResults = Action<SidebarActionTypes.setSearchResults, SearchResults>
export type ChangeRoomStatus = Action<SidebarActionTypes.changeRoomStatus, { userId: number, status: UserStatuses }>
export type SetRooms = Action<SidebarActionTypes.setRooms, Room[]>
export type SetLastMessage = Action<SidebarActionTypes.setLastMessage, { body: string, date: string, roomId: number, userId: number }>
export type AppendRooms = Action<SidebarActionTypes.appendRooms, Room[]>
export type IncrementNewMessages = Action<SidebarActionTypes.incrementNewMessages, { roomId: number, userId: number }>
export type ClearNewMessages = Action<SidebarActionTypes.clearNewMessages, { roomId: number, userId: number }>



export type SidebarAction =
    initSidebar |
    setPageType |
    SetSidebarLoading |
    SetSearchResults |
    ChangeRoomStatus |
    SetRooms |
    SetLastMessage |
    AppendRooms |
    IncrementNewMessages |
    ClearNewMessages