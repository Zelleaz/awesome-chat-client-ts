import React, {useEffect} from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import {Wrapper} from "../../UI/Elements/Wrapper";
import {initSidebarCreator} from "../../Store/reducers/sidebarReducer/sidebarCreators";
import {PageTypes} from "../../Store/reducers/sidebarReducer/types";
import {useAppDispatch} from "../../Hooks/useAppDispatch";

const Home = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initSidebarCreator({
            pageType: PageTypes.chat,
            activeChatId: 0,
            searchedPersonal: [],
            searchedGroups: [],
            isLoading: false,
            rooms: []
        }))
    }, [])

    return (
        <Wrapper>
            <Sidebar type={PageTypes.chat} />
        </Wrapper>
    );
};

export default Home;