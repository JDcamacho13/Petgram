import React from 'react';
import { Button } from './style';
import propTypes from 'prop-types';

export const SubmitButton = ({ disable, onClick, children }) => (
    <Button disabled={disable} onClick={onClick}>{children}</Button>
)

SubmitButton.propType = {
    disable: propTypes.bool,
    onClick: propTypes.func,
    children: propTypes.node.isRequired
}
