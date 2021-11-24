import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Legend} from "../../UI/Elements/Form/Legend";
import {Input} from "../../UI/Elements/Form/Input";
import {Button} from "../../UI/Elements/Button";
import {useAppDispatch} from "../../Hooks/useAppDispatch";
import {validateStrings} from "../../Utils/validateStrings";
import UserApi from "../../Api/User/UserApi";
import {setUserCreator} from "../../Store/reducers/userReducer/userCreators";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    })

    const dispatch = useAppDispatch()

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        const name = event.target.getAttribute('name')

        setFormData({
            ...formData,
            [`${name}`]: value
        })
    }

    const submit = async (event: FormEvent) => {
        event.preventDefault()
        const data = formData

        const name = data.name.trim()
        const password = data.password.trim()

        if (validateStrings([name, password])) {
            const { data } = await UserApi.login(name, password)
            if (data.id) {
                dispatch(setUserCreator({
                    ...data,
                    name
                }))
            }
        }
    }

    return (
        <form style={{width: '100%'}} onSubmit={submit}>
            <Legend>
                Username
                <Input required value={formData['name']} onChange={onChangeHandler} name='name' placeholder='Enter your username...' type='text' />
            </Legend>

            <Legend>
                Password
                <Input required value={formData['password']} onChange={onChangeHandler} name='password' placeholder='Enter your password...' type='password' />
            </Legend>

            <Button>Log In</Button>
        </form>
    );
};

export default LoginForm;