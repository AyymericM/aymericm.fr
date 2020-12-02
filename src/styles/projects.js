import styled, { keyframes, css } from 'styled-components'
import { colors } from './constants'

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
    background-color: white;
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
    background-image: url(${props => props.thumbnail});
    background-size: cover;
    background-position: center;
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
    ${props => props.disable && css`
        display: none;
    `}
`

const content = styled.div`
    position: absolute;
    cursor: pointer;
    height: 100%;
    width: 100%;
    z-index: 100;
    background: white;
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 0;
    z-index: -1;
    ${props => props.active && css`
        cursor: default;
        opacity: 1;
        z-index: 100;
    `}
`

const close = styled.span`
    position: fixed;
    z-index: 200;
    right: 20px;
    top: 20px;
    font-size: 24px;
    color: ${colors.blue};
    opacity: 0;
    transition: opacity 0.2s ease;
    cursor: pointer;
    ${props => props.active && css`
        opacity: 1;
    `}
`

const markdownContainer = styled.div`
    max-width: 1100px;
    cursor: pointer;
    background-color: white;
    position: relative;
    & * {
        transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform: translateY(50px);
        opacity: 0;
        cursor: pointer;
    }
    & img {
        width: 100%;
        max-height: 30vh;
        object-fit: cover;
        object-position: center;
    }
    & h1 {
        font-size: 56px;
        line-height: 60px;
        margin: 0 0 30px 0;
    }
    & h2 {
        font-size: 42px;
        line-height: 46px;
        margin: 0 0 30px 0;
    }
    & p {
        font-weight: 300;
        font-size: 18px;
        line-height: 32px;
        margin: 0 0 24px 0;
        width: 100%;
    }
    & code {
        width: 100%;
        display: inline-block;
        background-color: ${colors.gray};
        padding: 10px 15px;
        box-sizing: border-box;
        color: black;
        border-radius: 2.5px;
    }
    ${props => !props.useMargin && css`
        margin: 0 auto;
        padding: 90px;
    `}
    ${props => props.useMargin && css`
        margin: 140px auto;
        padding: 60px 80px;
    `}
    ${props => props.active && css`
        cursor: default;
        & * {
            cursor: default;
        }
    `}
    ${props => props.showContent && css`
        & * {
            transform: translateY(0);
            opacity: 1;
        }
    `}
`

const banner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 450px;
    background-image: url(${props => props.source});
    background-size: cover;
    background-position: center;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.65;
    }
`

export {
    wrapper,
    container,
    content,
    close,
    markdownContainer,
    banner
}