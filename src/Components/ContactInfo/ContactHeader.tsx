import React from 'react';
import {ContactHeaderWrapper} from "../../UI/Elements/Contact/ContactHeaderWrapper";
import {ContactTitle} from "../../UI/Elements/Contact/ContactTitle";
import {ContactAvatar} from "../../UI/Elements/Contact/ContactAvatar";
import {useTypedSelector} from "../../Hooks/useTypedSelector";
import {ContactRole} from "../../UI/Elements/Contact/ContactRole";
import {Button} from "../../UI/Elements/Button";
import {PhoneOutlined} from "@ant-design/icons";

const ContactHeader = () => {
    const { status, imgUrl, phone } = useTypedSelector(state => state.user)

    return (
        <ContactHeaderWrapper>
            <ContactTitle>Contact Info</ContactTitle>

            <ContactAvatar src={imgUrl ? imgUrl : '/user.jpg'} status={status} />

            <ContactTitle style={{margin: 0}}>Alena Rhiel Madsen</ContactTitle>

            <ContactRole>Sr. Visual Designer</ContactRole>

            { phone && <a href={`tel:${phone}`}>
                <Button>
                    Call
                    <PhoneOutlined style={{marginLeft: 10}} />
                </Button>
            </a>}
        </ContactHeaderWrapper>
    );
};

export default ContactHeader;