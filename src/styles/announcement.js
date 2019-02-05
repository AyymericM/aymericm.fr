import styled, { css } from 'styled-components'
import closeIcon from '../assets/close.svg'

const container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    z-index: 1000;
`

const box = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 600px;
    height: 80px;
    margin-top: 20px;
    background: radial-gradient(ellipse at top, #88e35b, #45B649);
    border-radius: 2px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    opacity: 0;
    padding: 0 20px;
    box-sizing: border-box;
    transition: transform 0.5s cubic-bezier(0.14, 0.17, 0, 0.99);
    transform: translateY(-100px);
    ${props => props.showBox && css`
        opacity: 1;
        transform: translateY(0);
    `}
    & > p {
        font-size: 16px;
        font-weight: 700;
        color: white;
        text-align: center;
        margin-right: 5px;
    }
    & > a {
        text-align: center;
        padding: 5px 8px;
        outline: none;
        font-size: 16px;
        color: white;
        border: 1px solid rgba(255,255,255,0.7);
        border-radius: 2px;
        transition: all 0.2s;
    }
    & > a:hover {
        border: 1px solid rgba(255,255,255,0.4);
    }
    @media (max-width: 600px) {
        margin: 15px 10px 0 10px;
        box-sizing: border-box;
    }
`

const closebox = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    height: 20px;
    width: 20px;
    background-image: url(${closeIcon});
    background-size: cover;
    background-position: center;
    cursor: pointer;
`

export {
    container,
    box,
    closebox
}