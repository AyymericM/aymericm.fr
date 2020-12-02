import styled, { css } from 'styled-components'

const container = styled.div`
    padding: 90px 0 0 90px;
    box-sizing: border-box;
    margin-right: auto;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
`

const bottomLinks = styled.div`
    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 1000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    transition: opacity 300ms ease-out;
    & > a {
        margin-left: 30px;
    }
    ${props => !props.visible && css`
        opacity: 0;
    `}
    ${props => props.visible && css`
        opacity: 1;
    `}
`

export {
    container,
    bottomLinks
}