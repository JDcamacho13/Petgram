import styled, { css } from 'styled-components';
import { bounceDown } from '../../styles/animation';

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    &::-webkit-scrollbar {
        display: none;
    }

    ${props => props.fixed && css`
        position: fixed;
        top: -20px;
        left: 0;
        right: 0;
        margin: 0 auto;
        max-width: 400px;
        transform: scale(.5);
        padding: 5px;
        background-color: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        z-index: 1;
        ${bounceDown};

        ${props => props.loading && css`
            display: inline-block;
            overflow: hidden;
            height: 109.5px;
            padding-top: 15px;
            & div {
                width: 75px;
                height: 75px;
            }
        `}
    `}

    ${props => props.loading && css`
        display: inline-block;
        overflow: hidden;
        height: 96px;
    `}
`
export const Item = styled.li`
    padding: 0 8px;
`
