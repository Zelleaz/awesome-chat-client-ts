import React from 'react';
import {KeyboardAction} from "../../../UI/Elements/Keyboard/KeyboardAction";
import {LinkOutlined} from "@ant-design/icons";
import {useAppDispatch} from "../../../Hooks/useAppDispatch";
import {toggleFileLoaderView} from "../../../Store/reducers/interfaceReducer/interfaceCreators";

const KeyboardUploadFiles = () => {
    const dispatch = useAppDispatch()

    const open = () => {
        dispatch(toggleFileLoaderView())
    }

    return (
        <KeyboardAction onClick={open} left={45} bottom={11}>
            <LinkOutlined />
        </KeyboardAction>
    );
};

export default KeyboardUploadFiles;