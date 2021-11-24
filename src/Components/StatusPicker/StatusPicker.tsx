import React from 'react';
import Select from "react-select";
import {UserStatuses} from "../../types";
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import {getStyles} from "./sidebarPickerStyles";
import {getTheme} from "../../UI/theme";
import {StatusPickerContainer} from "../../UI/Elements/StatusPickerContainer";
import {StatusCircleSmall} from "../../UI/Elements/StatusCircle/StatusCircleSmall";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {changeUserStatusCreator} from "../../Store/reducers/userReducer/userCreators";
import {useWsController} from "../../Hooks/useWsController";

const StatusPicker = () => {
    const { status, theme, id } = useTypedSelector(state => state.user)
    const { activeChatId, pageType } = useTypedSelector(state => state.sidebar)
    const wsController = useWsController()
    const currentTheme = getTheme(theme)


    const options = [
        { value: UserStatuses.OFFLINE, label: 'Offline' },
        { value: UserStatuses.ONLINE, label: 'Online' },
        { value: UserStatuses.BUSY, label: 'Busy' },
        { value: UserStatuses.WORKING, label: 'Working' },
    ]

    const styles = getStyles(currentTheme)

    return (
        <StatusPickerContainer>
            <StatusCircleSmall
                top={10}
                left={15}
                status={status}
            />
            <Select
                onChange={async (data) => {
                    if (data) {
                        await wsController.changeStatus({
                            status: data.value,
                            userId: id
                        })
                    }
                }}
                isSearchable={false}
                styles={styles}
                options={options}
                value={options[status]}
            />
        </StatusPickerContainer>
    );
};

export default StatusPicker;