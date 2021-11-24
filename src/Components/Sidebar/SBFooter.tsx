import React from 'react';
import {SidebarFooter} from "../../UI/Elements/Sidebar/SidebarFooter";
import {SearchOutlined, StarOutlined, UsergroupAddOutlined, UserOutlined} from "@ant-design/icons";
import SBLink from "./Chats/SBLink";
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import {PageTypes} from "../../Store/reducers/sidebarReducer/types";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {setPageTypeCreator} from "../../Store/reducers/sidebarReducer/sidebarCreators";

const SbFooter = () => {
    const {pageType} = useTypedSelector(state => state.sidebar)
    const dispatch = useAppDispatch()
    const setType = (type: PageTypes) => {
        dispatch(setPageTypeCreator(type))
    }

    return (
        <SidebarFooter>
            <SBLink onClick={() => setType(PageTypes.chat)} to='/' isActive={pageType === PageTypes.chat}>
                <UserOutlined />
            </SBLink>

            <SBLink onClick={() => setType(PageTypes.group)} to='/group' isActive={pageType === PageTypes.group}>
                <UsergroupAddOutlined />
            </SBLink>

            <SBLink onClick={() => setType(PageTypes.favorite)} to='/favorite' isActive={pageType === PageTypes.favorite}>
                <StarOutlined />
            </SBLink>

            <SBLink onClick={() => setType(PageTypes.search)} to='/search' isActive={pageType === PageTypes.search}>
                <SearchOutlined />
            </SBLink>
        </SidebarFooter>
    );
};

export default SbFooter;