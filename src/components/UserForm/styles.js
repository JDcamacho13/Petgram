import styled from 'styled-components';

export const Form = styled.form`
    padding: 16px 0;
`

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 8px;
    padding: 8px 4px;
    display: block;
    width: 100%;
`

export const Button = styled.button`
    background-color: #8d00ff;
    border-radius: 3px;
    color: white;
    height: 32px;
    display: block;
    width: 100%;
    text-align: center;
    &[disabled]{
        opacity: .3;
    }
`

export const Tittle = styled.h2`
    font-size: 16px;
    font-weight: 500;
    padding: 8px 0;
`

export const Error = styled.span`
    display: block;
    font-size: 14px;
    text-align: center;
    padding: 8px 0px;
    margin: 10px 0px 10px;
    width: 100%;
    -moz-border-radius-topleft: 8px;
    -moz-border-radius-topright:8px;
    -moz-border-radius-bottomleft:8px;
    -moz-border-radius-bottomright:8px;
    -webkit-border-top-left-radius:8px;
    -webkit-border-top-right-radius:8px;
    -webkit-border-bottom-left-radius:8px;
    -webkit-border-bottom-right-radius:8px;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
    border-bottom-left-radius:8px;
    border-bottom-right-radius:8px;
    background-color: rgba(215, 44, 44, 0.3);
    background: rgba(215, 44, 44, 0.3);  
`
