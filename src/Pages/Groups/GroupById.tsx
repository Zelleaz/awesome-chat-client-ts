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
import {initSidebarCreator} from "../../Store/reducers/sidebarReducer/sidebarCreators";
import {PageTypes} from "../../Store/reducers/sidebarReducer/types";

const GroupById = () => {
    const {isContactInfoOpen} = useTypedSelector( state => state.interface)
    const dispatch = useAppDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(initSidebarCreator({
            pageType: PageTypes.group,
            activeChatId: Number(id) ?? 0,
            searchedPersonal: [],
            searchedGroups: [],
            isLoading: false,
            rooms: []
        }))
    }, [id])

    return (
        <Wrapper>
            <Sidebar type={PageTypes.group} />

            <Main isContactVisible={isContactInfoOpen}>
                <Keyboard />
                <Messages />
            </Main>
            {isContactInfoOpen && <ContactInfo />}
        </Wrapper>
    );
};

export default GroupById;