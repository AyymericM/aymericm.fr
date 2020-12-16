import styled, { keyframes, css } from 'styled-components'
import { colors, sizes } from './constants'

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(75px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const fadeInMobile = keyframes`
    from {
        opacity: 0;
        transform: translateY(10vw);
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
        transform: translateY(-75px);
    }
`

const fadeOutMobile = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    50% {
        opacity: 0;
    }
    to {
        opacity: 0;
        transform: translateY(-5vw);
    }
`

const wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 60px 90px;
    overflow: hidden;
    @media ${sizes.isSmallerThanDesktop} {
        margin: 0 60px;
    }
    @media ${sizes.isMobile} {
        margin: 20px 22px;
    }
`

const container = styled.div`
    width: 490px;
    height: 470px;
    cursor: pointer;
    background-color: white;
    margin: 10px 10px 0 0;
    opacity: 0;
    transform: translateY(75px) scale(1);
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
    @media ${sizes.isMobile} {
        width: calc(100vw - 44px);
        height: 30vh;
        margin: 0;
        transform: translateY(10vw);
        animation-name: ${fadeInMobile};
    }
    @media ${sizes.isTablet} {
        width: calc(50% - 10px);
        height: 300px;
    }
    ${props => props.willRedirect && css`
        opacity: 1;
        transform: translateY(0);
        animation-name: ${fadeOut};
        animation-delay: ${props => props.delay / 2}ms;
        animation-duration: 450ms;
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        @media ${sizes.isMobile} {
            transform: translateY(0) !important;
            animation-name: ${fadeOutMobile} !important;
        }
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
        @media ${sizes.isMobile} {
            transform: translateY(0) !important;
            animation-name: ${fadeOutMobile} !important;
        }
    `}
    ${props => props.active && css`
        position: absolute;
        left: ${props => props.pos.left}px;
        top: ${props => props.pos.top}px;
    `}
    ${props => props.expand && css`
        width: 100vw !important;
        min-height: 100vh !important;
        left: 0px;
        top: 0px;
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
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition-delay: 400ms;
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
    right: 35px;
    top: 25px;
    opacity: 0;
    transition: opacity 0.2s ease;
    cursor: pointer;
    font-size: 24px;
    color: ${colors.blue};
    cursor: pointer;
    @media ${sizes.isMobile} {
        font-size: 14px;
        right: 22px;
        top: 20px;
    }
    ${props => props.active && css`
        opacity: 1;
    `}
`

const header = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 0 30px 0;
    margin-bottom: 80px !important;
    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        left: -80px;
        bottom: -60px;
        height: 1px;
        width: calc(100% + 160px);
        background: ${colors.black};
        opacity: 0.1;
        @media ${sizes.isMobile} {
            left: 0;
            width: 100%;
            bottom: -20px;
        }
    }
`

const markdownContainer = styled.div`
    max-width: 1100px;
    cursor: pointer;
    background-color: white;
    position: relative;
    & * {
        transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform: translateY(65px);
        opacity: 0;
        cursor: pointer;
        @media ${sizes.isMobile} {
            transform: translateY(5vw);
        }
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
        @media ${sizes.isMobile} {
            font-size: 24px;
            line-height: 40px;
        }
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
    @media ${sizes.isMobile} {
        padding: 60px 22px 0 22px;
        box-sizing: border-box;
    }
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
        opacity: 0.80;
    }
`

export {
    wrapper,
    container,
    content,
    close,
    markdownContainer,
    header,
    banner
}