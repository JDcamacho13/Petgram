import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';
import { fadeIn } from '../../styles/animation';

export const Nav = styled.nav`
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    height: 50px;
    align-items: center;
    background: #fcfcfc;
    justify-content: space-around;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 1000;
`
export const Link = styled(LinkRouter)`
    display: inline-flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #888;
    line-height: 20px;
    transition: 0.15s;

    &[aria-current] {
        color: black;

        &:after {
            ${fadeIn({ time: '0.25s' })}
            content: '•';
            position: absolute;
            bottom: 0;
            font-size: 34px;            
        }
    }
`
