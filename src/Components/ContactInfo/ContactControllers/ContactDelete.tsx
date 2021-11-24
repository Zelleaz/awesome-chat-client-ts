import React from 'react';
import {ContactController} from "../../../UI/Elements/Contact/ContactControllers/ContactController";
import {ContactControllerIcon} from "../../../UI/Elements/Contact/ContactControllers/ContactControllerIcon";
import {DeleteOutlined} from "@ant-design/icons";

const ContactDelete = () => {
    return (
        <ContactController>
            <ContactControllerIcon>
                <DeleteOutlined />
            </ContactControllerIcon>
            Delete Chat
        </ContactController>
    );
};

export default ContactDelete;