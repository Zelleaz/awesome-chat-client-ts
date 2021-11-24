import React from 'react';
import {KeyboardAction} from "../../../UI/Elements/Keyboard/KeyboardAction";
import {AudioOutlined} from "@ant-design/icons";

const KeyboardAudio = () => {
    return (
        <KeyboardAction bottom={11} left={75}>
            <AudioOutlined />
        </KeyboardAction>
    );
}

export default KeyboardAudio;