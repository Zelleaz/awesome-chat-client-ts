import React from 'react';
import {ContactController} from "../../UI/Elements/Contact/ContactControllers/ContactController";
import ContactBlock from "./ContactControllers/ContactBlock";
import ContactDelete from "./ContactControllers/ContactDelete";

const ContactControls = () => {
    return (
        <>
            <ContactBlock />
            <ContactDelete />
        </>
    );
};

export default ContactControls;