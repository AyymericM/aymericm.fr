import styled, { keyframes, css } from 'styled-components'
import { colors, sizes, animations } from './constants'



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
    transform: translateY(75px);
    transform-origin: center;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation-name: ${animations.fadeIn};
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
        margin: 10px 0;
        transform: translateY(10vw);
        animation-name: ${animations.fadeInMobile};
    }
    @media ${sizes.isTablet} {
        width: calc(50% - 10px);
        height: 300px;
    }
    ${props => (props.hide || props.willRedirect) && css`
        opacity: 1;
        transform: translateY(0);
        animation-name: ${animations.fadeOut};
        animation-delay: 0;
        animation-duration: 450ms;
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        @media ${sizes.isMobile} {
            transform: translateY(0) !important;
            animation-name: ${animations.fadeOutMobile} !important;
        }
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
    background-color: white;
    position: relative;
    transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: translateY(65px);
    opacity: 0;
    ${props => props.isClosing && css`
        transition-delay: 150ms;
    `}
    @media ${sizes.isMobile} {
        transform: translateY(10vw);
        padding: 60px 22px 0 22px;
        box-sizing: border-box;
        margin: 0 !important;
    }
    & * {
        overflow: hidden !important;
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
    ${props => props.showContent && css`
        transform: translateY(0) !important;
        opacity: 1 !important;
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
    transition: opacity 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    ${props => !props.isClosing && css`
        transition-delay: 550ms;
    `}
    opacity: 0;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.80;
    }
    ${props => props.showContent && css`
        opacity: 1;
    `}
    @media ${sizes.isMobile} {
        display: none !important;
    }
`

export {
    wrapper,
    container,
    close,
    markdownContainer,
    header,
    banner
}