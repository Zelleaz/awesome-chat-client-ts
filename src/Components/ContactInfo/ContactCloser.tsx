import React from 'react';
import {ContactCloserWrapper} from "../../UI/Elements/Contact/ContactCloserWrapper";
import {CloseOutlined} from "@ant-design/icons";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {setContactInfoView} from "../../Store/reducers/interfaceReducer/interfaceCreators";

const ContactCloser = () => {
    const dispatch = useAppDispatch()

    const close = () => {
        dispatch(setContactInfoView(false))
    }

    return (
        <ContactCloserWrapper onClick={close}>
            <CloseOutlined />
        </ContactCloserWrapper>
    );
};

export default ContactCloser;