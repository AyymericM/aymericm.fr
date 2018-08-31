import styled from 'styled-components'

const container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const btnsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const title = styled.h1`
    font-weight: 800;
    font-size: 20px;
    cursor: default;
`

const stitle = styled.h1`
    font-weight: 800;
    font-size: 14px;
    cursor: default;
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
    btnsContainer,
    title,
    stitle,
    text
}