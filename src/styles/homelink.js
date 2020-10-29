import styled, { css } from 'styled-components'
import { colors } from './constants'

const ctnr = styled.div`
    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 10;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    transition: opacity 200ms ease-out;
    ${props => !props.visible && css`
        opacity: 0;
    `}
    ${props => props.visible && css`
        opacity: 1;
    `}
`

const txt = styled.a`
    color: ${colors.blue};
    font-size: 24px;
    margin-left: 30px;
`

export {
    ctnr,
    txt
}