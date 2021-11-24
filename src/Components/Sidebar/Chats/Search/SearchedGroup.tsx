import React, {FC, useState} from 'react';
import {useTypedSelector} from "../../../../Hooks/useTypedSelector";
import {ChatGroup} from "../../../../UI/Elements/Groups/ChatGroup/ChatGroup";
import {GroupImg} from "../../../../UI/Elements/Groups/ChatGroup/GroupImg";
import {GroupTitle} from "../../../../UI/Elements/Groups/ChatGroup/GroupTitle";
import {GroupMessage} from "../../../../UI/Elements/Groups/ChatGroup/GroupMessage";
import {useNavigate} from "react-router-dom";
import UserApi from "../../../../Api/User/UserApi";
import {socket} from "../../../../index";
import {Room} from "../../../../Api/Room/types";
import {UserStatuses} from "../../../../types";

const SearchedGroup: FC<Room> = ({ imgUrl, name, id }) => {
    const [isAdded, setIsAdded] = useState(false)
    const [room, setRoom] = useState<any>({})
    const user = useTypedSelector(state => state.user)

    const navigation = useNavigate()

    const add = async () => {
        if (!isAdded) {
            const res = await UserApi.joinRoom(user.id, id)
            socket.emit('join', { userId: user.id, roomId: id })
            setRoom(res)
            setIsAdded(true)
        } else {
            navigation(`/group/${room.id}`)
        }

    }

    return (
        <ChatGroup onClick={add} style={{
            display: 'flex',
            alignItems: 'center',
            padding: 15,
            width: '100%'
        }} isActive={false} >
            <GroupImg status={UserStatuses.ONLINE} imgUrl={imgUrl} />

            <div>
                <GroupTitle isActive={false}>
                    Room: {name}
                </GroupTitle>
                <GroupMessage isActive={false}>
                    {isAdded ? 'You Already In Room! Click To Open!' : 'Click To Join This Group Room!!'}
                </GroupMessage>
            </div>
        </ChatGroup>
    );
};

export default SearchedGroup;