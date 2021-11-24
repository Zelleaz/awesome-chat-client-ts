import React from 'react';
import {ContactController} from "../../../UI/Elements/Contact/ContactControllers/ContactController";
import {StopOutlined} from "@ant-design/icons";
import {ContactControllerIcon} from "../../../UI/Elements/Contact/ContactControllers/ContactControllerIcon";

const ContactBlock = () => {
    return (
        <ContactController>
            <ContactControllerIcon>
                <StopOutlined />
            </ContactControllerIcon>
            Block Contact
        </ContactController>
    );
};

export default ContactBlock;