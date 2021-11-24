import React, {FC, useEffect} from 'react';
import Chat from "./Chat";
import {useTypedSelector} from "../../../Hooks/useTypedSelector";
import {socket} from "../../../index";
import {useAppDispatch} from "../../../Hooks/useAppDispatch";
import {
    appendRooms,
    changeRoomStatus, incrementNewMessages,
    setLastMessage,
} from "../../../Store/reducers/sidebarReducer/sidebarCreators";
import {Room} from "../../../Api/Room/types";
import {ChatCreated, SendMessageProps} from "../../../WS/types";
import TimeCorrector from "../../../Utils/TimeCorrector";

const ChatList: FC = () => {
    const { activeChatId, pageType, rooms } = useTypedSelector(state => state.sidebar)
    const { id } = useTypedSelector(state => state.user)
    const dispatch = useAppDispatch()
    useEffect(() => {
        socket.on('status', data => {
            dispatch(changeRoomStatus(data.userId, data.status))
        })

        socket.on('chat_created', (room: ChatCreated) => {
            const userCandidate = room.users.find(user => user.id === id)
            const roomCandidate = rooms.find(r => r.id === room.id)

            if (userCandidate && !roomCandidate) {
                dispatch(appendRooms([room]))
            }
        })

    }, [])

    return (
        <>
            {
                rooms.sort((a,b) => TimeCorrector.getSeconds(b.lastMessageDate ?? '') - TimeCorrector.getSeconds(a.lastMessageDate ?? ''))
                    .map(room => <Chat key={room.id} {...room} isActive={String(room.id) === String(activeChatId)} />)
            }
        </>
    );
};

export default ChatList;