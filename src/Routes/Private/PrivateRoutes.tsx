import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "../../Pages/Home/Home";
import Chat from "../../Pages/Chat/Chat";
import Favorites from "../../Pages/Favorites/Favorites";
import Group from "../../Pages/Groups/Group";
import GroupById from "../../Pages/Groups/GroupById";
import FavoritesById from "../../Pages/Favorites/FavoritesById";
import Search from "../../Pages/Search/Search";
import {socket} from "../../index";
import {useWsController} from "../../Hooks/useWsController";
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import {UserStatuses} from "../../types";

const PrivateRoutes = () => {
    const { id } = useTypedSelector(state => state.user)
    const wsController = useWsController()

    useEffect(() => {
        if (socket.connected) {
            wsController.changeStatus({ userId: id, status: UserStatuses.ONLINE })
        }
    }, [])

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chat/:id' element={<Chat />} />
            <Route path='/group/' element={<Group />} />
            <Route path='/group/:id' element={<GroupById />} />
            <Route path='/favorite' element={<Favorites />} />
            <Route path='/favorite/:id' element={<FavoritesById />} />
            <Route path='/search' element={<Search />} />
            <Route path='*' element={<Home />} />
        </Routes>
    );
};

export default PrivateRoutes;