import React, {FC, useState} from "react";
import {ChatGroup} from "../../../../UI/Elements/Groups/ChatGroup/ChatGroup";
import {GroupImg} from "../../../../UI/Elements/Groups/ChatGroup/GroupImg";
import {GroupTitle} from "../../../../UI/Elements/Groups/ChatGroup/GroupTitle";
import {GroupMessage} from "../../../../UI/Elements/Groups/ChatGroup/GroupMessage";
import {useTypedSelector} from "../../../../Hooks/useTypedSelector";
import RoomApi from "../../../../Api/Room/RoomApi";
import { useNavigate } from "react-router-dom";
import {User} from "../../../../Api/User/types";
import {Relations, RoomCreationAttrs} from "../../../../Api/Room/types";
import {useWsController} from "../../../../Hooks/useWsController";

const SearchedPersonal: FC<User> = ({ name, status, imgUrl, id, rooms }) => {
    const [isExists, setIsExists] = useState(false)
    const [payload, setPayload] = useState<Relations | null>(null)

    const wsController = useWsController()
    const user = useTypedSelector(state => state.user)
    const navigate = useNavigate()

    const add = async () => {
        if (!isExists) {
            const { data } = await RoomApi.createPersonalRoom({
                firstName: user.name,
                firstUserId: user.id,
                secondName: name,
                secondUserId: id
            })
            setPayload(data)
            setIsExists(true)
            return
        }

        if (payload?.created) {
            const room = await RoomApi.searchRoomById(payload.first.roomId)
            wsController.emitChatCreation({
                id: room.id,
                lastAuthor: room.lastAuthorId ?? 0,
                imgUrl: room.imgUrl ?? '',
                users: room.users,
                lastMessageBody: room.lastMessageBody ?? '',
                lastMessageDate: room.lastMessageDate ?? '',
                name: room.name,
                type: room.type
            })

            return navigate(`/chat/${payload.first.roomId}`)
        }

        navigate(`/chat/${payload?.room.id}`)
    }
    return (
        <ChatGroup onClick={add} style={{
            display: 'flex',
            alignItems: 'center',
            padding: 15,
            width: '100%'
        }} isActive={false} >
            <GroupImg status={status} imgUrl={imgUrl} />

            <div>
                <GroupTitle isActive={false}>
                    {isExists ? `Chat (${name}) already exists! Check it yourself!` : name}
                </GroupTitle>
                <GroupMessage isActive={false}>{!isExists ? 'Click To Add This Chat!' : 'Click To Go To This Chat!'}</GroupMessage>
            </div>
        </ChatGroup>
    )
}



export default SearchedPersonal;