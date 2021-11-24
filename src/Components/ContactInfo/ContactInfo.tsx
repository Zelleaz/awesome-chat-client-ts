import React from 'react';
import ContactHeader from "./ContactHeader";
import ContactCloser from "./ContactCloser";
import ContactSettings from "./ContactSettings/ContactSettings";
import ContactControls from "./ContactControls";
import {ContactWrapper} from "../../UI/Elements/Contact/ContactWrapper";

const ContactInfo = () => {
    return (
        <ContactWrapper>
            <ContactCloser />
            <ContactHeader />
            <ContactSettings />
            <ContactControls />
        </ContactWrapper>
    );
};

export default ContactInfo;