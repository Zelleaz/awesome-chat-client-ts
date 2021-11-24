import React, {useEffect, useState} from 'react';
import {Howl, Howler} from "howler";
import {getTheme} from "./UI/theme";
import AppRouter from "./Routes/AppRouter";
import {ThemeProvider} from "styled-components";
import {useTypedSelector} from "./Hooks/useTypedSelector";
import {useWsController} from "./Hooks/useWsController";
import {SocketMessage} from "./WS/types";
import {socket} from "./index";
import {incrementNewMessages, setLastMessage} from "./Store/reducers/sidebarReducer/sidebarCreators";
import RoomApi from "./Api/Room/RoomApi";
import {useAppDispatch} from "./Hooks/useAppDispatch";

const App = () => {
    const { theme, id } = useTypedSelector(state => state.user)
    const { activeChatId, pageType, rooms } = useTypedSelector(state => state.sidebar)
    const wsController = useWsController()
    const dispatch = useAppDispatch()

    useEffect(() => {
        socket.on('message', async (data: SocketMessage) => {
            wsController.receiveMessage({
                ...data,
                activeChatId,
                currentPageType: pageType
            })

            const room = rooms.find(room => room.id === data.roomId)

            if (room && room.id !== activeChatId) {
                dispatch(incrementNewMessages(room.id, id))
            }

            if (room && room.id === activeChatId) {
                await RoomApi.clearNewMessages({
                    roomId: room.id,
                    userId: id
                })
            }

            if (room) {
                if (!data.user?.RoomUsers?.isMuted ) {
                    Howler.volume(1.0)
                    const sound = new Howl({
                        src: process.env.PUBLIC_URL + '/notify.mp3',
                    })
                    sound.play()
                }
                dispatch(setLastMessage({
                    body: data.body,
                    roomId: room.id,
                    date: data.creationDate,
                    userId: data.userId
                }))
            }
        })



        return () => {
            socket.off('message')
        }
    }, [activeChatId, rooms])


    return (
        <>
            <ThemeProvider theme={getTheme(theme)} >
                <AppRouter />
            </ThemeProvider>
        </>
    );
};

export default App;