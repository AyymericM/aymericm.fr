import styled, { keyframes, css } from 'styled-components'

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

const text = styled.p`
    font-weight: 800;
    font-size: 72px;
    line-height: 100px;
    margin: 10px 0;
    cursor: default;
    text-align: left;
    opacity: 0;
    transform: translateY(150px);
    animation-name: ${fadeIn};
    animation-delay: ${props => props.delay}ms;
    animation-duration: 600ms;
    animation-timing-function: ease-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
`

export {
    container,
    text
}