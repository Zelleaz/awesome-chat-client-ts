import React, {FC, UIEvent, useEffect, useRef, useState} from 'react';
import {MessagesWrapper} from "../../UI/Elements/Messages/MessagesWrapper";
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import Message from "./Message";
import {
    fetchNewMessages,
    sendManyMessages,
    sendMessageCreator,
    updateMessagesStatus
} from '../../Store/reducers/chatReducer/chatCreators';
import MessagesApi from "../../Api/Messages/MessagesApi";
import {useWsController} from "../../Hooks/useWsController";
import {socket} from "../../index";
import {useDispatch} from "react-redux";
import {SendMessageProps} from "../../WS/types";
import {incrementNewMessages, setLastMessage} from "../../Store/reducers/sidebarReducer/sidebarCreators";
import RoomApi from "../../Api/Room/RoomApi";

const Messages = () => {
    const [isLoading, setIsLoading] = useState(false)
    const ref = useRef<any>()
    const dispatch = useDispatch()

    const { id } = useTypedSelector(state => state.user)
    const { messages } = useTypedSelector(state => state.chat)
    const { activeChatId, pageType, rooms } = useTypedSelector(state => state.sidebar)

    useEffect(() => {
        const setup = async () => {
            dispatch(sendManyMessages([]))
            if (activeChatId > 0) {
                const old = await MessagesApi.getMessages(activeChatId, pageType)
                dispatch(sendManyMessages(old))
            } else {
                dispatch(sendManyMessages([]))
            }
        }
        setup()
    }, [activeChatId])

    useEffect(() => {
        socket.on('status', data => {
            dispatch(updateMessagesStatus({
                status: data.status,
                userId: data.userId,
                currentUserId: id
            }))
        })
    }, [])

    const onScrollHandler = async (e: UIEvent<HTMLElement>) => {
        const el = ref.current

        const max = -(el.scrollHeight - el.clientHeight)
        const top = el.scrollTop

        if (top <= max && messages.length >= 15) {
            await dispatch(fetchNewMessages(messages.length, activeChatId, pageType))
        }
    }

    return (
        <MessagesWrapper onScroll={onScrollHandler} id='message-wrapper' ref={ref}>
            {
                messages.map(message => <Message key={message.id} {...message} />)
            }
        </MessagesWrapper>
    );
};

export default Messages;