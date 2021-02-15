import styled, { css } from 'styled-components'
import { sizes } from './constants'

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
    @media ${sizes.isSmallerThanDesktop} {
        padding: 60px 0 30px 60px;
    }
    @media ${sizes.isTablet} {
        padding: 60px;
    }
    @media ${sizes.isMobile} {
        ${props => !props.isHome && css`
            padding: 75px 22px 0 22px;
        `}
        ${props => props.isHome && css`
            padding: 20px 22px;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
            @supports (-webkit-appearance:none) {
                & {
                    height: calc(100vh - 56px);
                }
            }
        `}
    }
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
    @media ${sizes.isMobile} {
        top: 20px;
        left: 22px;
        bottom: auto;
        right: auto;
        & > a {
            margin-left: 0;
            margin-right: 20px;
            font-size: 14px;
        }
    }
`

export {
    container,
    bottomLinks
}