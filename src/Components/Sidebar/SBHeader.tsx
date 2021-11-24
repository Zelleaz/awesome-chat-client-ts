import React from 'react';
import {Flex} from "../../UI/Elements/Flex";
import {AvatarSmall} from "../../UI/Elements/Avatar/AvatarSmall";
import {SidebarTitle} from "../../UI/Elements/Sidebar/SidebarTitle";
import StatusPicker from "../StatusPicker/StatusPicker";
import {SidebarHeader} from "../../UI/Elements/Sidebar/SidebarHeader";
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {toggleThemeCreator} from "../../Store/reducers/userReducer/userCreators";
import {Button} from "../../UI/Elements/Button";

const SBHeader = () => {
    const {status, imgUrl, theme, name} = useTypedSelector(state => state.user)
    const dispatch = useAppDispatch()

    return (
        <SidebarHeader>
            <Flex alignItems='center' >
                <AvatarSmall
                    src={imgUrl ? imgUrl  : '/user.jpg'}
                    status={status} />

                <div>
                    <SidebarTitle>{name}</SidebarTitle>
                    <StatusPicker />
                </div>
                <Button
                    onClick={() => dispatch(toggleThemeCreator(theme))}
                    style={{marginLeft: 15}}>Switch</Button>
            </Flex>
        </SidebarHeader>
    );
};

export default SBHeader;