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

const textBase = `
    font-weight: 800;
    font-size: 72px;
    line-height: 100px;
    margin: 10px 0;
    cursor: default;
    text-align: left;
`

const blueLink = styled.a`
    font-size: 24px;
    color: ${colors.blue};
    cursor: pointer;
    @media ${sizes.isMobile} {
        font-size: 16px;
    }
`

const main = styled.p`
    ${textBase}
    opacity: 0;
    transform: translateY(75px);
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation-name: ${fadeIn};
    animation-delay: ${props => props.delay}ms;
    animation-duration: 600ms;
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    color: ${colors.black};
    & a {
        transition: color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${colors.blue};
    }
    & a:hover {
        color: white;
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
    @media ${sizes.isSmallerThanDesktop} {
        font-size: 4vw;
        line-height: 4.5vw;
    }
    @media ${sizes.isTablet} {
        font-size: 7vw;
        line-height: 9vw;
    }
    @media ${sizes.isMobile} {
        font-size: 6.5vw;
        line-height: 10vw;
        margin: 5px 0;
        transform: translateY(10vw);
        animation-name: ${fadeInMobile};
    }
`

const projectTitle = styled.h1`
    ${textBase}
    margin: 0 !important;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${colors.black};
`

const loadAnim = keyframes`
    from {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }

    to {
        opacity: 1;
    }
`

const loadAnimEnd = keyframes`
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
`

const loadScreen = styled.div`
    position: absolute;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 72px;
    cursor: default;
    user-select: none;
    opacity: 1;
    transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    ${props => !props.willBeLoaded && css`
        animation-name: ${loadAnim};
        animation-duration: 1000ms;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
    `}
    ${props => props.willBeLoaded && css`
        opacity: 0;
        animation-name: ${loadAnimEnd};
        animation-duration: 600ms;
        animation-timing-function: ease-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    `}
`

export {
    main,
    blueLink,
    projectTitle,
    loadScreen
}