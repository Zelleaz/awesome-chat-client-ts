import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {Wrapper} from "../../UI/Elements/Wrapper";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Messages from "../../Components/Messages/Messages";
import Keyboard from "../../Components/Keyboard/Keyboard";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import {Main} from "../../UI/Elements/Main";
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {clearNewMessages, initSidebarCreator} from "../../Store/reducers/sidebarReducer/sidebarCreators";
import {PageTypes} from "../../Store/reducers/sidebarReducer/types";
import RoomApi from "../../Api/Room/RoomApi";

const Chat = () => {
    const {isContactInfoOpen} = useTypedSelector( state => state.interface)
    const user = useTypedSelector(state => state.user)
    const { id } = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initSidebarCreator({
            pageType: PageTypes.chat,
            activeChatId: Number(id) ?? 0,
            searchedPersonal: [],
            searchedGroups: [],
            isLoading: false,
            rooms: []
        }))
    }, [id])

    return (
        <Wrapper>
            <Sidebar type={PageTypes.chat} />

            <Main isContactVisible={isContactInfoOpen}>
                <Keyboard />
                <Messages />
            </Main>
            {isContactInfoOpen && <ContactInfo />}
        </Wrapper>
    );
};

export default Chat;