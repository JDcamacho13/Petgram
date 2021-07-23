import React from 'react'
import { Button } from './style'

export const SubmitButton = ({ disable, onClick, children }) => (
    <Button disabled={disable} onClick={onClick}>{children}</Button>
)
