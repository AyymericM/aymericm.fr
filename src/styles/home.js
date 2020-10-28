import styled from 'styled-components'

const container = styled.div`
    height: 100vh;
    padding: 90px 0 0 90px;
    box-sizing: border-box;
    margin-right: auto;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

const text = styled.p`
    font-weight: 300;
    font-size: 18px;
    cursor: default;
    letter-spacing: 0.1rem;
    text-align: center;
`

export {
    container,
    text
}