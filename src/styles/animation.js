import { keyframes, css } from 'styled-components';

// Imganes al aparecer

const FadeInKeyFrames = keyframes`
from {
    filter: blur(5px);
    opacity: 0;
}

to {
    filter: blur(0);
    opacity: 1;
}
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
    css`animation: ${time} ${FadeInKeyFrames} ${type};`

// Lista de categorias

const bounceDownKeyFrames = keyframes`
    0% {
       top: -90px;
     }
   
     25% {
       top: -20px;
     }
   
     40%{
       top: -10px
     }
   
     65%{
       top: -23px
     }
   
     100% {
       top: -20px;
     }
`

export const bounceDown = ({ time = '1s', type = 'ease' } = {}) =>
    css`
       animation: ${time} ${bounceDownKeyFrames} ${type};
     `

// Loading

const girarKeyframe = keyframes`
     from {
         transform: rotate(0deg);
     }
     to {
         transform: rotate(360deg);
     }
 `

export const girar = ({ time = '2s' } = {}) =>
    css`animation: ${time} ${girarKeyframe} linear infinite;`
