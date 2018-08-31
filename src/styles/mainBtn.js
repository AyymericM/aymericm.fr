import styled from 'styled-components'
import btnHoverBg from '../assets/btn-hover-bg.jpg'

const ctnr = styled.div`
    margin: 10px 2px 0 2px;
    position: relative;
    padding: 10px 0;
    box-sizing: border-box;
    & > a {
        position: relative;
        padding: 10px 15px;
        box-sizing: border-box;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.3rem;
        font-weight: 800;
        font-size: 12px;
    }
    &:before {
        position: absolute;
        z-index: 0;
        content: '';
        opacity: 0;
        visibility: visible;
        top: 50%;
        left: 0;
        width: 100%;
        height: 0;
        background-image: url(${btnHoverBg});
        background-position: center;
        background-size: 2000%;
        transition: all 0.2s;
        animation: colorRotate 3s linear infinite;
    }
    &:hover:before {
        opacity: 1;
        visibility: visible;
        height: 100%;
        top: 0;
    }
`

export {
    ctnr
}