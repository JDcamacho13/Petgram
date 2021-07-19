import styled from 'styled-components';
import { girar } from '../../styles/animation';

export const DivLoading = styled.div`
    margin: 0 auto;
    width: 40px;
    height: 40px;
    border: 5px solid #eee;
    border-top: 5px solid #666;
    border-radius: 50%;
    ${girar}
`
