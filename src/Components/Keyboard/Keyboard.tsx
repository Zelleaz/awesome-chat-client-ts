import React, {ChangeEvent, useRef, useState} from 'react';
import {KeyboardWrapper} from "../../UI/Elements/Keyboard/KeyboardWrapper";
import {KeyboardInput} from "../../UI/Elements/Keyboard/KeyboardInput";
import KeyboardActions from "./KeyboardActions/KeyboardActions";
import {KeyboardButton} from "../../UI/Elements/Keyboard/KeyboardButton";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {sendMessageCreator} from "../../Store/reducers/chatReducer/chatCreators";
import TimeCorrector from "../../Utils/TimeCorrector";
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import FileLoader from "./FileLoader/FileLoader";
import MessagesApi from "../../Api/Messages/MessagesApi";
import {socket} from "../../index";
import {useWsController} from "../../Hooks/useWsController";
import {setLastMessage} from "../../Store/reducers/sidebarReducer/sidebarCreators";

const Keyboard = () => {
    const [message, setMessage] = useState('')
    const ref = useRef<HTMLDivElement>(null)

    const dispatch = useAppDispatch()
    const wsController = useWsController()

    const user = useTypedSelector(state => state.user)
    const { isFileLoaderOpen } = useTypedSelector(state => state.interface)
    const { activeChatId, pageType, rooms } = useTypedSelector(state => state.sidebar)

    const onHeightChange = () => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight
        }
    }

    const updateScroll = () => {
        const wrapper = document.getElementById('message-wrapper')
        if (wrapper) {
            wrapper.scrollTop = 0
        }
    }

    const send = async () => {
        if (message.trim().length > 0) {
            const creationDate = TimeCorrector.makeUtc()
            const room = rooms.find(r => r.id === activeChatId)

            if (room) {
                const receiver = room.users.find(u => u.id !== user.id)
                await wsController.sendMessage({
                    body: message,
                    userName: user.name,
                    userId: user.id,
                    roomId: activeChatId,
                    creationDate,
                    pageType,
                    media: [],
                    receiverId: receiver?.id ?? 0
                })
                setMessage('')
                dispatch(setLastMessage({
                    body: message,
                    roomId: activeChatId,
                    date: creationDate,
                    userId: user.id
                }))
            }
            updateScroll()
        }
    }

    return (
        <KeyboardWrapper>
            <KeyboardInput
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                value={message}
                ref={ref}
                onHeightChange={onHeightChange}
                maxRows={5}
            />
            <KeyboardActions />
            <KeyboardButton onClick={send} >Send</KeyboardButton>
            { isFileLoaderOpen && <FileLoader /> }
        </KeyboardWrapper>
    );
};

export default Keyboard;