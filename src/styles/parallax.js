import styled from 'styled-components'
import star_bg from '../assets/star_bg_alt.png'

const container = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
`

const content = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
`

const starbg = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    filter: brightness(0.5);
    background-image: url(${star_bg});
    background-position: center;
    background-size: 60%;
`

export {
    container,
    content,
    starbg
}