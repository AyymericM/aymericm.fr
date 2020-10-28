import { injectGlobal } from 'styled-components'
import { colors } from './constants'
import AvenirNextLTPro from '../assets/fonts/AvenirNextLTPro-Demi.otf'

/* eslint no-unused-expressions: 0 */
injectGlobal`
    @font-face {
        font-familly: "Avenir Next LT Pro";
        src: url(${AvenirNextLTPro}) format('truetype');
    }
    @import url('https://fonts.googleapis.com/css?family=Cutive+Mono');
    
    * {
        list-style: none;
    }

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        color: ${colors.black};
        background-color: white;
        font-family: 'Avenir Next LT Pro', sans-serif;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: ${colors.blue};
    }
`