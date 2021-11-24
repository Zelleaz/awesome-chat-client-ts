import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import {SidebarLink} from "../../../UI/Elements/Sidebar/SidebarLink";

interface SBLinkProps {
    to: string
    isActive: boolean
    onClick: () => void
}

const SBLink: FC<SBLinkProps> = ({ children, onClick, isActive, to }) => {
    return (
        <Link onClick={onClick} style={{height: '100%'}} to={to}>
            <SidebarLink isActive={isActive}>
                {children}
            </SidebarLink>
        </Link>
    );
};

export default SBLink;