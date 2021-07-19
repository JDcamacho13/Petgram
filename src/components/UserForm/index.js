import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Form, Input, Button, Tittle, Error } from './styles'

export const UserForm = ({ disable, error, onSubmit, tittle }) => {
    const email = useInputValue('');
    const password = useInputValue('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email: email.value, password: password.value });
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Tittle>{tittle}</Tittle>
                <Input disabled={disable} placeholder='Email' {...email} />
                <Input disabled={disable} placeholder='Password' type='password' {...password} />
                <Button disabled={disable}>{tittle}</Button>
            </Form>
            {error && <Error>{error}</Error>}
        </>
    )
}
