import React from 'react';
import ContactMute from "./ContactMute";
import {ContactSettingsWrapper} from "../../../UI/Elements/Contact/ContactSettings/ContactSettingsWrapper";

const ContactSettings = () => {
    return (
        <ContactSettingsWrapper>
            <ContactMute />
        </ContactSettingsWrapper>
    );
};

export default ContactSettings;