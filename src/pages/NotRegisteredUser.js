import React from 'react';
import Context from '../Context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../querys/RegisterMutation';

export const NotRegisteredUser = () => {
    const { registerMutation, loading, error } = RegisterMutation()
    return (
        <Context.Consumer>
            {
                ({ activateAuth }) => {
                    const onSubmit = ({ email, password }) => {
                        const input = { email, password }
                        const variables = { input }
                        registerMutation({ variables })
                            .then(activateAuth)
                    }

                    const errorMsg = error && 'El usuario ya existe o hay algun problema'
                    return (
                        <>
                            <UserForm error={errorMsg} disable={loading} tittle='Registrarse' onSubmit={onSubmit} />
                            <UserForm tittle='Iniciar Sesión' onSubmit={activateAuth} />
                        </>
                    )
                }
            }
        </Context.Consumer>
    )
}
