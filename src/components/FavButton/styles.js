import styled, { css } from 'styled-components';
import { fadeIn } from '../../styles/animation';

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding-top: 8px;
    cursor: pointer;
    & svg {
        margin-right: 4px;
        ${fadeIn({ time: '0.25s' })}
        ${props => props.like && css`
            color: #ed4956;
        `}

    }

    &:hover {
        & svg {
            transition: 0.25s;
            transform: scale(1.2);
        }
    }
`
