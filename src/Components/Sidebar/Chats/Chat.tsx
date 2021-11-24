import React, {FC} from 'react';
import {ChatGroup} from "../../../UI/Elements/Groups/ChatGroup/ChatGroup";
import {GroupImg} from "../../../UI/Elements/Groups/ChatGroup/GroupImg";
import {GroupTitle} from "../../../UI/Elements/Groups/ChatGroup/GroupTitle";
import {GroupMessage} from "../../../UI/Elements/Groups/ChatGroup/GroupMessage";
import {GroupNotifier} from "../../../UI/Elements/Groups/ChatGroup/GroupNotifier";
import {GroupDots} from "../../../UI/Elements/Groups/ChatGroup/GroupDots";
import {GroupLastSentTime} from "../../../UI/Elements/Groups/ChatGroup/GroupLastSentTime";
import TimeCorrector from "../../../Utils/TimeCorrector";
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../../Hooks/useTypedSelector";
import {UserStatuses} from "../../../types";
import {PageTypes} from "../../../Store/reducers/sidebarReducer/types";
import {Room} from "../../../Api/Room/types";

interface ChatProps extends Room {
    isActive: boolean
}

const Chat: FC<ChatProps> = ({
    type, name,
    id, imgUrl, isActive, users, messages,
    lastMessageDate, lastMessageBody, lastAuthorId
                             }) => {
    const user = useTypedSelector(state => state.user)
    const { pageType, activeChatId } = useTypedSelector(state => state.sidebar)

    const receiver = users.find(u => user.id !== u.id)
    const current = users.find(u => user.id === u.id)

    const roomData = current ? current.RoomUsers : null

    const isLastByUser = lastAuthorId === user.id

    return (
        <ChatGroup isActive={id === activeChatId} >
            <Link style={
                {
                    display: 'flex',
                    alignItems: 'center',
                    padding: 15,
                    width: '100%'
                }
            } to={`/${PageTypes[pageType]}/${id}`}>
                <GroupImg status={type === PageTypes.group ? UserStatuses.ONLINE : receiver?.status ?? UserStatuses.OFFLINE} imgUrl={imgUrl} />

                <div>
                    <GroupTitle isActive={isActive}>
                        {type === PageTypes.chat ? receiver?.name : name}
                    </GroupTitle>
                    <GroupMessage isActive={isActive}>
                        {lastMessageBody && lastMessageBody?.length > 0 ? lastMessageBody : "It's empty. Start new chat together!"}
                    </GroupMessage>
                </div>

                { lastMessageDate &&
                <GroupLastSentTime isActive={isActive} >
                    {TimeCorrector.matchDates(lastMessageDate)}
                </GroupLastSentTime> }

                { roomData && roomData.newMessageCount > 0 && <GroupNotifier>{roomData.newMessageCount}</GroupNotifier> }
                { isLastByUser && roomData && (roomData.newMessageCount < 1 || !roomData.newMessageCount) &&  <GroupDots /> }
            </Link>
        </ChatGroup>
    );
}

export default Chat;