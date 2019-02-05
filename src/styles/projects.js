import styled from 'styled-components'

const wrapper = styled.div`
    position: relative;
    z-index: 200;
    width: 100%;
    min-height: 60vh;
    background-color: black;
    overflow: hidden;
`

const container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const itembox = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    background: white;
    margin: 0 5px 15px 5px;
    overflow: hidden;
`

const content = styled.div`
    position: relative;
    width: 100%;
    background-color: white;
    overflow: hidden;
`

const thumb = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    background-image: url(${props => props.thumb});
    background-size: cover;
    background-position: center;
    transition: all 0.2s ease-in-out;
    transform: scale(1);
    &:hover {
        transform: scale(1.1);
    }
`

const title = styled.h2`
    color: black;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    margin: 10px 15px;
`

const text = styled.p`
    color: black;
    font-size: 16px;
    font-weight: 400;
    margin: 10px 15px;
`

const link = styled.a`
    position: absolute;
    z-index: 2300;
    bottom: 0;
    right: 0;
    font-size: 14px;
    color: black;
    text-transform: uppercase;
    padding: 10px 15px;
    background-color: rgba(0,0,0,0,0);
    transition: all 0.2s;
    &:hover {
        background-color: rgba(0,0,0,0.6);
        color: white;
    }
`

export {
    wrapper,
    container,
    itembox,
    content,
    thumb,
    title,
    text,
    link
}