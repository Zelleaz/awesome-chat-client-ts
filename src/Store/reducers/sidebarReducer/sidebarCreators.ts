import {
    AppendRooms,
    ChangeRoomStatus,
    ClearNewMessages,
    IncrementNewMessages,
    initSidebar,
    PageTypes,
    SearchResults,
    SetLastMessage,
    setPageType,
    SetRooms,
    SetSearchResults,
    SetSidebarLoading,
    SidebarActionTypes,
    SidebarState
} from "./types";
import {RootDispatch} from "../../store";
import {UserStatuses} from "../../../types";
import {Room} from "../../../Api/Room/types";

export const initSidebarCreator = (data: SidebarState): initSidebar => ({
    type: SidebarActionTypes.initSidebar,
    payload: data
})

export const setPageTypeCreator = (type: PageTypes): setPageType => ({
    type: SidebarActionTypes.setPageType,
    payload: type
})

export const setSidebarLoading = (loading: boolean): SetSidebarLoading => ({
    type: SidebarActionTypes.setSidebarLoading,
    payload: loading
})

export const setSearchResults = (data: SearchResults): SetSearchResults => ({
    type: SidebarActionTypes.setSearchResults,
    payload: data
})

export const searchChats = (name: string) => async (dispatch: RootDispatch) => {
    dispatch(setSidebarLoading(true))
}

export const changeRoomStatus = (userId: number, status: UserStatuses): ChangeRoomStatus => ({
    type: SidebarActionTypes.changeRoomStatus,
    payload: { userId, status }
})

export const setRooms = (rooms: Room[]): SetRooms => ({
    type: SidebarActionTypes.setRooms,
    payload: rooms
})

export const setLastMessage = (data: {body: string, date: string, roomId: number, userId: number}): SetLastMessage => ({
    type: SidebarActionTypes.setLastMessage,
    payload: data
})

export const appendRooms = (rooms: Room[]): AppendRooms => ({
    type: SidebarActionTypes.appendRooms,
    payload: rooms
})

export const incrementNewMessages = (roomId: number, userId: number): IncrementNewMessages => ({
    type: SidebarActionTypes.incrementNewMessages,
    payload: {roomId, userId}
})

export const clearNewMessages = (roomId: number, userId: number): ClearNewMessages => ({
    type: SidebarActionTypes.clearNewMessages,
    payload: { userId, roomId }
})