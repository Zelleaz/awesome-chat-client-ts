import React, {useState} from 'react';
import {ContactSettingsItem} from "../../../UI/Elements/Contact/ContactSettings/ContactSettingsItem";
import {ContactNotificationStatus} from "../../../UI/Elements/Contact/ContactSettings/ContactNotificationStatus";

const ContactMute = () => {
    const [isChecked, setIsChecked] = useState(true)

    return (
        <ContactSettingsItem onClick={() => {
            setIsChecked(!isChecked)
        }}>
            Mute Notifications

            <ContactNotificationStatus isChecked={isChecked} />
        </ContactSettingsItem>
    );
};

export default ContactMute;