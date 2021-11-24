import React, {useState} from 'react';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import FormToggler from "./FormToggler";
import {FormWrapper} from "../../UI/Elements/Form/Form";

const AuthForm = () => {

    const [isLogin, setIsLogin] = useState(true)

    return (
        <FormWrapper>
            <FormToggler isLogin={isLogin} setIsLogin={setIsLogin} />
            {
                isLogin ? <LoginForm /> : <RegisterForm />
            }
        </FormWrapper>
    );
};

export default AuthForm;