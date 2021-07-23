import React, { useContext } from 'react';
import { Context } from '../Context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../querys/RegisterMutation';
import { LoginMutation } from '../querys/LoginMutation';

export const NotRegisteredUser = () => {
    const { registerMutation, loading: loadingReg, error: errorReg } = RegisterMutation();
    const { loginMutation, loading: loadingLog, error: errorLog } = LoginMutation();
    const { activateAuth } = useContext(Context);

    const onSubmitRegistro = ({ email, password }) => {
        const input = { email, password }
        const variables = { input }
        registerMutation({ variables })
            .then(({ data }) => {
                const { signup } = data
                activateAuth(signup);
            })
    }

    const onSubmitLogin = ({ email, password }) => {
        const input = { email, password }
        const variables = { input }
        loginMutation({ variables })
            .then(({ data }) => {
                const { login } = data
                activateAuth(login);
            })
    }

    const errorMsgReg = errorReg && 'El usuario ya existe o hay algun problema';
    const errorMsgLog = errorLog && 'Datos erroneos o hay algun problema';

    return (
        <>
            <UserForm error={errorMsgReg} disable={loadingReg} tittle='Registrarse' onSubmit={onSubmitRegistro} />
            <UserForm error={errorMsgLog} disable={loadingLog} tittle='Iniciar Sesión' onSubmit={onSubmitLogin} />
        </>
    )
}
