import React, {useEffect, useState} from 'react';
import {Groups} from "../../../UI/Elements/Groups/Groups";
import {useTypedSelector} from "../../../Hooks/useTypedSelector";
import UserApi from "../../../Api/User/UserApi";
import {PageTypes} from "../../../Store/reducers/sidebarReducer/types";
import ChatList from "./ChatList";
import ChatSearch from "./Search/ChatSearch";
import {useAppDispatch} from "../../../Hooks/useAppDispatch";
import {clearNewMessages, setRooms} from "../../../Store/reducers/sidebarReducer/sidebarCreators";
import {Room} from "../../../Api/Room/types";
import RoomApi from "../../../Api/Room/RoomApi";

const Chats = () => {
    const { id } = useTypedSelector(state => state.user)
    const { activeChatId, pageType } = useTypedSelector(state => state.sidebar)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchData = async () => {
            let rooms: Room[] = []
            switch (pageType) {
                case PageTypes.chat:
                    const personal = await UserApi.getPersonalRooms(id)
                    rooms = personal.data
                    break
                case PageTypes.group:
                    const group = await UserApi.getGroupRooms(id)
                    rooms = group.data
                    break

                default: rooms = []
            }
            await RoomApi.clearNewMessages({
                userId: id,
                roomId: Number(activeChatId)
            })
            dispatch(setRooms(rooms))
            dispatch(clearNewMessages(activeChatId, id))
        }
        fetchData()
    }, [pageType, activeChatId])

    return (
        <Groups>
            {pageType === PageTypes.search && <ChatSearch/>}
            <ChatList />
        </Groups>
    );
};

export default Chats;