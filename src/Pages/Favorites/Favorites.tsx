import React, {useEffect} from 'react';
import {Wrapper} from "../../UI/Elements/Wrapper";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {initSidebarCreator} from "../../Store/reducers/sidebarReducer/sidebarCreators";
import {PageTypes} from "../../Store/reducers/sidebarReducer/types";

const Favorites = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initSidebarCreator({
            pageType: PageTypes.favorite,
            activeChatId: 0,
            searchedPersonal: [],
            searchedGroups: [],
            isLoading: false,
            rooms: []
        }))
    }, [])

    return (
        <Wrapper>
            <Sidebar type={PageTypes.favorite} />
        </Wrapper>
    );
};

export default Favorites;