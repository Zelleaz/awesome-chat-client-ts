import React, {FC} from 'react';
import {SidebarWrapper} from "../../UI/Elements/Sidebar/SidebarWrapper";
import {SidebarBody} from "../../UI/Elements/Sidebar/SidebarBody";
import SBHeader from "./SBHeader";
import SbFooter from "./SBFooter";
import Chats from "./Chats/Chats";
import {PageTypes} from "../../Store/reducers/sidebarReducer/types";

interface SidebarProps { type: PageTypes }

const Sidebar: FC<SidebarProps> = ({ type }) => {
    return (
        <SidebarWrapper>
            <SBHeader />

            <SidebarBody>
                <Chats />
                <SbFooter />
            </SidebarBody>
        </SidebarWrapper>
    );
};

export default Sidebar;