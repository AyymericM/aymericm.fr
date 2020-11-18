import styled, { keyframes, css } from 'styled-components'
import { constants as c } from './index'

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(150px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    50% {
        opacity: 0;
    }
    to {
        opacity: 0;
        transform: translateY(-150px);
    }
`

const wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 60px 90px;
    overflow: hidden;
`

const container = styled.div`
    width: 490px;
    height: 470px;
    cursor: pointer;
    background-color: ${c.colors.gray};
    margin: 10px 10px 0 0;
    opacity: 0;
    transform: translateY(150px) scale(1);
    transform-origin: center;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation-name: ${fadeIn};
    animation-delay: ${props => props.hide ? 0 : props.delay}ms;
    animation-duration: 600ms;
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    ${props => props.willRedirect && css`
        opacity: 1;
        transform: translateY(0);
        animation-name: ${fadeOut};
        animation-delay: ${props => props.delay / 2}ms;
        animation-duration: 450ms;
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    `}
    ${props => props.hide && css`
        opacity: 1;
        transform: translateY(0);
        animation-name: ${fadeOut};
        animation-delay: 0;
        animation-duration: 450ms;
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    `}
    ${props => props.active && css`
        position: absolute;
        left: ${props => props.pos.left}px;
        top: ${props => props.pos.top}px;
    `}
    ${props => props.expand && css`
        width: 100vw;
        min-height: 100vh;
        left: ${props => props.pos.relLeft}px;
        top: ${props => props.pos.relTop}px;
        margin: 0;
    `}
`

const content = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 100;
    background: red;
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 0;
    ${props => props.active && css`
        opacity: 1;
    `}
`

const close = styled.span`
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 24px;
    color: ${c.colors.blue};
    opacity: 0;
    transition: opacity 0.2s ease;
    cursor: pointer;
    ${props => props.active && css`
        opacity: 1;
    `}
`

export {
    wrapper,
    container,
    content,
    close
}