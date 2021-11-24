import React, {Dispatch, FC, SetStateAction} from 'react';
import {TogglerWrapper} from "../../UI/Elements/Form/TogglerWrapper";
import {TogglerTitle} from "../../UI/Elements/Form/TogglerTitle";

interface FormTogglerProps {
    isLogin: boolean
    setIsLogin: Dispatch<SetStateAction<boolean>>
}

const FormToggler: FC<FormTogglerProps> = ({ isLogin, setIsLogin }) => {
    return (
        <TogglerWrapper>
            <TogglerTitle onClick={() => setIsLogin(true)} isActive={isLogin}>Login</TogglerTitle>
            <TogglerTitle onClick={() => setIsLogin(false)} isActive={!isLogin}>Registration</TogglerTitle>
        </TogglerWrapper>
    );
};

export default FormToggler;